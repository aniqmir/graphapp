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

export default function Signup(props) {
  const classes = useStyles();
  const db = fire.firestore();
  const [values, setValues] = React.useState({
    email: undefined,
    password: undefined,
    confirmpassword: undefined,
    username: undefined,
    type: "client",
    projects: [],
    tests: [{ situationalawareness: 1 }, { creativity: 1 }, { teamwork: 1 }]
  });

  const [data, setData] = React.useState({});
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
        setData(dataArray);
      });
  }, [db]);

  function createNew() {
    var id = db.collection("users").doc();
    db.collection("users")
      .doc(id.id)
      .set(values)
      .then(() => {
        alert("Success");
        window.location = "/";
      })
      .catch(error => {
        console.log(error.message, "Create user failed");
      });
  }
  function signUpfunc(e) {
    console.log(e);
    e.preventDefault();
    if (values.password === values.confirmpassword) {
      data.map((type, key) => {
        if (type.email === values.email) {
          alert("email already exists");
          return null;
        } else if (type.username === values.username) {
          alert("username already exsists");
          return null;
        } else {
          createNew();
          return null;
        }
      });
    } else {
      alert("passwords do not match");
      setValues({
        email: undefined,
        password: "",
        confirmpassword: "",
        usernmae: undefined
      });
    }
  }

  if (!loggedIn) {
    return (
      <form onSubmit={e => signUpfunc(e)}>
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
                  type="email"
                  required
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
            <Fade in={true} timeout={3000}>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.margin}
                  id="outlined-cpassword-input"
                  label="Confirm Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange("confirmpassword")}
                  required
                  fullWidth
                  value={values.confirmpassword || ""}
                  error={
                    values.confirmpassword === undefined
                      ? false
                      : values.confirmpassword.length === 0
                      ? true
                      : false
                  }
                  helperText={
                    values.confirmpassword === undefined
                      ? false
                      : values.confirmpassword.length === 0
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
            <Fade in={true} timeout={3000}>
              <Grid item xs={12}>
                <CssTextField
                  className={classes.margin}
                  id="outlined-username-input"
                  label="Username"
                  autoComplete="username"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange("username")}
                  required
                  fullWidth
                  value={values.username || ""}
                  error={
                    values.username === undefined
                      ? false
                      : values.username.length === 0
                      ? true
                      : false
                  }
                  helperText={
                    values.username === undefined
                      ? false
                      : values.username.length === 0
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
            <Fade in={true} timeout={5000}>
              <Grid item xs={6}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  size="large"
                  type="submit"
                  //   onClick={() => signUpfunc()}
                >
                  Sign Up
                </Button>
              </Grid>
            </Fade>
            <Fade in={true} timeout={4000}>
              <Grid item xs={6}>
                <Button
                  className={classes.button}
                  variant="outlined"
                  size="large"
                  onClick={() => props.history.push("/")}
                >
                  Login
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
    return <Redirect to="/situationalawareness" />;
  }
}
