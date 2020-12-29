/* eslint-disable array-callback-return */
import React from "react";

const SideBar = ({ users, name }) => {
  const onUsersClick = (e) => {
    console.log(e.target.innerText);
  };

  if (!users) {
    return (
      <ul>
        <li className="global">
          <h2>Loading... </h2>
        </li>
      </ul>
    );
  }

  return (
    <div className="side-bar">
      <div className="head-list">
        <h2>strangers</h2>
      </div>
      <ul>
        {users &&
          users.map((user) => {
            if (user.name !== name)
              return (
                <li key={user._id} onClick={(e) => onUsersClick(e)}>
                  <i className="far fa-user-circle"></i> <h3>{user.name}</h3>
                </li>
              );
          })}
      </ul>
    </div>
  );
};

export default SideBar;
