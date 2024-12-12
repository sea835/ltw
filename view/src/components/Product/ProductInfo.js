import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/action/cartAction";

const ProductInfo = (props) => {
  const product = { ...props };
  const dispatch = useDispatch();
  return (
    <div className="font-sans bg-gray-50">
      <div className="p-8 lg:max-w-7xl max-w-lg mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg p-6">
          <div className="w-full lg:sticky top-0">
            <div className="overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105">
              <img
                src={props.image}
                alt="Product"
                className="w-full h-[500px] object-cover rounded-lg hover:brightness-105"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {props.productName}
              </h2>
              <div className="flex items-center gap-4">
                <p className="text-4xl font-bold text-blue-600">${props.price}</p>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Còn hàng</span>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-transparent p-6 rounded-xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Thông tin chi tiết
              </h3>
              <div className="space-y-6 text-gray-600">
                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-700">Tên sản phẩm:</span>
                    <p className="mt-1">{props.productName}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-700">Mô tả:</span>
                    <p className="mt-1 leading-relaxed">{props.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-white rounded-lg shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-medium text-gray-700">Giá bán:</span>
                    <p className="mt-1">${props.price}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
              onClick={() => dispatch(addToCart(product))}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
