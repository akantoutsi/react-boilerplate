import { makeStyles } from '@material-ui/core/styles';

const classes = makeStyles(theme => ({
    root: {
        margin: `${theme.spacing(0.5)}rem ${theme.spacing(5)}rem`,
        textAlign: theme.textAlign,
        backgroundColor: theme.palette.background.default,
    },
    description: {
        color: theme.palette.common.black,
        fontWeight: 600,
    },
    rightLabel: {
        marginLeft: '4px',
        color: theme.palette.common.black,
    },
    amountLabel: {
        marginRight: '10px',
        color: 'black',
    },
    rightBody1: {
        marginLeft: theme.typography.pxToRem(4), // '4px',
    },
    darkColor: {
        color: theme.palette.primary.main,
    },
    secondaryDarkColor: theme.palette.secondary.dark,
    main: {
        padding: theme.spacing(1),
        borderBottom: '1px solid grey',
    },
    totalAmountLabel: {
        fontWeight: 600,
        color: '#787878',
    },
    leftTextDirection: {
        textAlign: 'left',
    },
    rightTextDirection: {
        textAlign: 'right',
    },
    imageIcon: {
        height: '100%'
    },
    iconRoot: {
        textAlign: 'center'
    },
    control: {
        padding: theme.spacing(0.5),
    },
    afro: {
        fontSizeInherit: theme.typography.pxToRem(10), // '10rem',
    },
    currencyIcon: {
        color: '#C0C0C0', 
        fontSize: '1.1rem',
        margin: '0 5px',
    },
    totalAmountCurrency: {
        fontSize: '1.6rem', 
        marginRight: '5px',
        color: '#787878',
    },
    a: {
        fontSize: '1.1rem', 
        marginRight: '5px',
        fontWeight: 600,
        color: '#787878',
    },
    alignCheckboxes: {
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'center',
        },
    },
}));

export default classes;