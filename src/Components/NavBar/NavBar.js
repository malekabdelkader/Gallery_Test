import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ImageIcon from '@material-ui/icons/Image';const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"100%",
    position: 'fixed',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Gallery  
          </Typography>
          <ImageIcon/>{props.NumberOfPhoto} 
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={props.MorePhotos}
                color="inherit"
              >
                <AddPhotoAlternateIcon />
                +10
              </IconButton>
            </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
