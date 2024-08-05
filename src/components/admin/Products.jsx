import { useEffect, useState } from "react";
import "./Products.css";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

const Products = () => {
  const [products, setProducts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const getData = async () => {
    const api = "https://dummyjson.com/products?limit=100";
    const res = await fetch(api);
    const data = await res.json();

    if (data.products) {
      setProducts(data.products);
    }
  };

  const nextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(products.length / itemsPerPage))
    );
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section className="products">
        <table className="products-table">
          <thead>
            <tr>
              <td>Name</td>
              <td>Image</td>
              <td>Description</td>
              <td>Price</td>
            </tr>
          </thead>
          <tbody>
            {products
              .slice(
                itemsPerPage * currentPage - itemsPerPage,
                itemsPerPage * currentPage
              )
              .map((prod, id) => {
                return (
                  <tr key={id}>
                    <td>{prod.title}</td>
                    <td>
                      <img src={prod.thumbnail} alt={prod.description} />
                    </td>
                    <td>{prod.description}</td>
                    <td>${prod.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <div className="pagination">
          <div className="left-arrow-button " onClick={prevPage}>
            <CircleChevronLeft />
          </div>
          {Array.from({
            length: Math.ceil(products.length / itemsPerPage),
          }).map((_, index) => {
            return (
              <span
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                }}
                className={`pagination-button ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                {index + 1}
              </span>
            );
          })}
          <div className="right-arrow-button " onClick={nextPage}>
            <CircleChevronRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
