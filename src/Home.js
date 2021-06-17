import React from 'react';
import './home.css';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid, Typography, Link } from '@material-ui/core';
//import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
        paddingTop: theme.spacing(20),
        flexGrow: 1,
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    },
}));

const CeldaHome = (props) => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Link href={props.url} underline={'none'} >
            <Grid container direction="column" justify="flex-start" alignItems="center" >
                <Grid item >
                    <Avatar alt="A" src={props.imgPath} className={classes.large} />
                </Grid>
                <Grid item>
                    <Typography variant={'h5'} color={'textPrimary'}  >{props.texto}</Typography>
                </Grid>
            </Grid>
            </Link>
        </React.Fragment>
    )
    // <Typography>{props.texto}</Typography>
}

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container justify='space-between'>
                <Grid item xs={12} sm={6} md={4} className={classes.center}>
                    <CeldaHome texto={'Jardines'} imgPath={"/gardens.jpg"} url={'./#/jardines'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.center}>
                    <CeldaHome texto={'Plantas'} imgPath={"/plants.jpg"} url={'./#/plantas'} />
                </Grid>
                <Grid item xs={12} sm={6} md={4} className={classes.center}>
                    <CeldaHome texto={'Sucesos'} imgPath={"/actions.jpg"} url={'./#/sucesos'} />
                </Grid>
            </Grid>
        </div>
    )
}


export default Home;