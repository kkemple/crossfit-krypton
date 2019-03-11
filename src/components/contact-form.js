import React from 'react'
import { Formik } from 'formik'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import queryString from 'query-string'
import { MdPhone, MdLocationOn } from 'react-icons/md'

const baseInputStyles = css`
  border-radius: 2px;
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
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
  height: 200px;
`

const Form = styled(`form`)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: auto;
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
    onSubmit={(values, { setSubmitting, resetForm }) => {
      fetch(`/.netlify/functions/contact?${createQueryParams(values)}`).then(
        response => {
          if (response.status === 200) {
            resetForm()
            alert('Email sent!')
          } else {
            alert('Seems something went wrong... Please try again!')
          }

          setSubmitting(false)
        }
      )
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
      <Form name="contact-us" onSubmit={handleSubmit}>
        <div style={{ alignSelf: 'flex-start' }}>
          <MdPhone /> 757-613-1222
        </div>
        <div style={{ alignSelf: 'flex-start', marginBottom: '32px' }}>
          <MdLocationOn /> 105 Bruton Ct. Chesapeake, VA 23322
        </div>
        <Message>{errors.name && touched.name}</Message>
        <Input
          placeholder="Name"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        <Message>{errors.email && touched.email}</Message>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        <Message>{errors.message && touched.message}</Message>
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
