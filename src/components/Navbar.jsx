import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";


import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Typography sx={{ color: "#FC1503" }}>YouVideo</Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;