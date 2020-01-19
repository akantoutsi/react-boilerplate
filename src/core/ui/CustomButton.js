import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const buttonStyles = () => ({
    root: {
        textTransform: 'none',
        fontWeight: '900',
        padding: '15px 20px', 
        backgroundColor: '#404040', 
        color: 'white',

        '&:hover': {
            backgroundColor: '#545454',
        },

        "&:active": {
            backgroundColor: 'red',
            color: 'white',
        },
    },
});

export default withStyles(buttonStyles)(Button);