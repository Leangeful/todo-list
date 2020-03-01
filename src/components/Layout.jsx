import React, { memo } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Paper
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const Layout = memo(props => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: "#fafafa" }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: 64 }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography color="inherit">TODO APP</Typography>
      </Toolbar>
    </AppBar>
    {props.children}
  </Paper>
));

export default Layout;
