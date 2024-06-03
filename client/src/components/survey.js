import React, { useState } from "react";
import {
  Tooltip,
  Col,
  Button,
  Jumbotron,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from "reactstrap";
import PropTypes from "prop-types";
import "../App.css";

const Survey = ({ userInfo, setUserInfo, setPage }) => {
  // tooltip state/hooks
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  // Handle inputs
  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };

  // render html
  return (
    <div className="App-frame">
      <Jumbotron>
        <p className="App-intro">
          Please take a minute to fill out this survey, answering as much as you
          are comfortable with. The responses you provide are anonymous and
          solely used to help us contextualize the results so that we may
          improve our methods in the future. They have no bearing on the results
          of the test itself.
        </p>
      </Jumbotron>
      <Form>
        <Row>
          <Col md={3} />
          <Col md={3}>
            <FormGroup row>
              <Label for="sex" sm={4}>
                Sex
              </Label>
              <Col sm={15}>
                <Input
                  type="select"
                  name="sex"
                  value={userInfo.sex}
                  onChange={handleChange}
                >
                  <option> </option>
                  <option>Female</option>
                  <option>Male</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="gender" sm={4}>
                {" "}
                Gender&nbsp;
                <span
                  style={{ textDecoration: "underline", color: "steelblue" }}
                  href="#"
                  id="TooltipGender"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    fill="currentColor"
                    class="bi bi-question-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                  </svg>
                </span>
                <Tooltip
                  placement="right"
                  isOpen={tooltipOpen}
                  target="TooltipGender"
                  toggle={toggle}
                >
                  Sex is what it says on your birth certificate, gender is what
                  you identify as.
                </Tooltip>
              </Label>
              <Col sm={15}>
                <Input
                  type="select"
                  name="gender"
                  value={userInfo.gender}
                  onChange={handleChange}
                >
                  <option> </option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="age" sm={4}>
                Age
              </Label>
              <Col sm={15}>
                <Input
                  type="number"
                  name="age"
                  value={userInfo.age}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="occupation" sm={4}>
                Occupation
              </Label>
              <Col sm={15}>
                <Input
                  type="text"
                  name="occupation"
                  value={userInfo.occupation}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup row>
              <Label for="language" sm={3}>
                English
              </Label>
              <Col sm={15}>
                <Input
                  type="select"
                  name="language"
                  value={userInfo.language}
                  onChange={handleChange}
                >
                  <option> </option>
                  <option> First language </option>
                  <option> Second language </option>
                  <option> Other </option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="sexuality" sm={3}>
                Sexuality
              </Label>
              <Col sm={15}>
                <Input
                  type="select"
                  name="sexuality"
                  value={userInfo.sexuality}
                  onChange={handleChange}
                >
                  <option> </option>
                  <option> Heterosexual </option>
                  <option> Gay </option>
                  <option> Bisexual </option>
                  <option> Pansexual </option>
                  <option> None of these </option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="education" sm={3}>
                Education
              </Label>
              <Col sm={15}>
                <Input
                  type="select"
                  name="education"
                  value={userInfo.education}
                  onChange={handleChange}
                >
                  <option> </option>
                  <option> Have not completed high school </option>
                  <option> High school degree </option>
                  <option> Some college </option>
                  <option> Associates </option>
                  <option> Bachelors </option>
                  <option> Graduate Degree </option>
                </Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="race" sm={3}>
                Race
              </Label>
              <Col sm={15}>
                <Input
                  type="select"
                  name="race"
                  value={userInfo.race}
                  onChange={handleChange}
                >
                  <option> </option>
                  <option> American/Alaska native </option>
                  <option> Asian </option>
                  <option> Black </option>
                  <option> Hawaiian native or Pacific islander </option>
                  <option> White </option>
                  <option> Two or more races </option>
                  <option> American/Alaska native (Hispanic) </option>
                  <option> Black (Hispanic) </option>
                  <option> White (Hispanic) </option>
                  <option> Two or more races (Hispanic) </option>
                  <option> None of these </option>
                </Input>
              </Col>
            </FormGroup>
          </Col>
          <Col md={2} />
        </Row>
        <Row>
          <Col md={2} />
          <Col md={8}>
            <FormGroup row>
              <Label for="disorder">
                Have you ever been diagnosed with a mental disorder? If so,
                please elaborate, otherwise write none.
              </Label>
              <Input
                type="textarea"
                name="disorder"
                value={userInfo.disorder}
                onChange={handleChange}
                rows="2"
              />
            </FormGroup>
            <FormGroup row>
              <Label for="religion">
                How would you describe your spiritual beliefs?
              </Label>
              <Input
                type="textarea"
                name="religion"
                value={userInfo.religion}
                onChange={handleChange}
                rows="2"
              />
            </FormGroup>
            <FormGroup row>
              <Label for="trauma">
                What do you suspect could be personal sources of trauma?
              </Label>
              <Input
                type="textarea"
                name="trauma"
                value={userInfo.trauma}
                onChange={handleChange}
                rows="6"
                placeholder="Please elaborate as much as possible in describing any noteworthy conflicts in your life."
              />
            </FormGroup>
            <FormGroup row>
              <Label for="other">
                Is there anything else you feel may help us understand your
                emotional history?
              </Label>
              <Input
                type="textarea"
                name="other"
                value={userInfo.other}
                onChange={handleChange}
                rows="4"
              />
            </FormGroup>
          </Col>
          <Col md={2} />
        </Row>
      </Form>
      <Button
        size="large"
        type="button"
        name="homeButton"
        onClick={() => {
          setPage("sequence");
        }}
      >
        Proceed to test
      </Button>
    </div>
  );
};

Survey.propTypes = {
  setPage: PropTypes.func.isRequired,
  userinfo: PropTypes.shape({
    sex: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    sexuality: PropTypes.string.isRequired,
    education: PropTypes.string.isRequired,
    race: PropTypes.string.isRequired,
    disorder: PropTypes.string.isRequired,
    religion: PropTypes.string.isRequired,
    trauma: PropTypes.string.isRequired,
    other: PropTypes.string.isRequired
  })
};

export default Survey;
