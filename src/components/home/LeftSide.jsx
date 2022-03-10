import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    Blogbtn:{
        margin: 20,
        background :'#3F51B5',
        color: '#ffffff',
        width: '86%',
    },
    link:{
        textDecoration:'none',
        color: 'inherit',
    }
})
const LeftSide = () => {
    const classes = useStyle();
    return (
        <>
           <a className={classes.link}  href="/create"> <Button variant="contained" className={classes.Blogbtn}>Create Blog</Button></a>
        </>
    )
}

export default LeftSide;