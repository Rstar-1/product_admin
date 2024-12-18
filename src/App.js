import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// Components
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
// Auth Pages
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
// Other pages
import Coming from "./pages/admin/layouts/components/coming/Coming";
import Error from "./pages/error/Error";
// Pages
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Loader from "./pages/admin/layouts/components/popup/Loader";
import TextCms from "./pages/admin/layouts/components/textcms/TextCms";
import ImageCms from "./pages/admin/layouts/components/imagecms/ImageCms";
import Seo from "./pages/admin/layouts/components/seo/Seo";
import Management from "./pages/admin/layouts/components/management/Management";
import Management2 from "./pages/admin/layouts/components/management/Management2";
import Billing from "./pages/admin/layouts/components/billing/Billing";
import Review from "./pages/admin/layouts/components/review/Review";
import CMS from "./pages/admin/layouts/components/cms/CMS";
import Projects from "./pages/admin/layouts/components/projects/Projects";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-100">
        <Loader />
      </div>
    );
  }
  // Loading

  return (
    <div className="App relative">
      <div className="flex bgtertiary h-100 overflow-hidden">
        {location.pathname === "/login" ||
        location.pathname === "/register" ? null : (
          <div className="w-side md-hidden sm-hidden">
            <Sidebar />
          </div>
        )}
        <div
          className={
            location.pathname === "/login" || location.pathname === "/register"
              ? "w-full"
              : "w-route px10"
          }
        >
          {location.pathname === "/login" ||
          location.pathname === "/register" ? null : (
            <Header />
          )}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* ======================= Start-Login ======================= */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* ======================= Start-Login ======================= */}
            {/* ======================= Start-Pages ======================= */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/text-cms" element={<TextCms />} />
            <Route path="/image-cms" element={<ImageCms />} />
            <Route path="/review" element={<Review />} />
            <Route path="/gallery" element={<Management />} />
            <Route path="/service" element={<Management />} />
            <Route path="/client" element={<Management />} />
            <Route path="/event" element={<Management />} />
            <Route path="/team" element={<Management />} />
            <Route path="/faq" element={<Management />} />
            <Route path="unpublished_gallery" element={<Management2 />} />
            <Route path="unpublished_service" element={<Management2 />} />
            <Route path="unpublished_client" element={<Management2 />} />
            <Route path="unpublished_event" element={<Management2 />} />
            <Route path="unpublished_team" element={<Management2 />} />
            <Route path="unpublished_faq" element={<Management2 />} />
            <Route path="/cms" element={<CMS />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/seo" element={<Seo />} />
            {/* ======================= End-Pages ======================= */}
            {/* ======================= Start-Error ======================= */}
            <Route path="*" element={<Error />} />
            <Route path="/coming" element={<Coming />} />
            {/* ======================= End-Error ======================= */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
