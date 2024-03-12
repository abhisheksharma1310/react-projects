import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
    bio,
    location,
    blog,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User" />
      </div>
      <div className="name-container">
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User joined on:
          <span>
            {" "}
            {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
              month: "short",
            })} ${createdDate.getFullYear()}`}
          </span>
        </p>
      </div>
      <div className="profile-info">
        <div>
          <p>
            Bio: <span>{bio}</span>
          </p>
        </div>
        <div>
          <p>
            Location: <span>{location}</span>
          </p>
        </div>
        <div>
          <p>
            Public Repos: <span>{public_repos}</span>
          </p>
        </div>
        <div>
          <p>
            Blog:{" "}
            <a href={blog} target="_blank" rel="noreferrer">
              {blog.slice(8)}
            </a>
          </p>
        </div>
        <div>
          <p>
            Followers: <span>{followers}</span>
          </p>
        </div>
        <div>
          <p>
            Following: <span>{following}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
