import Link from "next/link";

export const Button = ({ href, children }) => (
  <Link
    href={href}
    style={{
      textDecoration: "none",
      padding: 10,
      backgroundColor: "#201e1c",
      color: "#ECEDEE",
      border: "none",
      borderRadius: 5,
      height: "fit-content",
      textTransform: "uppercase",
      fontSize: 14,
      fontWeight: "bold",
    }}
  >
    {children}
  </Link>
);
