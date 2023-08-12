import React, { useEffect, useState } from "react";
import FormRow from "../components/FormRow";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, loginUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user]);

  return (
    <section>
      <div className="row">
        <div className="col-lg-5 mx-auto">
          <form className="form" onSubmit={onSubmit}>
            <h3>{values.isMember ? "Login" : "Register"}</h3>
            {/* name field */}
            {!values.isMember && (
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
            )}
            {/* email field */}

            <input
              className="form-control"
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {/* password field */}
            <input
              className="form-control my-3"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-info" disabled={isLoading}>
              {isLoading ? "loading..." : "submit"}
            </button>

            <p>
              {values.isMember ? "Not a member yet?" : "Already a member?"}
              <button
                type="button"
                onClick={toggleMember}
                className="btn btn-success ml-3"
              >
                {values.isMember ? "Register" : "Login"}
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
