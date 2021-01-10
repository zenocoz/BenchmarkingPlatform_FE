import React, { Component, useState, useEffect } from "react"

const Questions = (props) => {
  //   state = {
  //     exam: {},
  //   }
  const [exams, setState] = useState({})

  const startExam = async () => {
    const url = "http://localhost:3001/exams/start"
    try {
      const response = await fetch(url, { method: "POST", headers: {} })
      if (response.ok) {
        const exams = await response.json()
        console.log(exams)
      }
    } catch (error) {
      console.log(error)
    }
  }

  //component did mount
  useEffect(() => {
    startExam()
    console.log("mounted")
  }, [])

  return <div></div>
}

export default Questions
