import React from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import useStyles from './Contact.styles';
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <form>
        <Typography variant='h4'>Contact me</Typography>
        <TextField margin='normal' label='Name' />
        <TextField margin='normal' label='Email' />
        <TextField
          margin='normal'
          placeholder='Message. . . '
          multiline
          rows={10}
          variant='outlined'
        />
        <Button variant='border' color='primary'>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Contact;
