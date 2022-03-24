import { SearchOffOutlined } from '@mui/icons-material'
import { AppBar, Box, InputBase, Toolbar, Typography } from '@mui/material'
// import { Autocomplete } from '@react-google-maps/api'
import React from 'react'
import useStyles from './style'


const MapHeader = () => {
  const classes = useStyles()
  return (
    <>

      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.title}>
            Map Page
          </Typography>
            <Box display="flex">
              <Typography variant='h6' className={classes.title}>
                Explore new places
              </Typography>
              {/* <Autocomplete> */}
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchOffOutlined />
                  </div>
                  <InputBase placeholder='Search...' classes={{root: classes.InputRoot , input:classes.inputInput}}/>
                </div>
              {/* </Autocomplete> */}

            </Box>

        </Toolbar>

      </AppBar>

    </>
  )
}

export default MapHeader