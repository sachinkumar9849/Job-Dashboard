import { useEffect } from "react";
import { FormRow, FormRowSelect } from "../../components";

import {
  clearValues,
  handleChange,
  createJob,
  editJob,
} from "../../features/job/jobSlice";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: { position, company, jobLocation, jobType, status },
        })
      );
      return;
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(
        handleChange({
          name: 'jobLocation',
          value: user.location,
        })
      );
    }
  }, []);

  return (
    <>
      <form className="form">
        <FormRow
          type="text"
          name="position"
          value={position}
          handleChange={handleJobInput}
          autoComplete="off"
        />
        <FormRow
          type="text"
          name="company"
          value={company}
          handleChange={handleJobInput}
          autoComplete="off"
        />
        <FormRow
          type="text"
          name="jobLocation"
          value={jobLocation}
          handleChange={handleJobInput}
          autoComplete="off"
        />
        {/* status  */}
        <FormRowSelect
          name="status"
          value={status}
          handleChange={handleJobInput}
          list={statusOptions}
        />
        {/* job type  */}
        <FormRowSelect
          name="jobType"
          labelText="job type"
          value={jobType}
          handleChange={handleJobInput}
          list={jobTypeOptions}
        />

        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(clearValues())}
        >
          Clear
        </button>

        <button
          disabled={isLoading}
          type="submit"
          onClick={handleSubmit}
          className="btn btn-success"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddJob;
