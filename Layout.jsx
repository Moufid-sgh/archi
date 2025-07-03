import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "./src/components/ScrollToTop";
import useSmoothScroll from "./src/components/SmoothScroll ";
import Footer from "./src/components/Footer";
import Navbar from "./src/components/Navbar";
import Preloader from "./src/components/Preloader";
import GoToTopBtn from "./src/components/GoToTopBtn";

const Layout = () => {

  useSmoothScroll();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";


  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* <Preloader /> */}
      <main className="relative Comfortaa page">
        <ScrollToTop />
        <GoToTopBtn />  
        <Navbar />
        {isLoading && (
          <div className="flex items-center justify-center min-h-screen">
            <p className="loader"></p>
          </div>
        )}
            <div className=" page">
              <Outlet />
            </div>
        <Footer />
      </main>
    </div>
  );
};

export default Layout;