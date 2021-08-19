import { formatDistance, parseISO } from "date-fns";
import React from "react";

// TODO: allow Date object as well
const Timestamp = ({ date }) => {
  const parsedDate = parseISO(date);
  return (
    <div className="italic text-gray-500">
      {parsedDate && !isNaN(parsedDate.valueOf())
        ? formatDistance(parsedDate, new Date(), {
            addSuffix: true,
          })
        : "???"}
    </div>
  );
};

export default Timestamp;
