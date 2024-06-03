import React, { useState } from "react";
import "./App.css";
import { Button, Jumbotron } from "reactstrap";
import Survey from "./components/survey";
import { Footer, Header } from "./components/header";
import Sequence from "./components/sequence";
import UserInfo from "./components/userinfo";
import Results from "./components/results";
import submit from "./components/submit";
import createUserId from "./components/createUserId";

const App = () => {
  // don't want to change original object
  let temp_userInfo = Object.assign([], UserInfo);

  const [page, setPage] = useState("home");
  const [words, setWords] = useState([
    { word: "Please enter 'ready' to begin the test", response: "", time: 0 }
  ]);
  const [userInfo, setUserInfo] = useState(temp_userInfo);
  const [userId, setUserId] = useState(-1);
  if (page === "home") {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Jumbotron fluid>
            <p className="App-intro">
              The word association test was developed in the field of clinical
              psychology as a tool to probe for complexes. This program takes a
              novel approach to the test, utilizing computational linguistics to
              more precisely map out parts of the psyche that have elicit
              complex reactions to certain stimuli.
            </p>
          </Jumbotron>
          <Button
            size="large"
            type="button"
            name="homeButton"
            onClick={() => {
              setPage("survey");
            }}
          >
            Begin
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  if (page === "survey") {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Survey
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            setPage={setPage}
          />
        </div>
        <Footer />
      </div>
    );
  }
  if (page === "sequence") {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Sequence words={words} setWords={setWords} setPage={setPage} />
        </div>
        <Footer />
      </div>
    );
  }
  if (page === "results") {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Results words={words} />
          <Button
            size="large"
            type="button"
            name="submitButton"
            onClick={(createUserId(setUserId), submit(userId, words, userInfo))}
          >
            Submit
          </Button>
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
