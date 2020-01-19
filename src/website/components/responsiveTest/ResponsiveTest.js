import React from 'react';
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
        marginLeft: '4px',
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
    footer: {
        padding: theme.spacing(1),
        width: '50%',
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
}));

const ResponsiveTest = () => {
    const classes = useStyles();
    // vale xs, md klp, evro rem
    return (
        <div className={classes.root}>
            <Grid container direction="column">
                <Grid item>
                    <Grid container direction="row" justify="space-between" alignItems="center" className={classes.main}>
                        <Grid item>
                            <Grid container justify="space-around" alignItems="flex-start">
                                <Grid item style={{ maxWidth: '300px', width: '40%' }}>
                                    <Icon>
                                        <img src={tv} style={{ width: '80%', height: '80%' }} />
                                    </Icon>
                                </Grid>

                                <Grid item>
                                    <Grid item className={classes.control}>
                                        <Grid container alignItems="center">
                                            <Typography variant="body1">188953</Typography>
                                        </Grid>

                                        <Grid container alignItems="center">
                                            <Grid item>
                                                <Typography variant="h6" className={classes.description}>
                                                    JVC LT32K583 32"
                                                </Typography>
                                            </Grid>
                                            
                                            <Grid item>
                                                <Typography variant="body1" className={classes.rightBody1}>
                                                    Τηλεόραση LED
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item className={classes.control}>
                                        <Grid container alignItems="center" justify="space-between">
                                            <Grid item>
                                                <Grid container direction="row" alignItems="center">
                                                    <Grid item>
                                                        <Grid container alignItems="center">
                                                            <PanoramaHorizontalIcon />
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item>
                                                        <Grid container alignItems="center">
                                                            <SVG style={{ fontSize: 18, margin: '0 5px' }}>
                                                                <EuroIcon style={{ color: '#C0C0C0' }} />
                                                            </SVG>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item>    
                                                        <Typography variant="subtitle1">30</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item>
                                                <Grid container direction="row" alignItems="center">
                                                    <Grid item>
                                                        <Grid container alignItems="center">
                                                            <PanoramaHorizontalIcon />
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item>
                                                        <Grid container alignItems="center">
                                                            <SVG style={{ fontSize: 18, margin: '0 5px' }}>
                                                                <EuroIcon style={{ color: '#C0C0C0' }} />
                                                            </SVG>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item>    
                                                        <Typography variant="subtitle1">30</Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            
                                            <Grid item>
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
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container justify="flex-end">
                                <Grid item>
                                    <Grid container direction="column" alignItems="flex-end">
                                        <Grid item className={classes.control}>
                                            <Grid item>
                                                <Grid container alignItems="center">
                                                    <Grid item>
                                                        <Typography variant="subtitle1">
                                                            από
                                                        </Typography>
                                                    </Grid>

                                                    <Grid item>
                                                        <Grid container alignItems="center">
                                                            <SVG style={{ fontSize: 18, margin: '0 5px' }}>
                                                                <EuroIcon style={{ color: '#C0C0C0' }} />
                                                            </SVG>
                                                        </Grid>
                                                    </Grid>

                                                    <Grid item>
                                                        <Typography variant="subtitle1" style={{ position: 'relative' }}>
                                                            219.00
                                                            <div style={{ position: 'absolute', top: '6px', right: '0', border: '1px solid black', transform: 'rotate(-20deg)', width: '60px' }}></div>
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>

                                            <Grid item>
                                            <Grid container alignItems="center">
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <SVG style={{ fontSize: 25, marginRight: '5px' }} className={classes.totalAmountLabel}>
                                                            <EuroIcon />
                                                        </SVG>
                                                    </Grid>
                                                </Grid>
                                                
                                                <Grid item>
                                                    <Typography variant="h5" className={classes.totalAmountLabel}>419.00</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        </Grid>

                                        <Grid item className={classes.control}>
                                            <Grid item>
                                            <Grid container alignItems="center">
                                                <Grid item>
                                                    <Typography className={classes.amountLabel}>Χωρίς ΦΠΑ</Typography>
                                                </Grid>
                                            
                                                <Grid item>
                                                    <Grid container alignItems="center">
                                                        <SVG style={{ fontSize: 16, marginRight: '5px' }} className={classes.totalAmountLabel}>
                                                            <EuroIcon />
                                                        </SVG>
                                                    </Grid>
                                                </Grid>
                                                
                                                <Grid item>
                                                    <Typography className={classes.totalAmountLabel}>380.00</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        </Grid>

                                        <Grid item className={classes.control}>
                                            <Grid item>
                                                <CustomButton>Προσθήκη στο καλάθι</CustomButton>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container direction="row" wrap="nowrap" justify="space-around" className={classes.footer}>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <CustomCheckbox />
                                </Grid>

                                <Grid item>
                                    <Typography>Σύγκριση</Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container alignItems="center">
                                        <IconButton aria-label="delete" className={classes.margin} size="small">
                                            <SVG className={classes.totalAmountLabel}>
                                                <ExpandMoreIcon />
                                            </SVG>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <CustomCheckbox />
                                </Grid>

                                <Grid item>
                                    <Typography>Υπηρεσίες</Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container alignItems="center">
                                        <IconButton aria-label="delete" className={classes.margin} size="small">
                                            <SVG className={classes.totalAmountLabel}>
                                                <ExpandMoreIcon />
                                            </SVG>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <CustomCheckbox />
                                </Grid>

                                <Grid item>
                                    <Typography>Συμπληρωματικά Προιόντα</Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container alignItems="center">
                                        <IconButton aria-label="delete" className={classes.margin} size="small">
                                            <SVG className={classes.totalAmountLabel}>
                                                <ExpandMoreIcon />
                                            </SVG>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <CustomCheckbox />
                                </Grid>

                                <Grid item>
                                    <Typography>Όμοια - Παρόμοια</Typography>
                                </Grid>

                                <Grid item>
                                    <Grid container alignItems="center">
                                        <IconButton aria-label="delete" className={classes.margin} size="small">
                                            <SVG className={classes.totalAmountLabel}>
                                                <ExpandMoreIcon />
                                            </SVG>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default ResponsiveTest;