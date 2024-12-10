import React from "react";
import Moment from "react-moment";

//AAAAA33333333333333333 dh mesh rady yeshtaghal awel lama beyt3melo import fe Categorylist.jsx el code mesh beyerda yeshtaghalll

export const DateFormatter = ({ date }) => {
  return (
    <>
      <Moment format="D MMM YYYY" withTitle>
        {date}
      </Moment>
    </>
  );
};

/* import React from "react";

export const DateFormatter = ({ date }) => {
  const apiDateString = date;
  const dateObject = new Date(apiDateString);
  const readableDate = dateObject.toLocaleString();

  return <>{readableDate}</>;
};
 */