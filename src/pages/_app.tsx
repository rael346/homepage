import "../styles/globals.css";
import type { AppProps } from "next/app";
import Main from "../components/layouts/Main";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
}

export default MyApp;
