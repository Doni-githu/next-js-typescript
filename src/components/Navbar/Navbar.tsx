import React, { useState } from 'react'
import { Box, AppBar, Toolbar, IconButton, Button, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { navItem } from '@/config/const'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GamepadIcon from '@mui/icons-material/Gamepad';
interface Props {
    window?: () => Window
}

const drawerWidth = '100%'

export default function Navbar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6" sx={{ my: 2, display: 'flex', gap: '5px', alignItems: 'center' }}>
                    <GamepadIcon />
                    <Typography>DD</Typography>
                </Typography>
                <CloseIcon />
            </Box>
            <Divider />
            <List>
                {navItem.map((item) => (
                    <ListItem key={item.path} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.txt} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );



    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }} height={"10vh"}>
            <AppBar component="nav" sx={{ backgroundColor: '#141414', height: '10vh' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ my: 2, display: { xs: 'none', sm: 'flex' }, gap: '5px', alignItems: 'center' }}>
                        <GamepadIcon />
                        <Typography variant="h6" component={'div'} >DD</Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItem.map((item) => (
                            <Button key={item.path} sx={{ color: '#fff' }}>
                                {item.txt}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, paddingX: '10px' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box >
    )
}
