import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './Contact.styles';
import emailjs from 'emailjs-com';
import useInputState from './hooks/useInputState';
function Contact() {
  const [name, handleName, resetName] = useInputState('');
  const [email, handleEmail, resetEmail] = useInputState('');
  const [message, handleMessage, resetMessage] = useInputState('');
  const classes = useStyles();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_3it6mnx',
        'template_bvz5a43',
        e.target,
        'user_2HPcmXlbq7Jdv8jWCOERo'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    resetName();
    resetEmail();
    resetMessage();
  };
  return (
    <div className={classes.root}>
      <form onSubmit={sendEmail}>
        <Typography variant='h4'>Contact me</Typography>
        <TextField
          value={name}
          onChange={handleName}
          margin='normal'
          label='Name'
          name='user_name'
        />
        <TextField
          type='email'
          value={email}
          onChange={handleEmail}
          margin='normal'
          label='Email'
          name='user_email'
        />
        <TextField
          value={message}
          onChange={handleMessage}
          name='message'
          margin='normal'
          placeholder='Message. . . '
          multiline
          rows={10}
          variant='outlined'
        />
        <Button type='submit' variant='border' color='primary'>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
