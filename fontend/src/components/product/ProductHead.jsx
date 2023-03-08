import React from 'react'
import {  Box,  Typography } from '@mui/material'
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Grid from '@mui/material/Grid';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const ProductHead = () => {
    return (
        <>
            <Box sx={{padding: 8}}>
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="right">
                            <Grid item>
                                <LoopRoundedIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Free Shiping </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">Form all oders $100</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <FavoriteBorderRoundedIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Daily Sarprice offer </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">Save Up to 20% off</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <AccessibilityNewIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Support 24/7 </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">My Account</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <ShoppingCartRoundedIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Affor Dabla price </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">$1000</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box component={'div'}>
                    <Grid container spacing={1} alignItems="center">
                            <Grid item>
                                <ShoppingCartRoundedIcon fontSize='large' />
                            </Grid>
                            <Grid item>
                                <Typography sx={{ marginLeft: 2, fontWeight: '600' }} variant="body">Affor Dabla price </Typography>
                                <Typography sx={{ marginLeft: 2 }} variant="body2">$1000</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProductHead