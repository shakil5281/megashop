import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  heroSection: {
    backgroundImage: `url("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80")`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 'calc(100vh - 64px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  heroTitle: {
    color: theme.palette.common.white,
    fontSize: '4rem',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  heroSubtitle: {
    color: theme.palette.common.white,
    fontSize: '1.5rem',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
    },
  },
  heroButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 700,
    padding: theme.spacing(2, 6),
    borderRadius: theme.shape.borderRadius,
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const HeroSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.heroSection}>
      <Typography variant="h1" className={classes.heroTitle}>
        Welcome to our E-commerce Store
      </Typography>
      <Typography variant="h4" className={classes.heroSubtitle}>
        Shop for the latest products at great prices
      </Typography>
      <Button variant="contained" className={classes.heroButton}>
        Shop Now
      </Button>
    </div>
  );
};

export default HeroSection;
