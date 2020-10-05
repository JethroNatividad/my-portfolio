import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: 500,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#393f4d',
  },
  container: {
    margin: '20px 30px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  list: {
    display: 'flex',
    height: '100%',
    width: '100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}));
