import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Button, TextField, Grid, Typography } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";

import fire from "../../firebase/firebase.js";

const backgroundStyle = {
  backgroundImage:
    "url(https://i.pinimg.com/originals/e0/d6/6a/e0d66a03fdf7fecce02b8b76e141d325.jpg)",
  width: "100%",
  height: "100vh",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(0,0,0,0.8)",
  backgroundBlendMode: "overlay"
};

const gridStyle = {
  minWidth: 275,
  textAlign: "center",
  position: "absolute",
  maxWidth: 300
};

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "white"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(1)
  },
  input: {
    color: "white"
  },
  button: {
    color: "white",
    textTransform: "none",
    borderColor: "white"
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const db = fire.firestore();
  const [values, setValues] = React.useState({
    email: undefined,
    password: undefined
  });
  const [data, setData] = React.useState({});
  const [keys, setKeys] = React.useState({});
  //   const [open, setOpen] = React.useState(false);
  //   const [notification, setNotification] = React.useState("");

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const loggedIn = localStorage.getItem("loggedIn");

  //   function handleClose(event, reason) {
  //     if (reason === "clickaway") {
  //       return;
  //     }

  //     setOpen(false);
  //   }

  useEffect(() => {
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const dataArray = querySnapshot.docs.map(doc => doc.data());
        const keysArray = querySnapshot.docs.map(doc => doc.id);
        setData(dataArray);
        setKeys(keysArray);
      });
  }, [db]);

  function loggedInfunc(e) {
    e.preventDefault();
    console.log(data);
    data.map((type, key) => {
      if (type.email === values.email && type.password === values.password) {
        if (type.type === "admin") {
          localStorage.clear();
          localStorage.setItem("type", "admin");
          localStorage.setItem("username", type.username);
          localStorage.setItem("loggedIn", true);
          props.history.push("/admin");
          window.location.reload();
          return null;
        } else if (type.type === "client") {
          localStorage.clear();
          localStorage.setItem("email", type.email);
          localStorage.setItem("password", type.password);
          localStorage.setItem("type", "client");
          localStorage.setItem("loggedIn", true);
          localStorage.setItem("keysArray", JSON.stringify(keys));
          localStorage.setItem("key", key);
          localStorage.setItem("username", type.username);
          // localStorage.setItem("projects", JSON.stringify(type.projects));
          props.history.push(`/selectproject`);
          window.location.reload();
          return null;
        } else {
          return null;
        }
      } else {
        return null;
      }
    });
  }

  function signUpfunc() {
    props.history.push("/signup");
  }

  if (!loggedIn) {
    return (
      <form onSubmit={e => loggedInfunc(e)}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={backgroundStyle}
        >
          <Grid item xs={12} container spacing={1} style={gridStyle}>
            <Fade in={true} timeout={1000}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" style={{ color: "white" }}>
                  Total Leadership Collabrator (i)
                </Typography>
              </Grid>
            </Fade>
            <Fade in={true} timeout={2000}>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.margin}
                  id="outlined-email-input"
                  label="Email"
                  // type="email"
                  name="email"
                  autoComplete="email"
                  margin="normal"
                  variant="outlined"
                  value={values.email || ""}
                  error={
                    values.email === undefined
                      ? false
                      : values.email.length === 0
                      ? true
                      : false
                  }
                  helperText={
                    values.email === undefined
                      ? false
                      : values.email.length === 0
                      ? "This cannot be empty"
                      : null
                  }
                  onChange={handleChange("email")}
                  required
                  fullWidth
                  InputProps={{
                    className: classes.input
                  }}
                  InputLabelProps={{
                    className: classes.input
                  }}
                />
              </Grid>
            </Fade>
            <Fade in={true} timeout={3000}>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.margin}
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange("password")}
                  required
                  fullWidth
                  value={values.password || ""}
                  error={
                    values.password === undefined
                      ? false
                      : values.password.length === 0
                      ? true
                      : false
                  }
                  helperText={
                    values.password === undefined
                      ? false
                      : values.password.length === 0
                      ? "This cannot be empty"
                      : false
                  }
                  InputProps={{
                    className: classes.input
                  }}
                  InputLabelProps={{
                    className: classes.input
                  }}
                />
              </Grid>
            </Fade>
            <Fade in={true} timeout={4000}>
              <Grid item xs={6}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  size="large"
                  type="submit"
                  // onClick={() => loggedInfunc()}
                >
                  Login
                </Button>
              </Grid>
            </Fade>
            <Fade in={true} timeout={5000}>
              <Grid item xs={6}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  size="large"
                  onClick={() => signUpfunc()}
                >
                  Sign Up
                </Button>
              </Grid>
            </Fade>
          </Grid>
        </Grid>
        {/* <Notification
          open={open}
          handleClose={handleClose}
          notification={notification}
        /> */}
      </form>
    );
  } else {
    return <Redirect to={`/selectproject`} />;
  }
}
