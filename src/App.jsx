import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BooksPage from "./pages/BooksPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import QuotesPage from "./pages/QuotesPage";
import Navigation from "./components/Navigation";

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/books" element={<BooksPage />} />
      <Route path="/books/:id" element={<BookDetailsPage />} />
      <Route path="/quotes" element={<QuotesPage />} />
    </Routes>
  </Router>
);

export default App;
