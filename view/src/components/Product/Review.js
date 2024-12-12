import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReviewItem from "./ReviewItem";
import apiService from "../../services/api";
import { showToast } from "../../helper/showToast";

const Review = (props) => {
  const auth = useSelector((state) => state.auth);

  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ text: "", rating: 0 });

  useEffect(() => {
    setReviews(
      props.feedbacks.map((feedback) => ({
        name: "Member " + feedback.memberId,
        text: feedback.comment,
        rating: feedback.rating,
      }))
    );
  }, [props.feedbacks]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!auth.isAuthenticated) {
      showToast.error("Bạn cần đăng nhập để đánh giá sản phẩm");
      return;
    }
    console.log({
      memberId: auth.id,
      comment: newReview.text,
      rating: newReview.rating,
      productId: props.productId,
    });
    apiService
      .createFeedback({
        memberId: auth.id,
        comment: newReview.text,
        rating: newReview.rating,
        productId: props.productId,
      })
      .then((res) => {
        console.log(res);
        if (res?.data?.message === "Feedback created") {
          showToast.success("Tạo đánh giá thành công");
          setReviews([
            ...reviews,
            {
              name: "Bạn",
              text: newReview.text,
              rating: newReview.rating,
            },
          ]);
        } else {
          showToast.error("Tạo đánh giá thất bại");
        }
      });
    setNewReview({ text: "", rating: 0 });
  };

  return (
    <div className="my-16 bg-white rounded-xl shadow-lg p-8 lg:max-w-7xl max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 border-b pb-4">
        Đánh giá sản phẩm ({reviews.length})
      </h3>
      <div className="mt-6 space-y-6">
        {reviews.map((review, index) => (
          <ReviewItem key={index} {...review} />
        ))}
        <form onSubmit={handleSubmit} className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Viết đánh giá của bạn</h4>
          <textarea
            name="text"
            value={newReview.text}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm..."
            rows="4"
            required
          />
          <div className="flex items-center mt-4">
            <label className="font-medium mr-4">Đánh giá:</label>
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num} sao
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
          >
            Gửi đánh giá
          </button>
        </form>
      </div>
    </div>
  );
};

export default Review;
