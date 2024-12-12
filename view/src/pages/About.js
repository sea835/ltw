import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-5xl font-bold text-center text-gray-800 mb-12 animate-fade-in">
            Về Chúng Tôi
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20 hover:transform hover:scale-[1.02] transition-all duration-300">
            <div className="relative group">
              <img
                src="https://saotruchoanganh.com/wp-content/uploads/2018/10/44247811_10155634689921671_8893516151930224640_n-770x350.jpg.webp"
                alt="Xưởng sản xuất sáo"
                className="rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-2xl shadow-xl transform transition-all duration-300 group-hover:scale-105">
                <p className="font-semibold text-lg">Thành lập từ 2010</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                Câu Chuyện Của Chúng Tôi
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Sáo Việt ra đời từ năm 2010 với niềm đam mê và tình yêu sâu sắc
                dành cho âm nhạc truyền thống Việt Nam. Chúng tôi bắt đầu từ một
                xưởng nhỏ với vài nghệ nhân tài hoa, và ngày nay đã trở thành
                một trong những thương hiệu sáo uy tín hàng đầu tại Việt Nam.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mỗi cây sáo của chúng tôi là kết tinh của kỹ thuật truyền thống
                và công nghệ hiện đại, mang đến âm thanh tinh tế và trải nghiệm
                chơi nhạc tuyệt vời cho người sử dụng.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-12 mb-20 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">
              Giá Trị Cốt Lõi
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center bg-gradient-to-b from-gray-50 to-white p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className="bg-blue-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-xl mb-4">Chất Lượng</h3>
                <p className="text-gray-600">
                  Cam kết sản xuất những cây sáo chất lượng cao nhất, đáp ứng tiêu chuẩn quốc tế.
                </p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-xl mb-4">Đổi Mới</h3>
                <p className="text-gray-600">
                  Không ngừng cải tiến và phát triển sản phẩm, kết hợp truyền thống với hiện đại.
                </p>
              </div>
              <div className="text-center bg-gray-50 p-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                <div className="bg-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-800 text-xl mb-4">Đam Mê</h3>
                <p className="text-gray-600">
                  Làm việc với tình yêu và sự tận tâm với âm nhạc, truyền cảm hứng cho thế hệ mới.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-gradient-to-br from-blue-50 via-white to-blue-50 p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">
              Hãy Đến Với Chúng Tôi
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Chúng tôi luôn chào đón bạn đến tham quan xưởng sản xuất và trải
              nghiệm các sản phẩm sáo của chúng tôi. Hãy đến và cảm nhận âm nhạc
              cùng Sáo Việt!
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 shadow-lg hover:shadow-xl">
              Đặt Lịch Tham Quan
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
