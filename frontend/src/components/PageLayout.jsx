import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PageLayout(props) {
  const { children } = props;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto w-full max-w-6xl flex-1 px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
}
