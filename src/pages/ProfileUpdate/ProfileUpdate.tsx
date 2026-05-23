import { useState } from "react";
import "./ProfileUpdate.css";

const ProfileUpdate = () => {
  const [image, setImage] = useState<File | null>(null);
  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>
          <label htmlFor="avatar">
            <input
              onChange={(e) => setImage(e.target.files?.[0] || null)}
              type="file"
              id="avatar"
              accept=".png, .jpeg, .jpg"
              hidden
            />
            <img
              src={image ? URL.createObjectURL(image) : "/profile-picture.png"}
              alt="profile"
            />
            upload profile image
          </label>
          <input type="text" placeholder="Your name" required />
          <textarea placeholder="Write profile bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img
          className="profile-image"
          src={image ? URL.createObjectURL(image) : "/login-logo.svg"}
          alt="logo"
        />
      </div>
    </div>
  );
};

export { ProfileUpdate };
