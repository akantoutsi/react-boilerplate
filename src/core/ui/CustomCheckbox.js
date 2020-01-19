import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

const checkboxStyles = () => ({
    root: {
        '&$checked': {
            color: '#3D70B2',
        },
        '&:hover': {
            background: "#f00",
         },
    },
    checked: {},
});

export default withStyles(checkboxStyles)(Checkbox);