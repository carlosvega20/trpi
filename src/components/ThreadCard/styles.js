import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: `${theme.spacing(2)}px auto`,
    padding: theme.spacing(2),
    cursor: 'pointer',
    userSelect: 'none',
    position: 'relative',
  },
  fab: {
    margin: '8px 0',
  },
  margin: {
    margin: theme.spacing(1),
    width: '100%',
  },
  loader: {
    position: 'absolute',
    top: '45%',
    right: '45%',
  },
  contenedor: {
    width: "100%",
    display: "flex",
  },
  emoji: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
  },
  info: {
    display: "flex",
    flexDirection: "column",
    width: "85%"
  },
  textField: {
    border: "none",
    resize: "none",
    "&:focus": {
      outline: "none"
    },
  },
  check: {
    width: "15%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  time: {
    margin: "8px",
  },
  link: {
    textDecoration: "none",
  }

}));

export default useStyles;
