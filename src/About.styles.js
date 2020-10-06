import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: '600px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#d4d4dc',
  },
  container: {
    margin: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  innerContainer: {
    marginTop: 150,
    marginBottom: 80,
  },
  text: { color: '#4d4c4d' },
  email: { marginTop: 30, color: '#4d4c4d' },
  social: {
    '& a': {
      textDecoration: 'none',
      color: 'gray',
      margin: '0 10px',
      '& svg': {
        fontSize: '3rem',
      },
      '&:hover': {
        color: 'black',
      },
    },
  },
}));
