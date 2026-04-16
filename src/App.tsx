import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import Services from "./pages/Services.tsx";
import Partners from "./pages/Partners.tsx";
import FAQ from "./pages/FAQ.tsx";
import Contact from "./pages/Contact.tsx";
import Blog from "./pages/Blog.tsx";
import News from "./pages/News.tsx";
import BlogDetails from "./pages/BlogDetails.tsx";
import ProductDetails from "./pages/ProductDetails.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Navigate to="/blog" replace />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="/news/:id" element={<BlogDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
