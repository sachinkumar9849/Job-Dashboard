import { useState } from "react";
import { FormRow } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateUser } from "../../features/user/userSlice";

const Profile = () => {
  const { isLoading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    lastName: user?.lastName || "",
    location: user?.location || "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;
    if (!name || !email || !lastName || !location) {
      toast.error("please fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      <h1>User Profile</h1>
      <form className="form" onSubmit={handleSubmit}>
        <FormRow
          type="text"
          name="name"
          value={userData.name}
          
          handleChange={handleChange}
          autoComplete="off"
        />
        <FormRow
          type="email"
          name="email"
          value={userData.email}
          handleChange={handleChange}
          autoComplete="off"
        />
        <FormRow
          type="text"
          name="lastName"
          value={userData.lastName}
          handleChange={handleChange}
          autoComplete="off"
        />
        <FormRow
          type='text'
          name='location'
          value={userData.location}
          handleChange={handleChange}
         

        />
        <button type="submit" className="btn btn-success" disabled={isLoading}>
          {isLoading ? "loading..." : "save change"}
        </button>
      </form>
    </>
  );
};

export default Profile;
