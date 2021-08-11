import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

export const Grids = () => {
  const [checked, setChecked] = useState(false);

  const [text, setText] = useState("");
  console.log(text);
  const page = new Array(12).fill(0).map((ele, index) => index + 1);
  const useStyles = makeStyles({
    root: {
      backgroundColor: "red",
      margin: "auto",
      border: "1px solid blue"
    }
  });
  const classes = useStyles();

  return (
    <>
      <Box>
        <Grid container item xs={12} sm={6} md={4} lg={2} xl={1} spacing={2}>
          {page.map((value) => (
            <Grid key={value} item xs={12} sm={6} md={4} lg={2} xl={1}>
              <Paper color={classes.backgroundColor}>
                <Typography>{value}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box>
        <Button variant="contained" size="large" color="secondary">
          Default
        </Button>
        <Button variant="contained" color="primary" startIcon={<DeleteIcon />}>
          Primary
        </Button>
      </Box>
      <Box>
        <Checkbox
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          size="small"
        />
        <Checkbox
          defaultChecked
          color="primary"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      </Box>
      <Box>
        <TextField
          onChange={(e) => setText(e.target.value)}
          value={text}
          required
          color="secondary"
          helperText="Please fill this"
          error
          label="Email"
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          select
          label="Select"
          helperText="Please select your country"
        >
          {[
            { label: "India", value: "IND" },
            { label: "USA", value: "USA" }
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
};
