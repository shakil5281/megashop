import React from 'react'
import { Box } from '@mui/material'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';

const Headproduct = () => {
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Box component={'div'} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', backgroundColor: 'white', boxShadow: '0px 0px 20px #00000017', borderRadius: '7px', padding: 5 }}>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderBottom: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderLeft: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderLeft: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderLeft: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderLeft: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderRight: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderRight: '1px solid #eee',borderTop: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderRight: '1px solid #eee',borderTop: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderRight: '1px solid #eee',borderTop: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                    <Box sx={{ width: '17%',padding: 2,  height: '150px', borderTop: '1px solid #eee' }}>product List <AccountBalanceWalletRoundedIcon fontSize='large'/></Box>
                 </Box>
             </Box>
        </>
    )
}

export default Headproduct