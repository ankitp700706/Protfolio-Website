import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Imagecard from './Imagecards';
import projectsinfo from './../Static/Projectsinfo';
import useWindowPosition from './../hook/useWindowPosition';


const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        },
    },
}));

function Myprojects() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    

  
    return (
        <div className={classes.root} id='project-list'>
            
            <Imagecard place ={projectsinfo[0]} checked={checked}/>
            <Imagecard place ={projectsinfo[1]} checked={checked}/> 
        </div>
    )
}

export default Myprojects
