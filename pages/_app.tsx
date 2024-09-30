import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/theme";
import localFont from "next/font/local";
import classnames from "classnames";

// Font files can be colocated inside of `pages`
const light = localFont({
  src: [{ path: "../public/fonts/FenulCompressedTRIAL-Semibold.otf" }],
  variable: "--font-light",
});
const medium = localFont({
  src: [{ path: "../public/fonts/BagossCondensedTRIAL-Regular.otf" }],
  variable: "--font-medium",
});
const regular = localFont({
  src: [{ path: "../public/fonts/RecklessTRIAL-Regular.otf" }],
  variable: "--font-regular",
});

export const fonts = [
  regular,
  // , light, medium
];

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <AppCacheProvider {...props}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <main className={regular.className}>
        <div className={light.className}>
          <div className={medium.className}>
            {/* <main className={classnames(fonts.map((f) => f.variable))}> */}
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </div>
        </div>
      </main>
    </AppCacheProvider>
  );
}
