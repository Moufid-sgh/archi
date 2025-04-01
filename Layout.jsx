import { Outlet, useNavigation } from "react-router-dom";
// import Footer from "./src/components/Footer";
import ScrollToTop from "./src/components/ScrollToTop";
import Navbar from "./src/components/Navbar";
import useSmoothScroll from "./src/components/SmoothScroll ";
import Footer from "./src/components/Footer";


const Layout = () => {

  useSmoothScroll()

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <main className="Raleway text-[#091423]">
      <ScrollToTop />
      <Navbar />
      {isLoading && <div className="flex items-center justify-center min-h-screen"><p className="loader"></p></div>}
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default Layout;