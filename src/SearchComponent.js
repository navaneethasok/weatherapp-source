import React from 'react'
import { TextField, makeStyles, Button, Grid } from '@material-ui/core';


const usestyles = makeStyles(theme=> ({
root:{
    
    minWidth:theme.spacing(20),
    maxWidth:theme.spacing(50),
    
    marginLeft:'auto',
    marginRight:'auto', 
    
      
    '& .MuiInputBase-input':{
        color:'#ffffff',
    },
    '& .MuiButtonBase-root':{
        color:'#ffffff',
    }
}
 }))

const SearchComponent = ({ error=false,search,handleTextChange,handleSubmit }) => {
    const classes = usestyles();
    

    return (
 
        <form className={classes.root} onSubmit={handleSubmit} >

            <Grid container style={{margin:'0px auto'}} >
            <Grid item lg={1} sm >
                </Grid>
                <Grid item lg sm xs={12} style={{paddingLeft:'1em',paddingRight:'1em',}}  >
                    <TextField style={{minWidth:'80%',width:'100%'}} 
                     label='City'
                     value={search}
                     onChange={handleTextChange}
                     {...(error && {error:error,helperText:'Please Enter a Valid City Name'})}
                     
                      />

                </Grid>
                <Grid item lg={1} sm xs={4}  >
                </Grid>
                
                <Grid item lg sm xs style={{paddingTop:'1rem'}} >
                <Button variant="outlined" type='submit' >Get Weather</Button>
                </Grid>
            </Grid>
            
            
            
        </form>
    )
}

export default SearchComponent
