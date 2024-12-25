import express from 'express';
import dotEnv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import CacheService from './services/cache.service';
import PropertiesRouter from './routes/properties.route';
import LoggerRouter from './routes/logger.route';
import { initPinService } from './services/pin/pin.service';

dotEnv.config();

const app = express();

const CORS_ORIGIN = (process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',')
  : []).map(url => new URL(url).hostname);

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(CORS_ORIGIN.indexOf(new URL(origin).hostname) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: ['GET'],
}));

app.use(compression());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

CacheService.getInstance();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use('/properties', PropertiesRouter);
app.use('/log', LoggerRouter);

initPinService()
  .then(() => {
    console.log('Pin service initialized');
  })
  .catch(error => {
    console.error('Error initializing pin service, pins will not be generated', error);
  })
  .finally(() => {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  });
