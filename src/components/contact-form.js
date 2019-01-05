import React from 'react'
import { Formik } from 'formik'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import queryString from 'query-string'

const baseInputStyles = css`
  border-radius: 2px;
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
  max-width: 600px;
  border: 1px solid #888888;
  border-radius: 3px;
  color: #cd3c33;
  font-size: 1rem;
  padding: 4px 8px;
  margin-bottom: 24px;
  width: 100%;

  :focus {
    border-color: #cd3c33;
    box-shadow: 0 0 0 3px rgba(200, 0, 0, 0.3);
    outline: 0;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  ::placeholder {
    color: #cd3c33;
  }
`

const Input = styled(`input`)`
  ${baseInputStyles}
`

const TextArea = styled(`textarea`)`
  ${baseInputStyles}
  height: 400px;
`

const Form = styled(`form`)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Message = styled(`span`)`
  font-size: 10px;
  text-transform: uppercase;
  color: #cd3c33;
`

const Button = styled(`button`)`
  padding: 8px 24px;
  background-color: #cd3c33;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  border-radius: 3px;
`

const createQueryParams = values => queryString.stringify(values)

export default () => (
  <Formik
    initialValues={{ email: '', message: '', name: '' }}
    validate={values => {
      let errors = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }
      if (!values.name) {
        errors.name = 'Required'
      }
      if (!values.message) {
        errors.message = 'Required'
      }
      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      fetch(`/.netlify/functions/contact?${createQueryParams(values)}`)
        .then(response => response.json())
        .then(json => {
          alert('form submitted, but not sent, in test mode')
          setSubmitting(false)
        })
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
      /* and other goodies */
    }) => (
      <Form name="contact-us" data-netlify="true" onSubmit={handleSubmit}>
        <Message>{errors.name && touched.name && errors.name}</Message>
        <Input
          placeholder="Name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <Message>{errors.email && touched.email && errors.email}</Message>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <Message>{errors.message && touched.message && errors.message}</Message>
        <TextArea
          name="message"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.message}
        />
        <Button type="submit" disabled={isSubmitting}>
          Submit
        </Button>
      </Form>
    )}
  </Formik>
)
