import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import "./BooksViewStyle.css";
import Livro from "../../assets/livro.png";
import { BooksData } from "../../app/BooksData";
import { useNavigate } from "react-router-dom";

export function BooksView() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <h1>Livros</h1>
      <div className="books">
        {BooksData.map((book) => (
          <div
            className="book-item"
            key={book.id}
            onClick={() => {
              navigate(`/book-info/${book.title}`, { state: { book } });
            }}
          >
            <img src={book.image} alt={book.title} title={book.title} />
            <div className="book-information">
              <div className="book-title">Títudo {book.title}</div>
              <div className="book-author">Autor {book.author}</div>
              <div className="book-price">Valor médio US$ {book.price}</div>
              <div className="book-assessment">
                {" "}
                Avaliação
                <div>
                  <FontAwesomeIcon icon={faStar} size="1x" color="gold" />{" "}
                  <FontAwesomeIcon icon={faStar} size="1x" color="gold" />{" "}
                  <FontAwesomeIcon icon={faStar} size="1x" color="gold" />{" "}
                  <FontAwesomeIcon icon={faStar} size="1x" color="gold" />
                  <FontAwesomeIcon
                    icon={faStarHalfAlt}
                    size="1x"
                    color="gold"
                  />{" "}
                </div>
              </div>
              <div className="book-description">{book.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
