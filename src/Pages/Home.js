import { Button, Paper } from '@material-ui/core';
import React, { useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Tilt from 'react-tilt';

const Home = () => {
    let speak=(x)=>{
        var utter = new SpeechSynthesisUtterance(x);
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utter);
    }
    const useStyles = makeStyles((theme) => ({
        root: {
     
        margin:"0",
        padding:"0",
          width: "auto",
          height:"auto",
          
        },
        paper:{
            width:"auto",
            height:'auto',
            textAlign:'center',
            padding:"20px",
            margin:'5px',
            background:"rgba(255,255,255,0.2)",
            borderRadius:'10px',
            // border:"0.01em solid rgba(255,255,255,0.4)",
            backdropFilter:'blur(2px)',
            fontSize:'2rem',
            color:'#ffffff',
            
        },
        home: {
            // backgroundImage:`url(${img})`,
            
            backgroundColor: 'rgba(0,147,233,0.3287037037037037)',
            margin:'5px',
            padding:'25px',
          
            
            
        },
      }));
      const classes = useStyles();

    
    speak("Hello, welcome to, vaccine search portal")
    return (
        <div  className={classes.home} >
        <div style={{textAlign:'center', marginTop:'0px', color:'#ffffff', fontSize:'3rem'}}>Vaccination Slot Details </div>
        <div style={{textAlign:'center', marginTop:'0px', color:'#ffffff', fontSize:'1.5rem'}}></div>
        <Grid container  direction="row" 
           
            justify="space-around"
            alignItems="center" className={classes.root} spacing={3}> 
            <Link style={{textDecoration:'none'}} to="/pincode">  
            <Grid item lg={12}>
            <Tilt options={{ scale: 1.2, max: 25, speed: 300, transition: true }}>
            <Paper className={classes.paper} elevation={8}>
                SEARCH BY PINCODE
                <Button>CLICK HERE</Button> 
            </Paper> 
            </Tilt>
            </Grid> 
            


            </Link>


            <Link style={{textDecoration:'none'}} to="/district">
            <Grid item lg={12} >
            <Tilt options={{ scale: 1.2, max: 25, speed: 300, transition: true }}>
            <Paper className={classes.paper} elevation={8}>
                SEARCH BY DISTRICT
                <Button>CLICK HERE</Button>
            </Paper>
            </Tilt>
            </Grid>
            </Link>
        </Grid>
</div>
    );
};

export default Home;