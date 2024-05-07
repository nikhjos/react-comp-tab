import React from "react";

const Company = ({ filterJob, jobs, currentItem }) => {
  const companies = jobs.map((job) => job.company);

  return (
    <div className="btn-container">
      {companies.map((company, index) => {
        return (
          <button
            type="button"
            key={index}
            onClick={() => {
              filterJob(index);
            }}
            className={index === currentItem ? "job-btn active-btn" : "job-btn"}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};

export default Company;
