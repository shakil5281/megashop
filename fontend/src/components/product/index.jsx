import React from 'react'
import { Box } from '@mui/material'
import ProductHead from './ProductHead'
import Headproduct from './Headproduct'
import Featureproduct from './Featureproduct'

const ProductPage = () => {
    return (
        <>
            <Box component='div' sx={{ backgroundColor: '#d0d0d04d', paddingBottom: 8 }}>
                <Box component='div' sx={{ width: { lg: '90%', xs: '100%' }, margin: '0 auto' }}>
                    <ProductHead />
                    <Headproduct />
                    <Featureproduct />
                </Box>
            </Box>
        </>
    )
}

export default ProductPage