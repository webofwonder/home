import { NavLink } from "./navlink";
import { Cobweb } from "./vectors/cobweb";

export const Navbar = () => (
  <nav
    style={{
      backgroundColor: "#18181b",
      color: "#ECEDEE",
      height: 40,
      display: "flex",
      columnGap: 5,
    }}
  >
    <NavLink href="/">
      WONDER <Cobweb color="#ECEDEE" /> WEB
    </NavLink>
    <NavLink href="/e">PARTY MENU</NavLink>
  </nav>
);
