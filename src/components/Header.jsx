import {AppBar , Toolbar , Typography , makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    component:{
       
    },
    container:{
        justifyContent:'left',
        '&>*':{
            padding:20
        }   
     },
     link:{
         textDecoration:'none',
         color:'#ffffff',
     }
})
const Header = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.component} position="static">
        <Toolbar className={classes.container}>
            <a  className={classes.link} href="/"><Typography > Blog Application </Typography> </a>
            <a  className={classes.link} href="/post"><Typography >Post</Typography> </a>
        </Toolbar>
      </AppBar>
    )
}

export default Header