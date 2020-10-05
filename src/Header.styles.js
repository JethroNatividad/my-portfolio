import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #1d1e22',
    backgroundColor: '#393f4d',
    marginBottom: 81,
    zIndex: 100,
  },
  logo: {
    objectFit: 'contain',
    height: 80,
  },
  links: {
    '& a': {
      textDecoration: 'none',
      color: '#d4d4dc',
      margin: '0 10px',
    },
  },
}));
