import { formatDistance, parseISO } from "date-fns";
import React from "react";

interface TimestampProps {
  date: string;
  className: string;
}
// TODO: allow Date object as well
const Timestamp = ({ date, className }: TimestampProps) => {
  const parsedDate = parseISO(date);
  return (
    <div className={className}>
      {parsedDate && !isNaN(parsedDate.valueOf())
        ? formatDistance(parsedDate, new Date(), {
            addSuffix: true,
          })
        : "???"}
    </div>
  );
};

export default Timestamp;
