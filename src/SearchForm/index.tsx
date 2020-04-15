import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import { HandleChange, HandleSearch } from "../models/interfaces";

export default function (props: {
  handleSearchChange: HandleChange;
  handleSearchParams: HandleSearch;
}) {
  return (
    <Form onSubmit={props.handleSearchParams} className="mb-5">
      <Row>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search by keywords..."
              name="keyword"
              onChange={props.handleSearchChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="City"
              name="city"
              onChange={props.handleSearchChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Button variant="primary" type="submit">
          Add parameters
        </Button>
      </Row>
    </Form>
  );
}
