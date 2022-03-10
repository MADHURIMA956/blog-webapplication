import { Button, makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    Blogbtn:{
        margin: 20,
        background :'#3F51B5',
        color: '#ffffff',
        width: '86%',
    }
})
const LeftSide = () => {
    const classes = useStyle();
    return (
        <>
            <Button variant="contained" className={classes.Blogbtn}>Create Blog</Button>
        </>
    )
}

export default LeftSide;