import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import MegaIdeaHack from "./pages/MegaIdeaHack";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import Homepage from "./pages/Homepage";
import Resources from "./pages/Resources";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/events":
        title = "";
        metaDescription = "";
        break;
      case "/aboutus":
        title = "";
        metaDescription = "";
        break;
      case "/homepage":
        title = "";
        metaDescription = "";
        break;
      case "/resources":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<MegaIdeaHack />} />
      <Route path="/events" element={<Events />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/resources" element={<Resources />} />
    </Routes>
  );
}
export default App;
