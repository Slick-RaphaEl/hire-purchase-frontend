import Carousel from '../components/Carousel';
import MainBody from '../components/MainBody';
import Footer from '../components/Footer';
import MainLayout from '../components/layouts/MainLayout';

export default function Home() {
  return(
    <MainLayout>
      <Carousel />
      <MainBody/>
      <Footer/>
    </MainLayout>
  )
}
