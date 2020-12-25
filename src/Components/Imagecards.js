import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea, Collapse } from '@material-ui/core';


const useStyles = makeStyles((theme)=>({
  root: {
    maxWidth: 300,
      minHeight: 700,
      background : "rgba(0,0,0,0.5)",
      margin: '20px',
    
    [theme.breakpoints.up('sm')]: {
      maxWidth: 600,
    minWidth: 600,
    minHeight: 700,
    background : "rgba(0,0,0,0.5)",
    margin: '20px',
    },
  },
  root1:{
    maxWidth: 300,
    //minWidth: 600,
    minHeight: 700,
    background : "rgba(0,0,0,0.5)",
    margin: '20px',
  },
  media: {
    height: 440,
  },
  title:{
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem'
  } ,
  dsc:{
    fontFamily:'Nunito',
    fontSize: ' 1rem',
    color: '#ddd',
  },
}));

export default function Imagecard({place, checked}) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 2250} :{})}>
      
      <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h1">
            {place.title}
          </Typography>
          <Typography className={classes.dsc} variant="body2" color="textSecondary" component="p">
            {place.description}
          </Typography>
        </CardContent>
        </CardActionArea>
      </Card>
    </Collapse>
    
  );
}