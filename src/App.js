import React from 'react'
import { makeStyles } from "@material-ui/styles";
import Header from './Components/Header';
import Myprojects from './Components/Myprojects';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight : '100vh',
    backgroundImage : `url(${process.env.PUBLIC_URL + '/Utlis/bg4.png' })`,
    //backgroundRepeat: 'no-repeat',
    //backgroundSize: 'cover',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Myprojects />
    </div>
  )
}

export default App

