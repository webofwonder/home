import Link from "next/link";

export const NavLink = ({ href, children }) => (
  <Link
    style={{
      padding: 10,
      textDecoration: "none",
      color: "#ECEDEE",
      letterSpacing: "2px",
      display: "flex",
      alignContent: "center",
      // "&:hover": {
      //   color: "blue",
      // },
    }}
    href={href}
  >
    {children}
  </Link>
);
