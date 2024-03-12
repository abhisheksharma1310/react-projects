import React, { useEffect, useState } from "react";
import User from "./User";

import "./styles.css";

const GitHubProfileFinder = () => {
  const [userName, setUserName] = useState("abhisheksharma1310");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGitHubUserData = async () => {
    setLoading(true);
    //console.log(userName);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    //console.log(data);
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  };

  const handleSubmit = () => fetchGitHubUserData();

  useEffect(() => {
    fetchGitHubUserData();
  }, []);

  if (loading) {
    return <h1>Fetching user data from GitHub. Please wait...</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GitHubProfileFinder;
