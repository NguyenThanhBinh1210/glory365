import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react"
interface Product {
  [x: string]: any;
  _id: string;
  title: string;
  image: string;
  price: number;
}
function formatCurrency(price: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
}

const ProductLinkItem: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Gửi yêu cầu API để lấy danh sách sản phẩm
    fetch(
      "https://api-glory365.onrender.com/api/v1/product/get-all-product?page=1&limit=8"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.Products);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy sản phẩm từ API", error);
      });
  }, []);
  return (
    <>
      {products.map((product) => (
        <Link to={`/cua-hang/${product.slug}`}>
          <div className="rounded-xl  overflow-hidden ">
            <img
              className="w-full h-full object-cover"
              src={product.image}
              alt="ImgBanner"
            />
          </div>
          <h3 className="uppercase text-sm font-semibold text-center pt-3">
          {product.title}
          </h3>
          <p className="text-[14px] text-center mt-2">{formatCurrency(product.price)}</p>
          <div className="flex justify-center">
            <button className="text-[#515151] leading-3 my-5 text-sm transition-all duration-200 bg-[#ebe9eb] hover:bg-[#dfdcde] rounded-full py-2 pb-3 px-3">
              Thêm vào giỏ hàng
            </button>
          </div>
        </Link>
      ))}
    </>
  );
};

export default ProductLinkItem;
