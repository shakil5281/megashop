import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Loading() {
    const styles = {
        slider: {
            height: '2px',
        }
    }
    return (
        <Box sx={{ width: '100%', position: 'fixed', top: 0, zIndex: 99999, height: '100%', background: '#00000036' }}>
            <LinearProgress color='warning' sx={styles.slider} />
        </Box>
    );
}