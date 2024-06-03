import React from "react";

// change the rating of a film
const submit = (userId, words, userInfo) => {
  const user = { id: userId, words: words, userInfo: userInfo };

  fetch(`/api/users/`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: new Headers({ "Content-type": "application/json" })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status_text);
      }
      return response.json();
    })
    .catch(err => console.log(err)); // eslint-disable-line no-console
};

export default submit;
