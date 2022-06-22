import React from 'react';
import { Typography, Stack, Divider, List, ListItem, ListItemText, ListSubheader } from '@mui/material';


function MainPage() {
    return (
        <Stack height="100vh" alignItems="center" justifyContent="center">
            <Typography variant="h4" gutterBottom>React boiler plate</Typography>
            <Typography variant="h5" fontStyle="italic">with theme set using MUI</Typography>
            <Divider sx={{ width:"50%", p: 3 }} />
            <List 
                sx={{ width:"50%", textAlign: "center", pt: 3 }} 
                component="nav"
                subheader={
                    <ListSubheader component="div">
                        Feature
                    </ListSubheader>
                }
            >
                <ListItem sx={{ textAlign: "center" }}>
                    <ListItemText primary="Login / Sign up" />
                </ListItem>
            </List>
        </Stack>
    )
}

export default MainPage
