import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Appbar from "./Appbar/Appbar.jsx";
import Container from "@material-ui/core/Container";
import { TextField, Fab } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import fire from "../../../firebase/firebase.js";

const useStyles = makeStyles({
  card: {
    minWidth: 250
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function FirstScreen(props) {
  const classes = useStyles();
  // const projects = JSON.parse(localStorage.getItem("projects"));
  // let pros = projects;
  const [projects, setProjects] = React.useState(
    JSON.parse(localStorage.getItem("projects"))
  );
  let pros = projects;

  const db = fire.firestore();

  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");

  let keyVal = localStorage.getItem("key");
  let keysArray = JSON.parse(localStorage.getItem("keysArray"));

  const [data, setData] = React.useState({});

  function selectProject(select) {
    localStorage.setItem("selectedproject", select);
    props.history.push("/courage");
    window.location.reload();
  }

  const [values, setValues] = React.useState({
    name: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  useEffect(() => {
    let temp = [];
    db.collection("users")
      .get()
      .then(querySnapshot => {
        const dataArray = querySnapshot.docs.map(doc => doc.data());
        setData(dataArray);
        temp = dataArray;
      })
      .then(function setting() {
        Object.values(temp).map((type, key) => {
          if (type.email === email && type.password === password) {
            setProjects(type.projects);
            localStorage.setItem("projects", JSON.stringify(type.projects));
            return null;
          } else {
            console.log("else");
            return null;
          }
        });
      });
  }, [db, email, password]);

  function newProject() {
    setProjects(null);
    setValues({ ...values, name: "" });
    if (values.name.length === 0) {
      alert("Enter a name");
    } else {
      pros.push(values.name);
      db.collection("users")
        .doc(keysArray[keyVal])
        .update({
          projects: pros
        })
        .then(() => {
          db.collection("users")
            .get()
            .then(querySnapshot => {
              const dataArray = querySnapshot.docs.map(doc => doc.data());
              setData(dataArray);
              Object.values(data).map((type, key) => {
                if (type.email === email && type.password === password) {
                  setProjects(type.projects);
                  localStorage.setItem(
                    "projects",
                    JSON.stringify(type.projects)
                  );
                  return null;
                } else {
                  console.log("else");
                  return null;
                }
              });
            });
          // localStorage.setItem("selectedproject", values.name);
          // props.history.push("/courage");
        });
    }
  }

  // function deleteProject(){

  // }

  // useEffect(() => {
  //   return () => {
  // Object.values(data).map((type, key) => {
  //   if (type.email === email && type.password === password) {
  //     setLoading(false);
  //     localStorage.setItem("projects", JSON.stringify(type.projects));
  //     return null;
  //   } else {
  //     return null;
  //   }
  // });
  //   };
  // });

  return (
    <div>
      <Appbar />
      <Container>
        <Grid container spacing={0}>
          {projects === null ? (
            <Grid
              item
              xs={12}
              style={{ paddingLeft: "50%", paddingTop: "25%" }}
            >
              <CircularProgress color="secondary" />
            </Grid>
          ) : projects.length === 0 ? (
            <Grid item xs={12} sm={6} md={3}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Add New Project
                  </Typography>
                  <TextField
                    id="standard-name"
                    label="Name"
                    className={classes.textField}
                    value={values.name}
                    onChange={handleChange("name")}
                    margin="normal"
                  />
                </CardContent>
                <CardActions style={{ justifyContent: "flex-end" }}>
                  <Fab
                    size="small"
                    variant="round"
                    onClick={() => newProject()}
                  >
                    +
                  </Fab>
                </CardActions>
              </Card>
            </Grid>
          ) : (
            <Grid item xs={12} container spacing={5}>
              <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography
                      className={classes.title}
                      color="textSecondary"
                      gutterBottom
                    >
                      Add New Project
                    </Typography>
                    <TextField
                      id="standard-name"
                      label="Name"
                      className={classes.textField}
                      value={values.name}
                      onChange={handleChange("name")}
                      margin="normal"
                    />
                  </CardContent>
                  <CardActions style={{ justifyContent: "flex-end" }}>
                    <Fab
                      size="small"
                      variant="round"
                      onClick={() => newProject()}
                    >
                      +
                    </Fab>
                  </CardActions>
                </Card>
              </Grid>
              {projects.map((type, key) => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={key}>
                    <Card className={classes.card}>
                      <CardContent>
                        <Typography
                          className={classes.title}
                          color="textSecondary"
                          gutterBottom
                        >
                          Name: {type}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button
                          size="small"
                          onClick={() => selectProject(type)}
                        >
                          Select
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}
