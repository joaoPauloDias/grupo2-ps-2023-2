import Header from '@/components/Header';
import Home from '@/components/sections/Home';
import Starters from '@/components/sections/Starters';
export default function Index() {
  return (
    <>
      <Header />
      <Home />
      <Starters type="AGUA" />
    </>
  );
}
