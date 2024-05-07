import React from "react";

const Duties = ({ duties }) => {
  return (
    <div>
      {duties.map((duty, index) => {
        return (
          <p key={index} className="job-desc">
            {duty}
          </p>
        );
      })}
    </div>
  );
};

export default Duties;
