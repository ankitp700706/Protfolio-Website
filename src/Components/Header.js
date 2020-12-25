import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/styles";
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
// import Drawer from '@material-ui/core/Drawer';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'nunito'
    },
    appbar:{
      background: 'none',
      
    },
    appbarwrapper:{
        width: '80%',
        margin : '0 auto',
    },
    apptitle:{
        flexGrow: '1',
    },
    
    icon: {
        color : '#fff',
        fontSize: '2rem'
    },
    colorText:{
        color : '#5AFF3D'
    },
    colorContent:{
        color: '#fff',
        fontSize:'4.5rem'
    },
    container:{
        textAlign:'center'
    },
    goDown:{
        color: '#5AFF3D',
        fontSize: '2.5rem'
    }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


function Header(props) {
    const classes = useStyles();
    const [checked, setChecked]= useState(false)
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
        <div className={classes.root} id='header'>
            <HideOnScroll {...props}>
            <AppBar className={classes.appbar} elevation={0} >
                <Toolbar className={classes.appbarwrapper}>
                    <h1 className={classes.apptitle} >My <span className={classes.colorText}>Protfolio.</span></h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            </HideOnScroll>
            {/* <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer> */}
            <Collapse 
            in={checked} 
            {...(checked ? { timeout: 1000} :{})}
            CollapseHeight={50}
            >
            <div className={classes.container}>
                <h1 className={classes.colorContent}> 
                    Welcome to <br />
                    My <span className={classes.colorText}>Protfolio.</span>
                </h1>
                <Scroll to='project-list' smooth={true}>
                    <IconButton >
                        <ExpandMoreIcon className={classes.goDown}/>
                    </IconButton>  
                </Scroll>
            </div> 
            </Collapse>  
            
        </div>
        
    )
}

export default Header
