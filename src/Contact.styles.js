import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: 700,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    '& form': {
      width: '450px',
      [theme.breakpoints.down('xs')]: {
        width: '70%',
      },
      marginTop: 50,
      display: 'flex',
      flexDirection: 'column',
      border: '2px solid black',
      borderRadius: 15,
      padding: 40,
    },
  },
}));
