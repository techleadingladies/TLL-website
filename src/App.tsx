import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TechLeadingLadies from "./pages/TechLeadingLadies";
import About from "./pages/About";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";
import Meetup from "./pages/Meetup";
import CodeOfConduct from "./pages/CodeOfConduct";
import SpeakerForm from "./pages/SpeakerForm";
import FAQ from "./pages/FAQ";
import MentoringProgram from "./pages/MentoringProgram";
import SlackCommunity from "./pages/SlackCommunity";
import ShareYourStory from "./pages/ShareYourStory";
import LeadershipTraining from "./pages/LeadershipTraining";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AuthorProfile from "./pages/AuthorProfile";

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<TechLeadingLadies />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meetup" element={<Meetup />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/speaker-details-form" element={<SpeakerForm />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/mentoring-program" element={<MentoringProgram />} />
          <Route path="/slack-community" element={<SlackCommunity />} />
          <Route path="/share-your-story" element={<ShareYourStory />} />
          <Route path="/leadership-training" element={<LeadershipTraining />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/author/:authorSlug" element={<AuthorProfile />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

export default App;
