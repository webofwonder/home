import Head from "next/head";
import { Header } from "../../src/components/header";
import { Footer } from "../../src/components/footer";
import Grid from "@mui/material/Grid2";
import { Cobweb } from "../../src/components/vectors/cobweb";
import { Button } from "../../src/components/button";

const EventMain = ({ children }) => (
  <main
    style={{
      minHeight: "100vh",
      backgroundColor: "#e2d7c1",
    }}
  >
    {children}
  </main>
);

const RetroRule = () => (
  <div
    style={{
      width: "100%",
      height: "10px",
      backgroundColor: "#3b41c5",
      background:
        // "linear-gradient(to right,#3b41c5,#a981bb,#ffc8a9, #e9a73e, #e05b2d,#da3636, #a81e3c, #bf57a9)",
        "linear-gradient(to right, #e9a73e,#e9a73e 20%, #e05b2d 20%, #e05b2d 40%,#da3636 40%,#da3636 60%, #a81e3c 60%, #a81e3c 80%, #5c1d51 80%, #5c1d51)",
    }}
  />
);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Post from the past party</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RetroRule />
      <EventMain>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, md: 6 }}
            style={{
              backgroundImage: 'url("/images/post-from-the-past.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{ minHeight: "450px", display: "block", width: "100%" }}
            ></div>
            {/* <img
              src="/images/post-from-the-past.jpg"
              alt="post-from-the-past"
              style={{ width: "100%", height: "auto" }}
            /> */}
          </Grid>
          <Grid
            size={{ xs: 12, md: 6 }}
            style={{
              padding: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "#201e1c", fontSize: 60, margin: 0 }}>
              POST FROM THE PAST PARTY
            </h1>
            <p style={{ margin: 0 }}>Come and send a letter to the future!</p>
            <div style={{ marginTop: 10, marginBottom: 10 }}>
              <Cobweb />
            </div>
            <p
              style={{
                textAlign: "left",
                margin: 0,
                fontFamily: "arial",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              THURS 7TH NOVEMBER 2024
            </p>
            <p
              style={{
                textAlign: "left",
                margin: 0,
                fontFamily: "arial",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              KNIGHTSBRIDGE
            </p>
          </Grid>
        </Grid>
        <RetroRule />
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8 }} style={{ padding: 20 }}>
            <h3>The details</h3>
            <p></p>
            <p>
              <i>
                Come and send a letter to the future with our 2029
                time-machine-post-box
              </i>
            </p>
            <p>
              We’ve got everything you need: pens, stamps, envelopes, writing
              paper, confetti, perfume, stickers. You just need to add the
              words.
            </p>
            <p>
              You might want to encapsulate a snapshot of your life right now.
              You might want to write about your hopes for 2029. Maybe you feel
              like making predictions for the future. No one predicted a
              pandemic when penning their postcards in 2018.
            </p>
            <p>
              Once you've signed and sealed your letter, sit back and relax.
              Enjoy the rest of the party, and enjoy the next five years. The
              time-machine-post-box will deliver your letter to you in 2029.
            </p>
            <p>
              We strongly encourage you to chat away with other guests as you
              reflect on some of the bigger questions. At the last event, one
              guest convinced another to conceal a proposal in their letter!
            </p>
            <p>
              We will have complimentary postman’s punch, stamped tarts, and
              wax-sealed cheeses to aid you as you mull over your letter to the
              future.
            </p>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }} style={{ padding: 20 }}>
            <p
              style={{
                textAlign: "left",
                margin: 0,
                fontFamily: "arial",
                fontWeight: "bold",
                fontSize: 14,
                marginTop: 30,
              }}
            >
              THURSDAY 7TH NOVEMBER 2024
            </p>
            <p style={{ margin: 0, marginBottom: 30 }}>6:30pm - 10:30pm</p>
            <p
              style={{
                textAlign: "left",
                margin: 0,
                fontFamily: "arial",
                fontWeight: "bold",
                fontSize: 14,
              }}
            >
              Knightsbridge
            </p>
            <p style={{ margin: 0, marginBottom: 30 }}>
              Upper Hall, St Columba’s, Pont Street, SW1X 0BD
            </p>
            <Button href={"#"}>Tickets coming soon</Button>
          </Grid>
          <div
            style={{
              marginTop: 60,
              marginBottom: 30,
              width: "100%",
              textAlign: "center",
            }}
          >
            <Cobweb />
          </div>
        </Grid>
      </EventMain>
      <RetroRule />
      <Footer />
    </div>
  );
}
