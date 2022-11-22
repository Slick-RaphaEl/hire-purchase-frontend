import '../styles/globals.css';
import '../styles/Carousel.css';
import '../styles/programmes.css';
import '../styles/signin.css';
import "../styles/admin.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ITEMS } from '../shared/ProgrammesItems';
import { SessionProvider } from "next-auth/react";
require('../styles/profile.css');


function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} items={ITEMS}/>
    </SessionProvider>
  );
   
}

export default MyApp;
