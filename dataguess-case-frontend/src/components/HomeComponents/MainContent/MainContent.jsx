import { Container, Spinner } from "react-bootstrap";
import { PageButton } from "../HeaderContent/styled";
import { NewsGrid, ProductsGrid } from "./styled";
import ProductCard from "../../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeBannerTwo from "../HomeBannerTwo/HomeBannerTwo";

import HomeNews from "../HomeNews/HomeNews";

const MainContent = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  if (products.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <Spinner animation="border" />
      </div>
    );
  }
  

  return (
    <>
      <Container>
        <div className="d-flex row">
          <div className="col-md-6">
            <p>Whats new?</p>
            <h6 style={{ color: "#003459", fontSize: "24px" }}>
              Take A Look At Some Of Our Products
            </h6>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {currentUser ? (
              <PageButton className="d-none d-md-block">
                <Link to="/Product">See All Products</Link>
              </PageButton>
            ) : (
              <PageButton className="d-none d-md-block">
                <Link to="/login">Login to see more</Link>
              </PageButton>
            )}
          </div>
        </div>
        <ProductsGrid>
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        {currentUser ? (
          <PageButton className="d-block d-md-none w-100 mt-3">
            <Link to="/Product">See All Products</Link>
          </PageButton>
        ) : (
          <PageButton className="d-block d-md-none w-100  mt-3">
            <Link to="/login">Login to see more</Link>
          </PageButton>
        )}
      </Container>
      <HomeBanner />
      <Container className="mt-5">
        <div className="d-flex row">
          <div className="col-md-6">
            <p>Hard to choose right products for you?</p>
            <h6 style={{ color: "#003459", fontSize: "24px" }}>Our Products</h6>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {currentUser ? (
              <PageButton className="d-none d-md-block">
                <Link to="/Product">See All Products</Link>
              </PageButton>
            ) : (
              <PageButton className="d-none d-md-block">
                <Link to="/login">Login to see more</Link>
              </PageButton>
            )}
          </div>
        </div>
        <ProductsGrid>
          {products.slice(8, 16).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductsGrid>
        {currentUser ? (
          <PageButton className="d-block d-md-none w-100 mt-3">
            <Link to="/Product">See All Products</Link>
          </PageButton>
        ) : (
          <PageButton className="d-block d-md-none w-100  mt-3">
            <Link to="/login">Login to see more</Link>
          </PageButton>
        )}
      </Container>
      <HomeBannerTwo />
      <Container className="mt-5">
        <div className="d-flex row">
          <div className="col-md-6">
            <p>You already know?</p>
            <h6 style={{ color: "#003459", fontSize: "24px" }}>Useful Our Products Knowledge</h6>
          </div>
          <div className="col-md-6 d-flex align-items-center justify-content-end">
            {currentUser ? (
              <PageButton className="d-none d-md-block">
                <Link to="/Product">See All Products</Link>
              </PageButton>
            ) : (
              <PageButton className="d-none d-md-block">
                <Link to="/login">Login to see more</Link>
              </PageButton>
            )}
          </div>
        </div>
      <Container className="px-0">
        <NewsGrid className="gap-2" >
        <HomeNews />
        </NewsGrid>
        </Container>
        {currentUser ? (
          <PageButton className="d-block d-md-none w-100 mt-3">
            <Link to="/Product">See All Products</Link>
          </PageButton>
        ) : (
          <PageButton className="d-block d-md-none w-100  mt-3">
            <Link to="/login">Login to see more</Link>
          </PageButton>
        )}
      </Container>
    </>
  );
};

export default MainContent;
