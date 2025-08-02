// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Context
import { CartProvider } from "./context/CartContext";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import BackToTop from "./components/BackToTop";
import NewsletterPopup from "./components/NewsletterPopup";
import ScrollProgressBar from "./components/ScrollProgressBar";

// Route Protection
import ProtectedRoute from "./routes/ProtectedRoute";
import RequireAdmin from "./components/auth/RequireAdmin";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Marketplace from "./pages/Marketplace";
import TemplateMarketplace from "./pages/TemplateMarketplace";
import Gallery from "./pages/Gallery";
import DigitalArtGallery from "./pages/DigitalArtGallery";
import DesignResources from "./pages/DesignResources";
import Resources from "./pages/Resources";
import OnlineCourses from "./pages/OnlineCourses";
import Community from "./pages/Community";
import Blog from "./pages/Blog";
import PostPage from "./pages/PostPage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Downloads from "./pages/Downloads";
import Auth from "./pages/Auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Upload from "./pages/Upload";
import ThankYou from "./pages/ThankYou";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollProgressBar />
        <ScrollToTopButton />
        <Navbar />
        <NewsletterPopup />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/template-marketplace" element={<TemplateMarketplace />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/digital-art-gallery" element={<DigitalArtGallery />} />
            <Route path="/design-resources" element={<DesignResources />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/online-courses" element={<OnlineCourses />} />
            <Route path="/community" element={<Community />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<PostPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/admin" element={<RequireAdmin><AdminDashboard /></RequireAdmin>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <BackToTop />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
