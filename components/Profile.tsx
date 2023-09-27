import React from "react";
import "@/public/scss/profile.scss";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="profile">
      <Image src="/profile.jpg" alt="profile pic" width={200} height={400} />
    </div>
  );
};

export default Profile;
