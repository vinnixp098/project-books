import "./BookInfoViewStyle.css";
import { useLocation } from "react-router-dom";

export function BookInfoView() {
  const location = useLocation();
  const book = location.state?.book;

  return (
    <div className="book">
      <div className="book-container">
        <div className="book-image">
          <img src={book?.image} alt={book?.title} title={book?.title}/>
        </div>
        <div className="book-info">
        <h2>Título</h2>
          <h3>{book?.title}</h3>
          <div className="book-sinopse">
            <h3>Autor</h3>
            {book?.author}
          </div>
					<div className="book-sinopse">
            <h3>Ano da publicação</h3>
            {book?.published}
          </div>
          <div className="book-sinopse">
            <h3>Preço médio</h3>
            UR$ {book?.price}
          </div>
          <div className="book-sinopse">
            <h3>Onde comprar</h3>
            <div className="books-sale">
              <a
                href={book.buyLinks.amazon.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={book.buyLinks.amazon.icon} alt="Amazon" />
              </a>
              <a
                href={book.buyLinks.saraiva.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={book.buyLinks.saraiva.icon} alt="Saraiva" />
              </a>
              <a
                href={book.buyLinks.cultura?.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={book.buyLinks.cultura?.icon} alt="Cultura" />
              </a>
            </div>
          </div>
          <div className="book-sinopse">
            <h3>Sinopse</h3>
            {book?.sinopse}
          </div>
        </div>
      </div>
    </div>
  );
}
