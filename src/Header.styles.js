import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    width: '100vw',
    borderBottom: '1px solid #1d1e22',
    backgroundColor: '#393f4d',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    objectFit: 'contain',
    height: 80,
    marginLeft: '2%',
  },
  links: {
    '& a': {
      textDecoration: 'none',
      color: '#d4d4dc',
      margin: '0 20px',
      fontWeight: '400',
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
        margin: '0 10px',
      },
      '&:hover': {
        color: 'white',
      },
    },
    marginRight: '2%',
  },
}));
