import React from 'react'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BeenhereSharpIcon from '@mui/icons-material/BeenhereSharp';

const index = () => {
  return (
    <>
      <Box component={'div'} sx={{ backgroundColor: '#424242', color: 'white', padding: ' 25px 0' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '25px 0' }}>
          <Box>
            <Typography variant='h4'> <BeenhereSharpIcon fontSize='large' marginTop='25px' /> Sign up for NewsLatter</Typography>
          </Box>
          <Box>
            <TextField size='small' sx={{ width: 600, marginLeft: 40, background: 'white' }} />
            <Button sx={{ padding: '8px 25px' }} variant='contained'>Search</Button>
          </Box>
        </Box>
        <hr />
        <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: { lg: '90%', xs: '100%' }, margin: '0 auto', padding: ' 25px 0' }}>
          <Box component={'div'}>
            <Box>
              <Typography variant='h5'>
                Contact us
              </Typography>

              <Box component={'div'} sx={{ marginTop: 2, }}>
                <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 1, color: 'gray' }}>
                  Bhawal Mirzapur
                </Typography>
                <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 1, color: 'gray' }}>
                  Gazipur Sadar, Gazipur. 1703
                </Typography>
                <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 1, color: 'gray' }}>
                  +8801632706439
                </Typography>
                <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 3, color: 'gray' }}>
                  shakilhossen307@gmail.com
                </Typography>
              </Box>

              <Box component={'div'} sx={{ marginTop: 3 }}>
                <IconButton> <FacebookRoundedIcon color='primary' fontSize='large' /></IconButton>
                <IconButton> <LinkedInIcon color='primary' fontSize='large' /></IconButton>
                <IconButton> <TwitterIcon color='primary' fontSize='large' /></IconButton>
                <IconButton> <InstagramIcon color='primary' fontSize='large' /></IconButton>
              </Box>
            </Box>
          </Box>
          <Box component={'div'}>
            <Typography variant='h5'>
              Information
            </Typography>
            <Box component={'div'} sx={{ marginTop: 2, }}>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Privacy Policy
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Refund Policy
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Shipping Policy
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Terms & Conditions
              </Typography>
            </Box>
          </Box>

          <Box component={'div'}>
            <Box component={'div'}>
              <Typography variant='h5'>
                Account
              </Typography>
            </Box>

            <Box component={'div'} sx={{ marginTop: 2, }}>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                About Us
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Raq
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Contact
              </Typography>
            </Box>
          </Box>

          <Box component={'div'}>
            <Box component={'div'}>
              <Typography variant='h5'>
                Quack Links
              </Typography>
            </Box>

            <Box component={'div'} sx={{ marginTop: 2, }}>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Laptop
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Headset
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Phone
              </Typography>
              <Typography variant='h6' sx={{ fontSize: '1rem', marginTop: 2, color: 'gray' }}>
                Earphones
              </Typography>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  )
}

export default index