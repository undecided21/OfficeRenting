import { useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  List,
  Box,
  Drawer,
  Button,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import CallIcon from '@mui/icons-material/Call';
import GroupsIcon from '@mui/icons-material/Groups';

function Nav() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setOpen(open);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: "Home", icon: <HomeIcon />, link: "/" },
          { text: "Book Office", icon: <BookIcon />, link: "/BookOffice" },
          { text: "Contact", icon: <CallIcon />, link: "/contact" },
          { text: "About Us", icon: <GroupsIcon />, link: "/AboutUs" },
        ].map(({ text, icon, link }) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={CustomLink} to={link}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="justify-between flex md:mx-20">
        <div className="flex justify-center cursor-pointer">
          <img src="Logo.svg" alt="" className="md:h-16 h-14 mt-3"/>
          <h1 className="pt-6 ml-2 font-bold">
            <span className="text-MainBlue">Agile</span>Spaces
          </h1>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:block m-5 list-none">
          <Stack spacing={2} direction="row">
            <CustomLink to="/">
              <Button variant="text">HOME</Button>
            </CustomLink>
            <CustomLink to={"/AboutUs"}>
              <Button variant="text">WHO ARE WE</Button>
            </CustomLink>
            <CustomLink to="/contact">
              <Button variant="text">CONTACT</Button>
            </CustomLink>
            <CustomLink to="/BookOffice">
              <Button
                className="bg-MainBlue"
                variant="contained"
                sx={{ px: 5, backgroundColor: "#6A71F1" }}
              >
                Book Office
              </Button>
            </CustomLink>
          </Stack>
        </div>

        {/* Mobile Menu */}
        <div className="block m-5 md:hidden">
          <Button
            variant="contained"
            onClick={toggleDrawer(true)}
            sx={{ backgroundColor: "#6A71F1" }}
            size="small"
          >
            <MenuIcon />
          </Button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
      </div>
    </header>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Nav;
