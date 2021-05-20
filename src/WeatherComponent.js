import React from 'react'
import { makeStyles } from '@material-ui/core';
//import { Icon } from '@material-ui/core';
import {Img} from 'react-image'


const usestyles = makeStyles(theme=> ({
   
    container:{
        minWidth:theme.spacing(20),
        maxWidth:theme.spacing(50),
        padding:'5px 0px',
        margin: '50px auto',
        textAlign:'center',
        borderRadius:'5%',
        boxShadow: `0px 3px 8px rgba(0, 0, 0, 0.24)`,
        color:'white',
      
        '& >*':{
            padding:'5px 0px',
            }
          
        },
        icon:{
            marginLeft:'auto',
            marginRight:'auto',
            backgroundColor:' #8368b2  ',
            borderRadius:'50%',
            boxShadow: `0px 3px 8px rgba(0, 0, 0, 0.3)`,
            height:'95px',
            width:'100px',
        }

        
     }))



const WeatherComponent = ({name,main,weather}) => {

    const classes = usestyles();

    const { icon,description } = weather[0];
    const { temp,feels_like,temp_min,temp_max } = main;

    const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png`:'' ;

    const ImageComponent = () => <Img src={iconUrl} />

    return (
       
       <div className={classes.container}>
            
                <h1> {name} </h1>

                <div className={classes.icon}><ImageComponent  /> </div>
                
                                           
                <h1>{Math.floor(temp)}&deg;C</h1>
                <h4>Feels like {Math.floor(feels_like)}&deg;C</h4>

                <h2>
                    <span style={{paddingRight:'80px'}}><span style={{fontSize:'15px'}}>Min:</span> {Math.floor(temp_min)}&deg;C</span>
                    <span><span style={{fontSize:'15px'}}>Max:</span> {Math.floor(temp_max)}&deg;C</span>

                </h2>

                <h2>{description && description[0].toUpperCase() + description.slice(1)}</h2>
         
        </div>
    )
}

export default WeatherComponent
