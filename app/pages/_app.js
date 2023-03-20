import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-white dark:bg-black">
      <Component {...pageProps} />
    </div>
  );
}
