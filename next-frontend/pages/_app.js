import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import "@/public/assets/styles/main.min.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <nav className="sticky top-0 bg-blue-600 p-5 z-40 drop-shadow shadow-blue-600">
        <h1 className="text-white text-4xl text-center">Sticky Nav Bar</h1>
      </nav> */}
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
