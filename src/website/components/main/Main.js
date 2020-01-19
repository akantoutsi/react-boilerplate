import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button  from "@material-ui/core/Button";
import TextField from '@material-ui/core/TextField';
import { DatePicker } from "@material-ui/pickers";
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { CustomCheckbox } from '@core/ui';
import {
    a,
    b,
    c,
    d,
    f
} from '@core/models/model1';

import './main.css';

const useStyles = makeStyles(theme => ({
    mainStyles: {
      padding: theme.spacing(1),
      textAlign: theme.textAlign,
    },

    buttonStyles: {
        padding: theme.spacing(2),
      },
}));

const Main = () => {
    console.log(a);
    console.log(f);
    console.log(b);
    console.log(c);
    console.log(d);

    const classes = useStyles();

    const [selectedDate, handleDateChange] = useState(new Date());
    
    return (
        <div className="main">
            <Grid
                container 
                direction="row"
                alignItems="center"
                className={classes.mainStyles}>

                <Grid item xs={12} md={6}>
                    <TextField
                        type="text"
                        label="Username"
                        margin="normal"
                        required 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        type="password"
                        label="Password"
                        margin="normal"
                        required 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        type="text"
                        label="Fullname"
                        margin="normal"
                        required 
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <DatePicker 
                        value={selectedDate}
                        disableFuture
                        format="DD/MM/YYYY"
                        autoOk={true}
                        margin="normal"
                        label="Birth Date"
                        required
                        clearable
                        onChange={handleDateChange}
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <TextField
                        type="text"
                        label="Occupation"
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormControl margin="normal" style={{ width: '246px' }}>
                        <InputLabel>Gender</InputLabel>

                        <Select
                            className='select'
                            // onChange={props.changed}
                        >
                        {/* {props.options.map((option) => ( */}
                            {/* <MenuItem key={option.value} value={option.value}>
                                {option.displayValue}
                            </MenuItem> */}
                        {/* ))} */}
                            <MenuItem key={1} value="yes">
                                Yes
                            </MenuItem>
                            <MenuItem key={0} value="no">
                                No
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    className={classes.buttonStyles}
                >
                    <FormControlLabel
                        // style={invalidInputStyle}
                        control={<CustomCheckbox />}
                        label="Accept the terms of use"
                        // onChange={props.changed}
                    />
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="center"
                    className={classes.buttonStyles}
                > 
                    <Grid item>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                        Register
                        </Button>
                    </Grid>
                </Grid>
            </Grid>

            {/* <Typography>Afroditi</Typography>
            <Typography variant="h1">Main component here!</Typography>
            <Typography color="primary">subtitle</Typography> */}
        </div>
    );
}

export default Main;