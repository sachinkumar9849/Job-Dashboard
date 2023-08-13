import { useEffect } from "react";
import Job from "./Job";

import { useSelector, useDispatch } from "react-redux";
import { getAllJobs } from "../features/allJobs/allJobsSlice";


const JobsContainer = () => {
  const { jobs, isLoading } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getAllJobs());
  },[]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (jobs.length === 0) {
    return <h1>No jobs to display</h1>;
  }
  return (
    <>
      <h5>Jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </>
  );
};

export default JobsContainer;
