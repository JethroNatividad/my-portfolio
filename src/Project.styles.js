import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    cursor: 'pointer',
  },
  front: {
    backgroundSize: 'cover',
  },
  back: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    padding: 20,
  },
  preview: {
    position: 'absolute',
    minWidth: '70%',
    height: '500px',
    border: '2px solid #000',
    padding: theme.spacing(2, 4, 3),
    display: 'flex',
    justifyContent: 'space-around',
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gif: {
    objectFit: 'contain',
    height: '100%',
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    '& a': {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
}));
