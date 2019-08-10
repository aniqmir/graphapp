import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Typography } from "@material-ui/core";

import Barchart from "../Barchart/Barchart.jsx";
import Areachart from "../Areachart/Areachart.jsx";

const vals = [
  {
    value: 1,
    label: "1"
  },
  {
    value: 1.5,
    label: "1.5"
  },
  {
    value: 2,
    label: "2"
  },
  {
    value: 2.5,
    label: "2.5"
  },
  {
    value: 3,
    label: "3"
  },
  {
    value: 3.5,
    label: "3.5"
  },
  {
    value: 4,
    label: "4"
  },
  {
    value: 4.5,
    label: "4.5"
  },
  {
    value: 5,
    label: "5"
  }
];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    p1: 1,
    a1: 1,
    p2: 1,
    a2: 1,
    p3: 1,
    a3: 1,
    p4: 1,
    a4: 1,
    p5: 1,
    a5: 1,
    p6: 1,
    a6: 1
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <Grid container spacing={0}>
        <Grid item container xs={2} sm={2} md={1}>
          <Grid item xs={12} />
          <Grid item xs={12}>
            Period 1
          </Grid>
          <Grid item xs={12}>
            Period 2
          </Grid>
          <Grid item xs={12}>
            Period 3
          </Grid>
          <Grid item xs={12}>
            Period 4
          </Grid>
          <Grid item xs={12}>
            Period 5
          </Grid>
          <Grid item xs={12}>
            Period 6
          </Grid>
        </Grid>
        <Grid item container xs={2} sm={2} md={1}>
          <Grid item xs={12}>
            <Typography>Plan</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.p1}
              onChange={handleChange("p1")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              ////helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.p2}
              onChange={handleChange("p2")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              ////helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.p3}
              onChange={handleChange("p3")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              ////helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.p4}
              onChange={handleChange("p4")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.p5}
              onChange={handleChange("p5")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.p6}
              onChange={handleChange("p6")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item container xs={2} sm={2} md={1}>
          <Grid item xs={12}>
            <Typography>Actual</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.a1}
              onChange={handleChange("a1")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.a2}
              onChange={handleChange("a2")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.a3}
              onChange={handleChange("a3")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.a4}
              onChange={handleChange("a4")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.a5}
              onChange={handleChange("a5")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="outlined-select-currency-native"
              select
              //label="native select"
              className={classes.textField}
              value={values.a6}
              onChange={handleChange("a6")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              //helperText="Please select your value"
              margin="normal"
              variant="outlined"
            >
              {vals.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6} container>
          <Grid item xs={12}>
            <Barchart values={values} />
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              marginTop: 5,
              marginLeft: 100,
              marginBottom: 5
            }}
          >
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Areachart values={values} />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
