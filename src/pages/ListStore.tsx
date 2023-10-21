import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductLinkItemList from "~/components/Product/ProductLinkItemList";
interface Category {
  [x: string]: any;
  _id: string;
  nameCategory: string;
}
const ListStore = () => {
  const [category, setCategores] = useState<Category[]>([]);
  useEffect(() => {
    fetch("https://api-glory365.onrender.com/api/v1/category/get-category")
      .then((response) => response.json())
      .then((data) => {
        setCategores(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy sản phẩm từ API", error);
      });
  }, []);
  const navigate = useNavigate();
  return (
    <div className="pb-10 border-b">
      <div className="px-5 pt-10 md:px-3 lg:px-3 grid grid-cols-5 gap-x-8 md:max-w-[1180px] mx-auto">
        <div className="col-span-5 lg:col-span-1">
          <div className="mb-6">
            <h3 className="uppercase text-[14.6px] font-semibold mb-5">
              DANH MỤC SẢN PHẨM
            </h3>
            <ul className="flex flex-col gap-y-3 text-[13.6px] text-[rgba(0,0,0,0.79)]">
              {category.map((itemLi, indexLi) => (
                <li key={indexLi}>
                  <Link
                    to={`/danh-muc/${itemLi.slugCategory}`}
                    onClick={() => navigate(`/danh-muc/${itemLi.slugCategory}`)}
                  >
                    {itemLi.nameCategory}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ProductLinkItemList />
      </div>
    </div>
  );
};

export default ListStore;
