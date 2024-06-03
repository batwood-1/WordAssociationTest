import { useState, useEffect } from "react";
import { List } from "immutable";

const createUserId = setUserId => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`/api/users/`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.status_text);
          }
          return response.json();
        })
        .then(data => {
          setUsers(List(data));
        })
        .catch(err => console.log(err));
    };
    fetchData();
  }, []);

  let ids = [];
  for (user in users) {
    ids.append(user.id);
  }
  setUserId(Math.max(ids) + 1);
};

export default createUserId;
