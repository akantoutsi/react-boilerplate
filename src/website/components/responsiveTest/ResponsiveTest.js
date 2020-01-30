import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import EuroIcon from '@material-ui/icons/Euro';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CustomButton, SVG } from '@core/ui';
import IconButton from '@material-ui/core/IconButton';
// import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import PanoramaHorizontalIcon from '@material-ui/icons/PanoramaHorizontal';
import { CustomCheckbox } from '@core/ui';
import tv from '../../assets/tv.svg';
import Popover from '@material-ui/core/Popover';

const useStyles = makeStyles(theme => ({
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
    largeButton: {
        padding: '24px',
        color: 'purple',
        width: '24px',
        height: '24px',
    },
}));
                    {/* how to make responsive the image */}
const ResponsiveTest = ({
    id,
    open,
    anchorEl,
    onClose,
}) => {
    const classes = useStyles();

    // const searchResults = [
    //     { id: 1, name: 'Afro' },
    //     { id: 2, name: 'Afroditi' },
    //     { id: 3, name: 'Amy' },
    //     { id: 4, name: 'Afroula' },
    //     { id: 5, name: 'Afroditaki' },
    //     { id: 6, name: 'Rania' },
    // ];

    // const [ results, setResults ] = useState(searchResults);

    // const handleChangedInput = event => {
    //     const res = searchResults.filter(elem => elem.name.includes(event.target.value));
    //     setResults(res);
    // } 
    
    return (
        <div>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          aaaaa
          </Popover>
        <div className={classes.root}>
            {/* <input onChange={handleChangedInput} /> */}
            
            {/* {
                results && (
                    results.map(elem => (
                        <ul>
                            <li key={elem.id}>{elem.name}</li>
                        </ul>
                    ))
                )
            } */}

            <Grid container direction="column">
                <Grid item container direction="row" justify="space-between" alignItems="center" className={classes.main}>
                    {/* how to make responsive the image */}
                    <Grid item style={{ minWidth: '300px', maxWidth: '300px' }} xs={12} sm={12} md={4} lg={4} xl={4}>
                        {/* <Icon> */}
                            {/* <img src={tv} style={{ width: '100%', height: '100%' }} /> */}
                        {/* </Icon> */}

                        {/* <IconButton className={classes.largeButton}> - etsi megalwnw to giro giro */}
                        <IconButton>
                            <SVG 
                                // d={"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"} 
                                // fontSize="large"    
                                htmlColor="green"
                                // fontSize="default"
                                // width="48" 
                                // height="48" 
                                // viewBox="0 0 24 24"
                                className={classes.largeButton}
                            />
                        </IconButton>
                        
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Grid container alignItems="center" className={classes.control}>
                            <Typography variant="body1">188953</Typography>

                            <Grid item container alignItems="center">
                                <Typography variant="h6" className={classes.description}>
                                    JVC LT32K583 32"
                                </Typography>

                                <Typography variant="body1" className={classes.rightBody1}>
                                    Τηλεόραση LED
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid item className={classes.control} sm={8} md={8}>
                            <Grid container alignItems="center">
                                <Grid item xs={3} sm={4} md={5}>
                                    <Grid container direction="row" alignItems="center" wrap="nowrap">
                                        <Grid item>
                                            <Grid container alignItems="center">
                                                <PanoramaHorizontalIcon />
                                                <EuroIcon className={classes.currencyIcon} />
                                                <Typography variant="subtitle1">30</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                <Grid item xs={3} sm={4} md={5}>
                                    <Grid container direction="row" alignItems="center" wrap="nowrap">
                                        <Grid item>
                                            <Grid container alignItems="center">
                                                <PanoramaHorizontalIcon />
                                                <EuroIcon className={classes.currencyIcon} />
                                                <Typography variant="subtitle1">30</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                <Grid item xs={1} sm={1} md={1} wrap="nowrap">
                                    <Typography variant="subtitle2" className={classes.rightLabel}>
                                        ΑΠΟΚΛΕΙΣΤΙΚΟ
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item className={classes.control}>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Εύρος Οθόνης:
                                    </Typography>
                                </Grid>
                                
                                <Grid item>
                                    <Typography variant="subtitle2" className={classes.rightLabel}>
                                        30 - 32 ίντσες
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Τεχνολογία Panel:
                                    </Typography>
                                </Grid>
                                
                                <Grid item>
                                    <Typography variant="subtitle2" className={classes.rightLabel}>
                                        LED
                                    </Typography>
                                </Grid>
                            </Grid>
                                
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Ανάλυση Οθόνης:
                                    </Typography>
                                </Grid>
                                
                                <Grid item>
                                    <Typography variant="subtitle2" className={classes.rightLabel}>
                                        Full HD
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Ρυθμός Ανάλυσης Εικόνας:
                                    </Typography>
                                </Grid>
                                
                                <Grid item>
                                    <Typography variant="subtitle2" className={classes.rightLabel}>
                                        Smart TV
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        Smart TV:
                                    </Typography>
                                </Grid>
                                
                                <Grid item>
                                    <Typography variant="subtitle2" className={classes.rightLabel}>
                                        Δεν υποστηρίζεται
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item container direction="column" alignItems="flex-end" item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Grid item className={classes.control}>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography variant="subtitle1">
                                        από
                                    </Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container alignItems="center">
                                        <EuroIcon className={classes.currencyIcon} />
                                    </Grid>
                                </Grid>

                                <Grid item>
                                    <Typography variant="subtitle1" style={{ position: 'relative' }}>
                                        219.00
                                        <div style={{ position: 'absolute', top: '6px', right: '0', border: '1px solid black', transform: 'rotate(-20deg)', width: '60px' }}></div>
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid container alignItems="center">
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <EuroIcon className={classes.totalAmountCurrency} />
                                    </Grid>
                                </Grid>
                            
                                <Grid item>
                                    <Typography variant="h5" className={classes.totalAmountLabel}>419.00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item className={classes.control}>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Typography className={classes.amountLabel}>Χωρίς ΦΠΑ</Typography>
                                </Grid>
                        
                                <Grid item>
                                    <Grid container alignItems="center">
                                        <EuroIcon className={classes.a} />
                                    </Grid>
                                </Grid>
                            
                                <Grid item alignItems="center">
                                    <Typography className={classes.totalAmountLabel}>380.00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item className={classes.control}>
                            <CustomButton>Προσθήκη στο καλάθι</CustomButton>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item container direction="row" md={8}>
                    <Grid item container wrap="nowrap" alignItems="center" className={classes.alignCheckboxes} xs={12} sm={12} md={2}>
                        <Grid item>
                            <CustomCheckbox />
                        </Grid>

                        <Grid item>
                            <Typography>Σύγκριση</Typography>
                        </Grid>

                        <Grid item>
                            <Grid item container alignItems="center">
                                <IconButton aria-label="delete" className={classes.margin} size="small">
                                    <ExpandMoreIcon className={classes.totalAmountLabel}/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item container wrap="nowrap" alignItems="center" className={classes.alignCheckboxes} xs={12} sm={12} md={3}>
                        <Grid item>
                            <CustomCheckbox />
                        </Grid>

                        <Grid item>
                            <Typography>Υπηρεσίες</Typography>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center">
                                <IconButton aria-label="delete" className={classes.margin} size="small">
                                    <ExpandMoreIcon className={classes.totalAmountLabel} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item container wrap="nowrap" alignItems="center" className={classes.alignCheckboxes} xs={12} sm={12} md={4}>
                        <Grid item>
                            <CustomCheckbox />
                        </Grid>

                        <Grid item>
                            <Typography>Συμπληρωματικά Προιόντα</Typography>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center">
                                <IconButton aria-label="delete" className={classes.margin} size="small">
                                    <ExpandMoreIcon className={classes.totalAmountLabel} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
 
                    <Grid item container wrap="nowrap" alignItems="center" className={classes.alignCheckboxes} xs={12} sm={12} md={3}>
                        <Grid item>
                            <CustomCheckbox />
                        </Grid>

                        <Grid item>
                            <Typography>Όμοια - Παρόμοια</Typography>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center">
                                <IconButton aria-label="delete" className={classes.margin} size="small">
                                    <ExpandMoreIcon className={classes.totalAmountLabel} />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </div>
    );
}

export default ResponsiveTest;
