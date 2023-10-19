import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

interface Product {
  _id: string;
  title: string;
  image: string;
  price: number;
  priceOld: number;
  description: string;
  size: string;
  wording: string;
  note: string;
  use: string;
}

const Collapse: React.FC = () => {
  const [showSizeContent, setShowSizeContent] = useState(false);
  const [showWordingContent, setShowWordingContent] = useState(false);
  const [showUseContent, setShowUseContent] = useState(false);
  const [showNoteContent, setShowNoteContent] = useState(false);

  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  const toggleSizeContent = () => {
    setShowSizeContent(!showSizeContent);
  };

  const toggleWordingContent = () => {
    setShowWordingContent(!showWordingContent);
  };

  const toggleUseContent = () => {
    setShowUseContent(!showUseContent);
  };

  const toggleNoteContent = () => {
    setShowNoteContent(!showNoteContent);
  };

  // Fetch product data when slug changes
  useEffect(() => {
    fetch(`https://api-glory365.onrender.com/api/v1/product/get-detail-product?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy sản phẩm từ API", error);
      });
  }, [slug]);

  return (
    <>
      <div onClick={toggleSizeContent} className="p-4 pb-3 border cursor-pointer">
        <div className="uppercase font-semibold flex justify-between">
          <div>SIZE</div>
          <div className="text-lg leading-3">{showSizeContent ? "-" : "+"}</div>
        </div>
        <div
          className="pt-2 overflow-hidden text-sm"
          style={{
            maxHeight: showSizeContent ? "1000px" : "0",
            opacity: showSizeContent ? "1" : "0",
            transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        >
          {product ? product.size : "Loading..."}
        </div>
      </div>

      <div onClick={toggleWordingContent} className="p-4 pb-3 border cursor-pointer">
        <div className="uppercase font-semibold flex justify-between">
          <div>CÁCH DÙNG</div>
          <div className="text-lg leading-3">{showWordingContent ? "-" : "+"}</div>
        </div>
        <div
          className="pt-2 overflow-hidden text-sm"
          style={{
            maxHeight: showWordingContent ? "1000px" : "0",
            opacity: showWordingContent ? "1" : "0",
            transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        >
          {product ? product.wording : "Loading..."}
        </div>
      </div>

      <div onClick={toggleUseContent} className="p-4 pb-3 border cursor-pointer">
        <div className="uppercase font-semibold flex justify-between">
          <div>THÀNH PHẦN CHÍNH</div>
          <div className="text-lg leading-3">{showUseContent ? "-" : "+"}</div>
        </div>
        <div
          className="pt-2 overflow-hidden text-sm"
          style={{
            maxHeight: showUseContent ? "1000px" : "0",
            opacity: showUseContent ? "1" : "0",
            transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        >
          {product ? product.use : "Loading..."}
        </div>
      </div>

      <div onClick={toggleNoteContent} className="p-4 pb-3 border cursor-pointer">
        <div className="uppercase font-semibold flex justify-between">
          <div>LƯU Ý</div>
          <div className="text-lg leading-3">{showNoteContent ? "-" : "+"}</div>
        </div>
        <div
          className="pt-2 overflow-hidden text-sm"
          style={{
            maxHeight: showNoteContent ? "1000px" : "0",
            opacity: showNoteContent ? "1" : "0",
            transition: "max-height 0.5s ease-in-out, opacity 0.5s ease-in-out",
          }}
        >
          {product ? product.note : "Loading..."}
        </div>
      </div>
    </>
  );
};

export default Collapse;
