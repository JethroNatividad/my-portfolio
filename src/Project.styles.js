import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
  },
  front: {
    backgroundImage:
      'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmJw4d-2M27E%2Fmaxresdefault.jpg&f=1&nofb=1")',
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
}));
