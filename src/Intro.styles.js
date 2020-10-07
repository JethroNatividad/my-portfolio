import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
  root: {
    width: '100vw',
    backgroundImage: 'url(https://i.imgur.com/HqbVKEi.jpeg)',
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
  name: {
    fontSize: '20px',
  },
  text: {
    fontSize: '30px',
    fontWeight: '600',
  },
}));
