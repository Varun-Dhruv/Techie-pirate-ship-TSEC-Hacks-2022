import React, {useEffect,useState} from "react";
import { Navbar } from "../../components/import";
import "./Profile.scss";
import axios from 'axios'


const Profile = () => {

  return (
    <div className="profile">
      <form action="localhost:8000/api/Signup" method="post">
        <div className="input-label">
          <label for="email">Email</label>
          <input autoComplete="off" required type="text" name="email"/>
        </div>
        <div className="input-label">
          <label for="name">UserName</label>
          <input autoComplete="off" required type="text" name="name" />
        </div>
        <div className="input-label">
          <label for="password">Password</label>
          <input autoComplete="off" required type="text" name="password" />
        </div>

        <input
          required
          className="btn"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Profile;
