import { AppProps } from "next/app";
import { ContextProvider } from "../hooks/myUseContext";
import { GlobalStyle } from "../styles/global";

import { QueryClientProvider } from "react-query";
import { queryClient } from "../services/queryClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ContextProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
