import { AppProps } from "next/app";
import { ContextProvider } from "../hooks/myUseContext";
import { GlobalStyle } from "../styles/global";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Head>
          <title>Mars explorer</title>
        </Head>
        <Component {...pageProps} />
        <GlobalStyle />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
