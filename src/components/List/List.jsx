import React from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core"

import useStyles from "./styles"


const List = () => {
    const classes = useStyles()
    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels & Attractions </Typography>
            <FormControl className={classes.formControl}>
                <ImputLabel>Type</ImputLabel>
                <Select value={""} onChange={""}></Select>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Restaurants</MenuItem>
                <MenuItem value="restaurant">Restaurants</MenuItem>
            </FormControl>
        </div>
    )
}
export default List;