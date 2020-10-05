import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    minHeight: 400,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1d1e22',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    '& > div': {
      width: 300,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
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
