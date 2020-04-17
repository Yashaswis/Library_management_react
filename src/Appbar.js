import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import {Box,Button} from '@material-ui/core/';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }));
function Appbar(){
    const classes = useStyles();
    return(
        <div>
            <div>
            {/* <h1>Library Management</h1> */}
            </div>
        <div className={classes.root}>
        <AppBar textAlign="center" position="static">
        <Typography variant="h4"   >  
          <Box textAlign='center' color='inherit' fontSize="30px">
                   Library Management
                </Box> 
                <Box textAlign='left' color='orange' fontSize="large">
                   HOME
                </Box>    
             </Typography> 
                {/* 
                <Button color="inherit">Addbook</Button>
                <Button color="inherit">Listbook</Button> */}
      </AppBar>
    </div>
        </div>
    );
}
export default Appbar;