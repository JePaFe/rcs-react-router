import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PublicLayout from "./layouts/PublicLayout";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import Inicio from "./pages/Inicio";
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/" element={<Inicio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
