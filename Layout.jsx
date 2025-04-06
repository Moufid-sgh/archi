import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "./src/components/ScrollToTop";
import useSmoothScroll from "./src/components/SmoothScroll ";
import Footer from "./src/components/Footer";
import Navbar from "./src/components/NavBar";

const Layout = () => {

  useSmoothScroll();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";


  return (
    <div className="relative min-h-screen overflow-hidden">
      <main className="relative Raleway text-[#091423] page">
        <ScrollToTop />
        <Navbar />
        {isLoading && (
          <div className="flex items-center justify-center min-h-screen">
            <p className="loader"></p>
          </div>
        )}
            <div className="mb-20 page">
              <Outlet />
            </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;