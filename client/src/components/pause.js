import { Modal, ModalHeader, ModalBody, Button, Col, Row } from "reactstrap";
import React from "react";
import "../App.css";
import Words from "./wordlist";

class Pause extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.props.setModal(!this.props.modal);
  }

  render() {
    return (
      <div>
        <Modal modalClassName="App-modal" isOpen={this.props.modal}>
          <ModalHeader toggle={this.toggle}>
            Are you sure you want to exit? All progress will be lost.
          </ModalHeader>
          <ModalBody>
            <Row>
              <Col md={3} />
              <Col md={3}>
                <Button
                  color="primary"
                  onClick={() => {
                    this.props.setPage("results");
                    this.props.setWords(Words);
                  }}
                >
                  Exit
                </Button>
              </Col>
              <Col md={6}>
                <Button color="secondary" onClick={this.toggle}>
                  Return to Test
                </Button>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Pause;
