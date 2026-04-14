import Header from "../components/Header";
import Footer from "../components/Footer";
const AboutUs = () => {
  return (
    <div>
      <Header />
      <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen p-6">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full border-t-4 border-blue-600">
          <h1 className="text-4xl font-bold flex items-center justify-center text-center  bg-blue-700 rounded-2xl mb-6">
            About Me
          </h1>

          <div className="space-y-4">
            <div className="flex flex-col border-b pb-2">
              <span className="text-sm text-gray-500 font-medium">
                Họ và Tên
              </span>
              <span className="text-xl text-blue-700 font-bold">
                Trần Hoàng Đat
              </span>
            </div>

            <div className="flex flex-col border-b pb-2">
              <span className="text-sm text-gray-500 font-medium">
                Ngày sinh
              </span>
              <span className="text-xl text-blue-700 font-semibold">
                22/06/2005
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-sm text-gray-500 font-medium">
                Trường học
              </span>
              <span className="text-xl text-blue-700 font-semibold">
                PTIT HCM
                <span className="text-sm text-gray-400 ">
                  (Học viện Công nghệ Bưu chính Viễn thông)
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
