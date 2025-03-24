import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthorsView } from "../views/AuthorsView/AuthorsView";
import { BooksView } from "../views/BooksView/BooksView";
import { PageInitView } from "../views/PageInitView/PageInitView";
import { BookInfoView } from "../views/BookInfoView/BookInfoView";
import { AuthorInfoView } from "../views/AuthorInfoView/AuthorInfoView";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageInitView />}>
          <Route index element={<BooksView />} />
          <Route path="/authors" element={<AuthorsView />} />
          <Route path="/book-info/:bookId" element={<BookInfoView />} />
          <Route path="/author-info/:authorId" element={<AuthorInfoView />} />
          {/* <Route path="/genrers/:nameGenrer" element={<GenrersView />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

console.log("Routes component rendered");
