import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import axios from "axios";

export default class Forms extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
    sent: false
  };

  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      message: this.state.message
    };

    const form = axios
      .post("api/form", data)
      .then(res => {
        this.setState({ sent: true }, this.resetForm());
      })
      .catch(() => {
        console.log(form);
        console.log("Message not sent");
      });
  }

  resetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: ""
    });
  };

  render() {
    return (
      <Form
        style={{
          color: "white",
          marginBottom: "3%",
          marginTop: "-5%",
          marginLeft: "-5%",
          marginRight: "5%"
        }}
        onSubmit={e => this.formSubmit(e)}
      >
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="firstName"
            as="textarea"
            rows="1"
            placeholder="First Name"
            value={this.state.firstName}
            onChange={e => this.setState({ firstName: e.target.value })}
            required
          />
          <br />
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            as="textarea"
            rows="1"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={e => this.setState({ lastName: e.target.value })}
            required
          />
          <br />
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            name="phoneNumber"
            type="tel"
            rows="1"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={e => this.setState({ phoneNumber: e.target.value })}
            required
            pattern="[0-9]{10}"
          />
          <br />
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="name@example.com"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control
            name="message"
            as="textarea"
            rows="6"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
            required
          />
        </Form.Group>
        <Button variant="light" type="submit">
          Send
        </Button>
      </Form>
    );
  }
}
