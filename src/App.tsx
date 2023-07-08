import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage, BannerPage } from "./pages";
import RootLayout from "./components/common/root-layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<RootLayout />}>
          <Route index element={<BannerPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
