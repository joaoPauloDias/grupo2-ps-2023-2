import Header from '@/components/Header';
import Home from '@/components/sections/Home';
import Starters from '@/components/sections/Starters';
import AboutUs from '@/components/sections/AboutUs';
import SendMessage from '@/components/sections/SendMessage';
import Footer from '@/components/sections/Footer';

export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <Starters />
      <AboutUs />
      <SendMessage />
      <Footer />
    </>
  );
}
