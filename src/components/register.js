import React, { useState } from "react"
import useAxios from "axios-hooks"

import Form from "../components/form"
import UltraContainer from "../components/ultra-container"

const { GATSBY_API_URL } = process.env

const Register = () => {
  const [sent, setSent] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const [form, setForm] = useState({
    userName: "",
    email: "",
  })
  const [{ loading, error }, create] = useAxios(
    {
      method: "POST",
      url: `${GATSBY_API_URL}/account/register`,
    },
    { manual: true }
  )

  const hendleChange = event => {
    setForm(
      Object.assign({}, form, {
        [event.target.name]: event.target.value,
      })
    )
  }

  const submitHandler = async event => {
    event.preventDefault()
    const { data } = await create({
      data: form,
    })
    if (data.error) {
      if (data.error.code === "USER_IN_USE") {
        setErrorMsg("User already in use")
      } else if (data.error.code === "EMAIL_IN_USE") {
        setErrorMsg("Email address already in use")
      } else {
        setErrorMsg("Try again later")
      }
    } else {
      setSent(true)
    }
  }

  const isValid = form => {
    const isValidEmail = form.email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
    return form.userName.length >= 3 && isValidEmail
  }

  return (
    <UltraContainer>
      {!loading && !error && !sent && (
        <Form onSubmit={submitHandler}>
          <h3>Register</h3>
          <p>
            Register to be able to join our server. You will recieve an email
            with a confirmation link.
          </p>

          <label htmlFor="userName">
            User Name
            <input
              type="text"
              name="userName"
              id="userName"
              required
              onChange={hendleChange}
            ></input>
          </label>

          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              onChange={hendleChange}
            ></input>
          </label>

          <button type="submit" disabled={!isValid(form)}>
            {" "}
            Send{" "}
          </button>

          <span> {errorMsg && <b> >> {errorMsg}</b>} </span>
        </Form>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error...</p>}
      {sent && (
        <p>
          Thank you for registering for the MineStone. Check your email box,
          span and trash. The email was sent with this subject:{" "}
          <b>MineStone - Confirm your account</b>.
        </p>
      )}
    </UltraContainer>
  )
}

export default Register
