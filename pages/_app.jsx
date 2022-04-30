import '../styles/globals.css';
import '../styles/Carousel.css';
import '../styles/programmes.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ITEMS } from '../shared/ProgrammesItems';
require('../styles/profile.css');


function MyApp({ Component, pageProps }) {
  return(
    <Component {...pageProps} items={ITEMS} />
  );
   
}

export default MyApp;
