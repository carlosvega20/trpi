import React, { useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core/';
import { Auth } from 'aws-amplify';
import useStyles from './styles';

const Layout = () => {
  const classes = useStyles();
  const [user, setUser] = useState({ attributes: { email: '' } });

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((_user) => setUser(_user))
      .catch(() => setUser(null));
  }, []);

  return (
    <>
      <Typography component="p">Hello {user.attributes.email}</Typography>
      <Button variant="contained" className={classes.button} onClick={() => Auth.signOut()}>
        Sign out
      </Button>
    </>
  );
};

export default Layout;
