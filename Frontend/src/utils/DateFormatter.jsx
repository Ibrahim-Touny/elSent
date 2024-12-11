import React from "react";
import Moment from "react-moment";
import 'moment/locale/en-gb'; // Import locale if needed
import moment from 'moment';

const DateFormatter = ({ date }) => {
  return (
    <Moment format="YYYY-MM-DD HH:mm:ss" locale="en-gb">{moment(date).format()}</Moment>
  );
};

export default DateFormatter;
