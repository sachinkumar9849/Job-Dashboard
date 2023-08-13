import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import JobInfo from "./JobInfo";
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import moment from "moment";


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
  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <section className="">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
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
                    className="btn btn-info"
                    onClick={() => console.log("edit")}
                  >
                    Edit
                  </Link>
                  <button type="button" className="btn btn-danger" onClick={()=>console.log("delete job")}>
                        Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

console.log("click");
export default Job;
