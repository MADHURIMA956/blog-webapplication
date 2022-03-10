
import { Box,Typography ,makeStyles} from "@material-ui/core";
const useStyle = makeStyles({
    container:{
        height: 350,
        margin: 10,
        borderRadius : 10,
        border: '1px solid #d3cede',
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
       
        '& > *':{
            padding:'0 5px 5px 5px',
        }
    },
    image:{
        height: 120,
        width: '100%',
        objectFit:'cover',
        borderRadius: '10px 10px 0 0'
    },
    text:{
        color: '#878787',
        fontSize:12,
    },
    heading:{
        fontSize:18,
        fontWeight:600,
    },
    descrp:{
        fontSize:14,
        wordBreak: 'break-word'
    }
})

const SinglePost = () => {
    const classes = useStyle();

    return (
        <>
            <Box className={classes.container}>
                <img className={classes.image} src="https://www.wpbeginner.com/wp-content/uploads/2016/11/choose-best-blogging-platform.png" alt="wrapper" />
                <Typography className={classes.text}>Sports</Typography>
                <Typography className={classes.heading}>title for the post</Typography>
                <Typography className={classes.text}>Author: Dinesh</Typography>
                <Typography className={classes.descrp}>Hi This is the description of my blog</Typography>

           </Box>
        </>
    )
}

export default SinglePost;