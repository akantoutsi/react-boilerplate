import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SVG } from '@core/ui';
import styles from './styles';
import topCategoriesList from './topCategories';

const TopCategoriesTest = () => {
    const [hover, setHover] = useState(false);

    const {
        root,
        container,
        category,
        icon,
        typography,
        categoryTextHovered,
    } = styles();

    const categoryTextClass = hover ? categoryTextHovered : typography;

    return (
        <Grid container className={root}>
            <Grid container className={container} justify="center">
                {
                    topCategoriesList.map(elem => (
                        <Grid item container className={category} direction="column" justify="baseline" alignItems="center"
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            <Grid item>
                                <SVG 
                                    d={elem.imageUrl}
                                    width={elem.width}
                                    height={elem.height}
                                    viewBox={elem.viewBox}
                                    className={icon}
                                />
                            </Grid>
    
                            <Grid item>
                                <Typography className={categoryTextClass}>{elem.name}</Typography>
                            </Grid>
                        </Grid>       
                    ))
                }
            </Grid>
        </Grid>
    );
}

export default TopCategoriesTest;