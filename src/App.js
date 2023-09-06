import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyHero from "./components/MyHero";
import MyFooter from "./components/MyFooter";
import AboutUs from "./components/AboutUs";
import Impact from "./components/Impact";
import Faqs from "./components/Faqs";
import Roadmap from "./components/Roadmap";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ disable: "mobile", duration: 3000, once: true });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <Preloader/>
        <MyHero />
        <AboutUs />
        <Impact />
        <Roadmap/>
        <Faqs />
        <MyFooter />
      </div>
    </>
  );
}

export default App;
