import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { deleteJob, setEditJob } from "../features/job/jobSlice";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YYYY");

  return (
    <div className="col-lg-6 mb-4">
      <div className="job_wrap">
        <div className="job_wrap-header border mb-3 d-flex bg-success">
          <div className="job_logo">
            <h1>{company.charAt(0)}</h1>
          </div>
          <div className="job_info">
            <h5>{position}</h5>
            <p>{company}</p>
          </div>
        </div>
        <div className="job_content">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <strong className={`status ${status}`}>{status}</strong>
        </div>

        <div className="job_footer">
          <div className="actions">
          <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() =>
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                )
              }
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => dispatch(deleteJob(_id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

console.log("click");
export default Job;
