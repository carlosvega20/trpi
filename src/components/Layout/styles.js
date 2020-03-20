import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  div: {
    minWidth: '420px',
    height: '50px',
    backgroundColor: 'white',
    position: 'fixed',
    top: 0,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
}));

export default useStyles;
