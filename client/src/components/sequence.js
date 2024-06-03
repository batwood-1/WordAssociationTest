import React, { useState, useEffect, useCallback } from "react";
import { Jumbotron, Input, Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import "../App.css";
import { Start, Stop } from "./timer";
import Pause from "./pause";

function generate_word({ words, setWords }) {
  $.ajax({
    type: "POST",
    url: "{{ url_for('sequence')}}",
    contentType: "application/json; charset=utf-8",
    dataType: "html",
    data: JSON.stringify(words),
    success: function(response) {
      response = JSON.parse(response);
      words = response.words;
      end = response.end;
      setEnd(end);
      setWords(words);
    }
  });
}

const Sequence = ({ words, setWords, setPage }) => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(words[count]);
  const [modal, setModal] = useState(false);
  const [end, setEnd] = useState(false);

  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };
  // voodoo to handle the escape key
  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      setModal(!modal);
    }
  }, []);
  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const handleKeyPress = e => {
    if (e.charCode === 13) {
      // Quick time delay before providing new word
      setTimeout(function() {
        setCount(count + 1);
        generate_word(words, setWords);
        if (end) {
          setPage("results");
        } else {
          setState(words[count + 1]);
        }
        Start();
      }, 225);
    }

    // Stop timer when they begin their response
    if (count > 0 && state.response === "") {
      setState({
        ...state,
        time: Stop()
      });
    }
  };

  return (
    <div className="App-frame">
      <Jumbotron>
        <p className="App-word">{state.word}</p>
      </Jumbotron>

      <Row>
        <Col md={4} />
        <Col md={4}>
          <Input
            type="text"
            name="response"
            value={state.response}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
        </Col>
        <Col md={4} />
      </Row>
      <Pause
        setWords={setWords}
        modal={modal}
        setModal={setModal}
        setPage={setPage}
      />
    </div>
  );
};

export default Sequence;

Sequence.propTypes = {
  setPage: PropTypes.func.isRequired,
  words: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      response: PropTypes.string.isRequired,
      time: PropTypes.number.isRequired
    })
  )
};
