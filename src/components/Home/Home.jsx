import React from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import "./Home.css"

export default function Home() {
  return (
    <Container className="homepage container-fluid">
      <Row>
        <Col>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tipe of Exams</Form.Label>
              <Form.Control type="text" placeholder="Enter type of exam" />
            </Form.Group>
            <span className="d-block text-center text-xl-left mr-xl-5">
              <Button
                className="start-button mt-5 mt-lg-0 ml-lg-5 btn btn-primary"
                type="submit"
                size="lg"
              >
                Start Exam
              </Button>
            </span>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
