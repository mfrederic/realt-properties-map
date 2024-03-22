# Realt Properties Map
|  |  |
| -- | -- |
| <img src="https://github.com/mfrederic/realt-properties-map/blob/main/frontend/public/RealT_Logo.png?raw=true" width="300" alt="RealT Properties Map Logo"> | __RealT Properties Map__ is a community project aiming at giving you a clear view of RealT protfolio and/or your own. |

Access the web app here: __[RealT Properties Map](https://rpm.mighte.app/)__

This project uses several external services to get its data from (Realtoken Dashboard, realtoken-thegraph GQL resources)

__Important notice__: RealT Properties Map is __NOT__ related to [RealT](https://realt.co/)

## Run project

To run the project using Docker, you can just use the root `docker-compose.yml` file using the following command.
```sh
docker compose up
```

### Run separatly

Both frontend and backend uses .env file. You can create them from the `example.env` files.

To run the backend, follow these instructions

```sh
cd ./backend

npm install

npm run dev
```

The backend will be made available on `http://localhost:3000` and expect requests from the frontend on `http://localhost:3010`.

To run the frontend, follow these instructions

```sh
cd ./frontend

npm install

npm run start
```

The frontend will be made available on `http://localhost:3010`.

## Contributing

Contributions are welcome. Please make sure to update tests as appropriate.

## License

This project is licensed under the Apache-2.0 License.