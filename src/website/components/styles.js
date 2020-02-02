import { makeStyles } from '@material-ui/core/styles';

const classes = makeStyles(theme => ({
    root: {
        background: '#FAFAFA',
    },
    container: {
        margin: theme.spacing(1, 10),
    },
    category: {
        width: '200px',
        padding: theme.spacing(3.75, 2.25),
        background: '#FFFFFF',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.12)',
        borderRadius: '2px',
        margin: theme.spacing(0.8),
        color: '#8A8A8A',
        cursor: 'pointer',

        '&:hover': {
            color: '#D51317',
            borderBottom: '4px solid #D51317',
            paddingBottom: theme.spacing(3.5), 
        },
    
        "&:active": {
            color: '#D51317',
            borderBottom: '4px solid #D51317',
            paddingBottom: theme.spacing(3.5),
        },
    },
    icon: {
        padding: '2px',
    },
    typography: {
        fontFamily: 'CF Asty Std',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#312F2F',
    },
    categoryTextHovered: {
        fontFamily: 'CF Asty Std',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px',
        lineHeight: '16px',
        textAlign: 'center',
        color: '#D51317',
    },
}));

export default classes;