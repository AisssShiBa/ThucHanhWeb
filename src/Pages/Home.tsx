import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500">
      <Header />
      <main className="flex-1 container mx-auto px-8 py-20 flex flex-col items-center justify-center">
        <h1>Chào mừng đến với Trang Chủ</h1>
        <Link to="/about-us">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About Us
          </button>
        </Link>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
