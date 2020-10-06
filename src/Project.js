import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  Button,
  IconButton,
  Modal,
  Paper,
  Typography,
} from '@material-ui/core';
import ReactCardFlip from 'react-card-flip';
import './Project.css';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './Project.styles';
function Project({ title, description, imageUrl, gif, siteUrl, github, tech }) {
  const classes = useStyles();
  const [isFlipped, setIsFlipped] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <Card
          className={`${classes.root} ${classes.front}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
          onClick={(e) => setIsFlipped(true)}
        ></Card>
        <Card
          className={`${classes.root} ${classes.back}`}
          onClick={(e) => setIsFlipped(false)}
        >
          <Typography variant='h5' className={classes.title}>
            {title}
          </Typography>

          <Typography variant='p' className={classes.description}>
            {description}
          </Typography>

          <Typography variant='p'>Technologies used: {tech}</Typography>

          <div className={classes.buttons}>
            <Button variant='outlined' color='default' onClick={handleOpen}>
              Preview
            </Button>
            <a href={siteUrl} target='_blank' rel='noopener noreferrer'>
              <Button variant='outlined' color='primary'>
                Visit site
              </Button>
            </a>
            <a href={github} target='_blank' rel='noopener noreferrer'>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </a>
          </div>
        </Card>
      </ReactCardFlip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className={classes.modal}
      >
        <Paper className={classes.preview}>
          <img className={classes.gif} src={gif} alt='gif' />
          <IconButton onClick={handleClose} className={classes.close}>
            <CloseIcon />
          </IconButton>
        </Paper>
      </Modal>
    </>
  );
}

export default Project;
