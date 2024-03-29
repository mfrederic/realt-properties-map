import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import 'dayjs/locale/en';
import 'dayjs/locale/fr';

dayjs.extend(utc);
dayjs.extend(localizedFormat)

export default dayjs;