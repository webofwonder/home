import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Header } from "../src/components/header";
import { Cobweb } from "../src/components/vectors/cobweb";

// create a new title component in JSX
const Title = ({ children }) => <h1 style={{}}>{children}</h1>;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wonder Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main
        id="home"
        style={{
          display: "grid",
          gridTemplateColumns: "max-content",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "min-content min-content min-content",
            alignItems: "center",
            columnGap: 4,
          }}
        >
          <h1>WONDER</h1>
          <Cobweb />
          <h1>WEB</h1>
        </div>
        <p style={{ margin: 0, textAlign: "left" }}>events</p>
        <p style={{ margin: 0, textAlign: "left" }}>web development</p>
        <p style={{ margin: 0, textAlign: "left" }}>education</p>
      </main>
    </div>
  );
}
