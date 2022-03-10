import {Box , makeStyles,Typography} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    container: {
        padding:'0 100px',
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover',
    },
    icons:{
        float: 'right',
    },
    icoption:{
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius:10,
    },
    title:{
        fontSize:38,
        fontWeight:600,
        textAlign:'center',
        margin: '50px 0  10px 0',
    },
    head:{
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
    }
});
function Postview() {
    const classes = useStyle();
  return (
    <Box className={classes.container}>
        <img className={classes.image} src="http://cdn2.hubspot.net/hub/53/file-23115630-jpg/blog/images/blogging_image.jpg" alt="" />
        <Box className={classes.icons}>
            <EditIcon className={classes.icoption} color='primary'/>
            <DeleteIcon className={classes.icoption} color='error'/>
        </Box>
        <Typography className={classes.title}>Tittle of the post</Typography>
        <Box className={classes.head}>
             <Typography >Author : <span className={{fontWeight:600}}>Dedesh</span> </Typography>
             <Typography style={{marginLeft: 'auto'}} >22 jun 2021</Typography>
        </Box>
    </Box>
  );
}

export default Postview;