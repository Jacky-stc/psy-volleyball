import React from "react";

const Profile = (name: string, position: string, image: string) => {
  return (
    <div className="personal-profile">
      <div
        className="personal-profile-photo"
        style={{ backgroundImage: `url${image}` }}
      ></div>
      <h2>{name}</h2>
      <ul>
        <li>{position}</li>
      </ul>
    </div>
  );
};

export default Profile;
