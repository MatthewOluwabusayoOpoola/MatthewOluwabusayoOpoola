import SEO from "@/components/landing/SEO";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SEO />
      <div className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}
