import React from 'react'
import { Box, ListItemIcon, Tab, Tabs, Typography } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DashboardCustomizeRoundedIcon from '@mui/icons-material/DashboardCustomizeRounded';
import { StyledButton } from '../../../muiTheme/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';


const Categorymanu = () => {
  return (
    <>
      <Box component={'div'} sx={{ display: 'flex', width: { lg: '90%', xs: '100%' }, margin: '0 auto' }}>
        <Box component={'div'}>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <StyledButton sx={{ paddingRight: 3 }} color='inherit' startIcon={<DashboardCustomizeRoundedIcon />} endIcon={<ArrowDropDownIcon />} disableRipple  {...bindTrigger(popupState)}>
                  Dashboard
                </StyledButton>
                <Menu sx={{ marginTop: 2, padding: 3 }} {...bindMenu(popupState)}>
                  {
                    ['phone', 'Fashion', 'Electronice', 'Computer', 'Shoping'].map((item => (
                      <MenuItem sx={{width: '250px', padding: 1.5}} onClick={popupState.close}>
                        <Typography sx={{width: '200px'}} variant="inherit">{item}</Typography>
                        <ListItemIcon sx={{float: 'right', display: 'flex'}}>
                          <ArrowRightRoundedIcon />
                        </ListItemIcon>
                      </MenuItem>
                    )))
                  }
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
        </Box>
        <Box component={'div'} sx={{ marginLeft: 4 }}>
          <Tabs
            textColor="">
            <Tab label="Home" value="1" />
            <Tab label="Our Store" value="1" />
            <Tab label="Blog" value="1" />
            <Tab label="Contact" value="1" />
          </Tabs>
        </Box>
      </Box>
    </>
  )
}

export default Categorymanu