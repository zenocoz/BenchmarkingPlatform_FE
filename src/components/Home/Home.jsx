import React from "react"
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import "./Home.css"

export default function Home(props) {
  const [exam, setExam] = useState("")
  let history = useHistory()

  const handleChange = (event) => {
    setExam({ ...exam, [event.target.id]: event.target.value })
  }

  useEffect(() => {
    if (exam !== "") {
      console.log("value changed and re-rendered")
    }
  }, [exam])

  const startExam = async () => {
    const url = "http://localhost:3001/exams/start"
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(exam),
        headers: {
          "Content-Type": "application/json",
        },
      })
      if (response.ok) {
        const exams = await response.json()
        console.log(exams)
        history.push("/exam")
      }
    } catch (error) {
      console.log(error)
    }
  }

  //component did mount
  // useEffect(() => {
  //   startExam()
  //   console.log("mounted")
  // }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    startExam()

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
                id="candidateName"
                type="text"
                placeholder="Enter name"
                onChange={handleChange}
                value={exam.candidateName}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Type of Exams</Form.Label>
              <Form.Control
                id="name"
                type="text"
                placeholder="Enter type of exam"
                onChange={handleChange}
                value={exam.name}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Total Duration</Form.Label>
              <Form.Control
                id="totalDuration"
                type="number"
                placeholder="Enter total duration > 100"
                onChange={handleChange}
                value={exam.totalDuration}
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
