import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  threadsItems: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '160px',
  },
  threadsItemsMargin: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '60px',
  },
  tarjeta: {
    margin: '10px',
    maxWidth: '450px',
  },
  gridContainer: {
    marginBottom: '50px',
    position: 'fixed',
    bottom: 0,
  },
  newTought: {
    position: 'fixed',
    bottom: 0,
    zIndex: 1,
    width: '100%',
  },
});

export default useStyles;
