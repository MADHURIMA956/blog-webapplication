

import {Box, makeStyles,FormControl,InputBase,Button ,TextareaAutosize} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyle = makeStyles((theme) => ({
    container: {
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding: 0,
        }
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover',
    },
    form:{
        display: 'flex',
        flexDirection:'row',
        marginTop: 10,
    },
    text:{
        fontSize:25,
        margin: '0 30px',
    },
    textarea:{
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    }
}))


const Createpost = () => {
    const classes = useStyle();
    return(
       <Box className={classes.container}>
           <img className={classes.image} src="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=" alt="" />
           <FormControl className={classes.form}>
               <AddBoxIcon fontSize="large"  color="action"/>
               <InputBase className={classes.text} placeholder="title" />
               <Button variant="contained" className={classes.Blogbtn}>Publish</Button>
           </FormControl>
           <TextareaAutosize 
                rowsMin={5}
                placeholder="Write your story..."
                className={classes.textarea}
            />
       </Box>
    )
}

export default Createpost;