import { Link } from "react-router-dom";
import Anh1 from "~/assets/images/Cover-Skin-Cycling-Blog-1024x565.png";
import Anh2 from "~/assets/images/Cover-Blog-Exosome-1024x565.jpg";
import Anh3 from "~/assets/images/Cover-Bi-quyet-da-dep-ngay-cuoi-Blog-1024x565.jpg";

const datafaces = [
  {
    slug: "giai-ma-xu-huong-duong-da-toi-gian-skin-cycling",
    img: Anh1,
    name: "GIẢI MÃ XU HƯỚNG DƯỠNG DA TỐI GIẢN – SKIN CYCLING",
  },
  {
    slug: "chong-lao-hoa-da-tuoi-40-tuong-kho-ma-de",
    img: Anh2,
    name: "GIẢI MÃ CHẤT TIẾT TẾ BÀO GỐC EXOSOME SIÊU TRẺ HÓA MỚI",
  },
  {
    slug: "bi-quyet-cham-soc-da-cho-co-dau-truoc-ngay-cuoi",
    img: Anh3,
    name: "BÍ QUYẾT CHĂM SÓC DA CHO CÔ DÂU TRƯỚC NGÀY CƯỚI",
  },
];

const BlogHomeItem = () => {
  return (
    <>
      {datafaces.map((item) => (
        <Link key={item.slug} to={`/blog/${item.slug}`}>
          <div className='rounded-xl overflow-hidden'>
            <img className='w-full h-full object-cover' src={item.img} alt='anh' />
          </div>
          <h4 className='uppercase text-sm font-semibold text-center pt-3'>{item.name}</h4>
        </Link>
      ))}
    </>
  );
}

export default BlogHomeItem;
