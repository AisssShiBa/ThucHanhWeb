import React from "react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-start p-4 bg-white">
      {/* Bên Trái: Logo */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold text-lg">
          HR
        </div>
        <span className="flex items-center font-extrabold text-gray-800 text-2xl tracking-tight">
          TalentFlow
        </span>
      </div>
      <div className="flex items-center justify-center ml-10 text-gray-600  ">
        <span className="cursor-pointer hover:text-blue-600 text-bold">
          Trang Chủ
        </span>
        <span className="m-2">/</span>
        <span className="cursor-pointer hover:text-blue-600 text-bold">
          Giới Thiệu
        </span>
        <span className="m-2">/</span>
        <span className="cursor-pointer hover:text-blue-600 text-bold">
          Liên Hệ
        </span>
      </div>
      <div className="ml-auto px-6 py-2 text-blue-600 cursor-pointer font-semibold border-2 border-blue-600 rounded-lg hover:bg-blue-200 transition-colors duration-300">
        Đăng nhập
      </div>
    </header>
  );
};

export default Header;
