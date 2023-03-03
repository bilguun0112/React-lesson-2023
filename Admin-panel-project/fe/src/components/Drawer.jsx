import * as React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemButton, ListItemIcon, Drawer, Divider, CssBaseline, Box, Toolbar, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { AddHome, Inventory } from '@mui/icons-material';
const drawerWidth = 240;
function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Divider />
            <List>
                <Link to='/'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <AddHome />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/product-table'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inventory />
                            </ListItemIcon>
                            <ListItemText primary="Product" sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                {/* <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <Inventory />
                        </ListItemIcon>
                        <ListItemText primary="Admin" />
                    </ListItemButton>
                </ListItem> */}

                {/* <Link to='/users'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inventory />
                            </ListItemIcon>
                            <ListItemText primary="User" sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                        </ListItemButton>
                    </ListItem>
                </Link> */}
                <Link to='/users-table'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inventory />
                            </ListItemIcon>
                            <ListItemText primary="Manage users" sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/users-role-add'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inventory />
                            </ListItemIcon>
                            <ListItemText primary="User role" sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/users-role-table'>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Inventory />
                            </ListItemIcon>
                            <ListItemText primary="User role table" sx={{ color: "rgba(0, 0, 0, 0.87)" }} />
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>
            <Divider />
        </div>
    );
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            {/* <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Pinecone Admin Panel Project
                    </Typography>
                </Toolbar>
            </AppBar> */}
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
            </Box>
        </Box>
    );
}
ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};
export default ResponsiveDrawer;