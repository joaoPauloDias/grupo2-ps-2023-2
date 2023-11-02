import Header from '../components/Header';
import HomeSection from '../components/HomeSection';

import AboutUsSection from '../components/AboutUsSection';
import SendMessage from '../components/SendMessage';
import FooterSection from '../components/FooterSection';

export default function Home() {
  return (
    <>
      <Header />
      <HomeSection />
      
      <AboutUsSection />
      <SendMessage />
      <FooterSection />
    </>
  );
}
