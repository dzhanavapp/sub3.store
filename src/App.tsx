import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/Home";
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import AccountPage from "./pages/Account/Account";
import ServicePage from "./pages/Service/Service";
import ArticlePage from "./pages/Article/Article";
import { FC, useLayoutEffect } from "react";

const ScrollToTop: FC = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return <></>;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="account" element={<AccountPage />} />

          <Route path="service/:id" element={<ServicePage />} />
          <Route path="*" element={<h1>Error 404</h1>} />
        </Route>

        <Route path="article/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
