import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import profilePhoto from '../../assets/images/yoh.jpg';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 80,
    height: 80,
  },
});

const FotoPerfil = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="User Picture" src={profilePhoto} className={classes.bigAvatar} />
    </Grid>
  );
};

export default FotoPerfil;
