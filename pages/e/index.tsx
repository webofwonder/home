import Head from "next/head";
import { Header } from "../../src/components/header";
import { Cobweb } from "../../src/components/vectors/cobweb";
import { Footer } from "../../src/components/footer";
import { Button } from "../../src/components/button";

const pastels = [
  "#fef1b3",
  "#e9fab6",
  "#ffe5cc",
  "#ffe6fa",
  "#d5d4fc",
  "#c9f6e5",
  "#b7fafe",
  "#b7fafe",
];

const Title = ({ children }) => (
  <h1
    style={{
      textAlign: "center",
      backgroundColor: `${pastels[0]}`,
      background: `linear-gradient(to right, ${pastels.toString()})`,
      padding: "0.67em",
      margin: 0,
    }}
  >
    {children}
  </h1>
);
const EventCard = ({ title, date, location, slug, tagline }) => {
  // select two pastels at random
  const pastel1 = pastels[Math.floor(Math.random() * pastels.length)];
  // remove pastel1 from pastels
  pastels.splice(pastels.indexOf(pastel1), 1);
  const pastel2 = pastels[Math.floor(Math.random() * pastels.length)];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(255, 231, 208)",
        background: `linear-gradient(45deg, ${pastel1}, ${pastel1} 35%, ${pastel2} 65%, ${pastel2} )`,
        borderRadius: 10,
        display: "block",
        maxWidth: 400,
        minWidth: 300,
      }}
    >
      <h2
        style={{ margin: 10, marginLeft: 20, marginRight: 20, marginTop: 20 }}
      >
        {title}
      </h2>
      <img
        src={`/images/${slug}.jpg`}
        alt={slug}
        style={{
          width: "100%",
        }}
      />
      <div style={{ marginLeft: 10, marginRight: 10, marginTop: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <p
            style={{
              textAlign: "left",
              margin: 0,
              fontFamily: "arial",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            {date}
          </p>
          <p
            style={{
              textAlign: "right",
              margin: 0,
              fontFamily: "arial",
              fontWeight: "bold",
              fontSize: 14,
            }}
          >
            {location}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr max-content",
          marginLeft: 10,
          marginRight: 10,
          marginTop: 20,
          marginBottom: 20,
          alignItems: "center",
          columnGap: 5,
        }}
      >
        <p style={{ margin: 0 }}>{tagline}</p>
        <Button href={`/e/${slug}`}>More details</Button>
      </div>
      <div
        style={{
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        <Cobweb />
      </div>
    </div>
  );
};

const EventMain = ({ children }) => (
  <main
    style={{
      minHeight: "calc(100vh - 125px)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignContent: "flex-start",
      alignItems: "center",
      flexWrap: "wrap",
      padding: 20,
      gap: 20,
      backgroundColor: "#18181b",
    }}
  >
    {children}
  </main>
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wonder Web | Party Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Title>PARTY MENU</Title>
      <EventMain>
        <EventCard
          title="POST FROM THE PAST PARTY"
          date="7th November 2024"
          location="Knightsbridge"
          slug="post-from-the-past"
          tagline="Send a letter to the future with our 2029 time-machine-post-box"
        />
        <EventCard
          title="SINGLES PARTY"
          date="14th February 2025"
          location="Location TBA"
          slug="singles-valentines"
          tagline="Bring a pal to join a drinks with mystery anecdotes"
        />
      </EventMain>
      <Footer />
    </div>
  );
}
