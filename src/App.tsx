import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import AccountPage from "./pages/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="account" element={<AccountPage />} />

          <Route path="*" element={<h1>Error 404</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
