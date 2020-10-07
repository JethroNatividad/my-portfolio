import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: 500,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1d1e22',
    paddingBottom: '100px',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    paddingTop: 30,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      paddingLeft: '20px',
      paddingBottom: '50px',
    },
    '& > div': {
      width: '29%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
      '& > li': {
        listStyle: 'none',
        color: '#d4d4dc',
        margin: '7px 0',
      },
      '& > h5': {
        textTransform: 'uppercase',
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fff',
      },
      '& > p': {
        lineHeight: 2,
        color: '#d4d4dc',
      },
    },
  },
}));
