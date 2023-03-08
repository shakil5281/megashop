import React from 'react'
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import Categorymanu from './Categorymanu';
import { StyledTextField } from '../../../muiTheme/TextField';
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Grid from '@mui/material/Grid';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { deepPurple } from '@mui/material/colors';



const Manuber = () => {

    return (
        <>
            <AppBar color='warning' position='static' sx={{ boxShadow: 'none' }}>
                <Box component={'div'} sx={{ width: { lg: '90%', xs: '100%' }, margin: '0 auto', display: 'flex', justifyContent: 'space-between' }}>
                    <Toolbar sx={{ width: '10%' }}>
                        <Typography sx={{fontSize: '1.8rem'}} variant='h4'>
                            MegaShop
                        </Typography>
                    </Toolbar>
                    <Toolbar sx={{ width: '40%' }}>
                        <StyledTextField
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchIcon />
                                    </IconButton>
                                )
                            }}
                            size='small'
                            sx={{ backgroundColor: 'white' }}
                            fullWidth variant="outlined" />
                    </Toolbar>
                    <Toolbar sx={{ width: '40%' }}>
                        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <LoopRoundedIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Product </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Compaire</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <FavoriteBorderRoundedIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Favrate </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Wishlist</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <AccessibilityNewIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Login </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">My Account</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Grid container spacing={1} alignItems="center">
                                    <Grid item>
                                        <ShoppingCartRoundedIcon fontSize='large' />
                                    </Grid>
                                    <Grid item>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">Cart </Typography>
                                        <Typography sx={{ marginLeft: 0 }} variant="body2">$1000</Typography>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box component={'div'}>
                                <Avatar src='https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1' sx={{ bgcolor: deepPurple[500] }}>S</Avatar>
                            </Box>
                        </Box>
                    </Toolbar>
                </Box>
                <Toolbar>
                    <Categorymanu />
                </Toolbar>
            </AppBar>
            
        </>
    )
}

export default Manuber