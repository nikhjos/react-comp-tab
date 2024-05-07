import React, { useState } from "react";
import AllJobs from "./AllJobs";
import Data from "./assets/Data";
import Company from "./Company";

const App = () => {
  const [jobs, setJobs] = useState(Data);
  const [index, setIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(0);

  const filterJob = (company) => {
    setIndex(company);
    setCurrentItem(company);
  };

  return (
    <main className="jobs-center">
      <Company
        filterJob={filterJob}
        jobs={jobs}
        currentItem={currentItem}
        curre
      />
      <AllJobs jobs={jobs} index={index} />
    </main>
  );
};

export default App;
