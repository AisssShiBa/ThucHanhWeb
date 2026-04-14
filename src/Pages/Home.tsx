import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500">
      <Header />
      <main className="flex-1 container mx-auto px-8 py-20 flex flex-col items-center justify-center">
        <h1>Chào mừng đến với Trang Chủ</h1>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
