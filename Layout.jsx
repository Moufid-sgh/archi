import { Outlet, useLocation, useNavigation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import ScrollToTop from "./src/components/ScrollToTop";
import Navbar from "./src/components/Navbar";
import useSmoothScroll from "./src/components/SmoothScroll ";
import Footer from "./src/components/Footer";


const Layout = () => {

  useSmoothScroll()

  const location = useLocation();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";


  return (
    <div className="relative min-h-screen overflow-hidden">

      <main className="Raleway text-[#091423] page">
        <ScrollToTop />
        <Navbar />
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={1200}
            unmountOnExit
            classNames="page"
          >
          {/* {isLoading && <div className="flex items-center justify-center min-h-screen"><p className="loader"></p></div>} */}
          <div className="mb-20">
            <Outlet />
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </main>
      
    </div >
  );
};

export default Layout;