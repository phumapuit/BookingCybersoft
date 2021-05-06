import { makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
    showTime: {
        paddingTop: '85px',
        margin: '0 auto',
        width: '100%',
        maxWidth: '1000px',
        minWidth: '750px',

    },
    Arrow: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",

        zIndex: 2,
        width: "50px",
        height: "100px",
        color: "#d8d8d8 !important",
        cursor: "pointer",
        transition: "all .2s",
        '&:hover': { color: '#fb4226 !important' }
    },
    // prev: {
    //     border: 'none',
    //     backgroundColor: 'transparent',
    //     position: 'absolute',
    //     left: '-80px',
    //     top: '50%',
    //     transition: 'all 0.5s',
    //     '&:focus': {
    //         outline: 'none'
    //     },
    //     '&:hover': {
    //         color: 'red'
    //     }
    // },

    // next: {
    //     border: 'none',
    //     backgroundColor: 'transparent',
    //     position: 'absolute',
    //     right: '-80px',
    //     top: '50%',
    //     transition: 'all 0.5s',
    //     '&:focus': {
    //         outline: 'none'
    //     },
    //     '&:hover': {
    //         color: 'red'
    //     }
    // },

})
export default useStyle