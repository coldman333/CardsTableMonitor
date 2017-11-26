import moment from 'moment';

const DateConverter = (timestamps) => moment( timestamps ).format('MM.DD.YY hh:mm:ss');
export default DateConverter;
