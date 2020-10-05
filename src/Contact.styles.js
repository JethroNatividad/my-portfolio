import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: 700,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    '& form': {
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',
      width: 500,
      border: '2px solid black',
      borderRadius: 15,
      padding: 40,
    },
  },
}));
