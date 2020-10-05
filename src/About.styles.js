import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    height: 500,
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
  text: { fontWeight: 400 },
  email: { marginTop: 30, fontWeight: 400 },
  social: {
    '& a': {
      textDecoration: 'none',
      color: 'black',
      margin: '0 10px',
    },
  },
}));
