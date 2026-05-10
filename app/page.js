import Header from '@/components/header/Header';
import Footer from '@/components/footer/footer';
import Home from '@/views/Home';

export default function Page() {
  return (
    <>
      <div className="background-circle" />
      <Header />
      <Home />
      <Footer />
    </>
  );
}
