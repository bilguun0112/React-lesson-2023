import { Session } from "next-auth";
import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
type PageProps = {
  // Define the shape of your pageProps here
};

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<PageProps & { session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
