import React from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import "./Home.css"

export default function Home(props) {
  const [exam, setExam] = useState({})
  const [submit, setSubmitted] = useState("")

  const handleChange = (event) => {
    setExam({ ...exam, [event.target.id]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(exam)
    console.log(exam)
  }

  return (
    <Container className="homepage container-fluid">
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Enter email"
                onChange={handleChange}
                value={exam.name}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Type of Exams</Form.Label>
              <Form.Control
                id="exam"
                type="text"
                placeholder="Enter type of exam"
                onChange={handleChange}
                value={exam.exam}
              />
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
