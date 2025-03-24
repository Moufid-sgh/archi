import { Outlet, useNavigation } from "react-router-dom";
// import Footer from "./src/components/Footer";
import ScrollToTop from "./src/components/ScrollToTop";
import Navbar from "./src/components/NavBar";
import useSmoothScroll from "./src/components/SmoothScroll ";


const Layout = () => {

  useSmoothScroll()

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {isLoading && <div className="flex items-center justify-center min-h-screen"><p className="loader"></p></div>}
      <div className="content arapey ">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;