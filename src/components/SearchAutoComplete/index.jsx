import React, { useEffect, useState } from "react";
import Suggestions from "./suggestions";

import "./styles.css";

const SearchAutoComplete = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  };

  const handleClick = (event) => {
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  };

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  console.log(users, filteredUsers);

  if (error) {
    return <h1>Error occurs while data fetching</h1>;
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data! please wait...</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}
      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default SearchAutoComplete;
