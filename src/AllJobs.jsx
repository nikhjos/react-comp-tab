import React, { useState } from "react";

import Duties from "./Duties";

const AllJobs = ({ jobs, index }) => {
  const { id, company, dates, duties, title } = jobs[index];
  return (
    <div>
      <h2>{title} </h2>
      <small className="job-date">{dates} </small>
      <p className="job-company">{company} </p>
      <Duties duties={duties} />
    </div>
  );
};

export default AllJobs;
