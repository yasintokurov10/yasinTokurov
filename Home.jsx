import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import "../Home/Home.css";
const Home = () => {
  const blogs = [
    {
      title: "iPhone 14 Pro Max",
      image:
        "https://redstore.am/uploads/shop/products/large/554ff1f436bf704a4406559509f465fc.jpg",
      price: "175",
      id: 1,
    },
    {
      title: "iPhone 14 Pro",
      image:
        "https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Pro-Pro%20Max/1-500x500.jpg",
      price: "295",
      id: 2,
    },
    {
      title: "iPhone 14 Plus",
      image:
        "https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Plus/2-500x500.jpg",
      price: "150",
      id: 3,
    },
    {
      title: "iPhone 14",
      image:
        "https://login.kg/image/cache/catalog/new/Phones/Apple/iPhone%2014/Plus/1-500x500.jpg",
      price: "200",
      id: 4,
    },
  ];

  return (
    <div>
      <h1 className="home-h1">Выберите свой iPhone</h1>
      <p className="home-p">Сравните все модели iPhone</p>
      <div className="d-flex justify-content-evenly container mt-5 p-0">
        {blogs.map((item) => (
          <BlogCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
