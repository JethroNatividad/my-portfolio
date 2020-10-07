import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './Contact.styles';
import emailjs from 'emailjs-com';
import useInputState from './hooks/useInputState';
import ScrollableAnchor from 'react-scrollable-anchor';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
function Contact() {
  const [name, handleName, resetName] = useInputState('');
  const [email, handleEmail, resetEmail] = useInputState('');
  const [message, handleMessage, resetMessage] = useInputState('');
  const [snackBar, setSnackBar] = useState({ open: false, status: 'success' });

  const handleClose = () => {
    setSnackBar({ ...snackBar, open: false });
  };
  const handleOpen = (status) => {
    setSnackBar({ status: status, open: true });
  };
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
          handleOpen('success');
        },
        (error) => {
          handleOpen('error');
        }
      );
    resetName();
    resetEmail();
    resetMessage();
  };
  return (
    <ScrollableAnchor id={'Contact'}>
      <div className={classes.root}>
        <form onSubmit={sendEmail}>
          <Typography variant='h4'>Contact me</Typography>
          <TextField
            value={name}
            onChange={handleName}
            margin='normal'
            label='Name'
            name='user_name'
            required
          />
          <TextField
            type='email'
            value={email}
            onChange={handleEmail}
            margin='normal'
            label='Email'
            name='user_email'
            required
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
            required
          />
          <Button type='submit' variant='border' color='primary'>
            Send
          </Button>
        </form>
        <Snackbar
          open={snackBar.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={snackBar?.status}>
            {snackBar.status === 'success'
              ? 'Message sent'
              : 'Something went wrong'}
          </Alert>
        </Snackbar>
      </div>
    </ScrollableAnchor>
  );
}

export default Contact;
