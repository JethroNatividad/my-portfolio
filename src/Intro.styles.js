import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '100vw',
    backgroundImage:
      'url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwallpapercave.com%2Fwp%2FfxKGuF6.jpg&f=1&nofb=1)',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    height: 500,
    alignItems: 'center',
    paddingTop: '81px',
  },
  logo: {
    objectFit: 'contain',
    height: 200,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& h1': {
      color: '#d4d4dc',
      fontWeight: 300,
    },
  },
  name: {},
  text: {},
}));
