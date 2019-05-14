import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: 'Raleway', sans-serif;
  font-style: normal;

  @media (min-width: 30rem) {
    width: 22rem;
    margin-right: 1rem;
  }

  @media (min-width: 35rem) {
    margin-right: 2rem;
  }
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: 300;

  :not(:first-of-type) {
    margin-top: 1.5rem;
  }
`;

const Input = styled.input`
  appearance: none;
  box-shadow: none;
  outline: 0;
  border-radius: 0;
  border: 1px solid #9c9c9c;
  height: 2.5rem;
  padding: 0 0.75rem;
  margin-top: 0.5rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  color: #24292e;

  &:hover,
  &:focus {
    border-color: #24292e;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  border: 1px solid #9c9c9c;
  outline: 0;
  padding: 0.75rem 2rem;
  margin-top: 0.5rem;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;

  &:hover,
  &:focus {
    border-color: #24292e;
  }
`;

const SubmitButton = styled.button`
  background: none;
  background-color: transparent;
  font-size: 1rem;
  padding: 0.75rem 2rem;
  text-transform: uppercase;
  border: 2px solid #9c9c9c;
  color: #9c9c9c;
  cursor: pointer;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-left: auto;
  letter-spacing: 2px;
  transition: 0.1s background-color linear, 0.1s color linear;

  :focus,
  :hover {
    background-color: #9c9c9c;
    color: #fff;
  }
`;

const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', name, email, message })
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">
        Name
        <Input type="text" name="name" value={name} onChange={() => setName()} />
      </Label>

      <Label htmlFor="email">
        Email
        <Input type="email" name="email" id="email" value={email} onChange={() => setEmail()} />
      </Label>

      <Label htmlFor="message">
        Message
        <Textarea name="message" rows="5" value={message} onChange={() => setMessage()} />
      </Label>

      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  );
};

export default ContactForm;
