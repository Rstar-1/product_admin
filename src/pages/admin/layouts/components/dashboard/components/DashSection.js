import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css";

const DashSection = () => {
  const images = [
    {
      image:
        "https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg",
    },
    {
      image:
        "https://cdn.prod.website-files.com/5daaade3e3e3f04da71daa8e/605c77946bd2992bb49efd7c_fashion.png",
    },
    {
      image:
        "https://designshifu.com/wp-content/uploads/2021/08/6-Interior-Design-Business-Card-Templates-banner.jpg",
    },
    {
      image:
        "https://cdn.prod.website-files.com/637289ea1a5f456992cebcab/649ca30e18e5b1f909a58dbb_free-digital-business-card-clickcard.webp",
    },
    {
      image:
        "https://img.freepik.com/free-vector/gradient-product-catalog-template_23-2149877177.jpg",
    },
    {
      image: "https://codeshaper.net/img/front-end/blog/1693134461.png",
    },
    {
      image:
        "https://cdn.dribbble.com/userupload/7394556/file/original-e3054c15427f309a1bb3f1dca10c7a75.png?resize=400x300&vertical=center",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZlaUXIWozu3xqknYB3S9nknCPGFPAEVZLA&s",
    },
    {
      image:
        "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2022/11/DM_blog_post_image_03_guetzli.jpg",
    },
  ];
  
  return (
    <div>
      <div className="grid-cols-2 gap-12">
        <div className="p20 bgprimary b-shadow rounded-5">
          <div className="flex items-center">
            <div className="w-60">
              <h2 className="fsize22 mtpx1 mbpx1 textwhite">Welcome Back</h2>
              <p className="fsize14 textwhite">Dashboard</p>
              <div className="grid-cols-2 mtpx16">
                <div>
                  <p className="fsize18 font-600 textwhite">20 +</p>
                  <p className="fsize12 textwhite">Website</p>
                </div>
                <div>
                  <p className="fsize18 font-600 textwhite">23 +</p>
                  <p className="fsize12 textwhite">App Design</p>
                </div>
              </div>
            </div>
            <div className="w-40">
              <img
                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-3.png"
                alt="dash-img"
                className="dash-img object-contain"
              />
            </div>
          </div>
        </div>
        <div className="p20 bgprimary b-shadow rounded-5">
          <div className="flex items-center">
            <div className="w-60">
              <h2 className="fsize22 mtpx1 mbpx1 textwhite">Welcome Back</h2>
              <p className="fsize14 textwhite">Dashboard</p>
              <div className="grid-cols-2 mtpx16">
                <div>
                  <p className="fsize18 font-600 textwhite">230 +</p>
                  <p className="fsize12 textwhite">Catelouge</p>
                </div>
                <div>
                  <p className="fsize18 font-600 textwhite">230 +</p>
                  <p className="fsize12 textwhite">Digital Card</p>
                </div>
              </div>
            </div>
            <div className="w-40">
              <img
                src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/card-website-analytics-1.png"
                alt="dash-img"
                className="dash-img object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mtpx18">
        <div>
          <div className="dash-patch bgprimary px20 ptpx6 pbpx5 w-max">
            <p className="textwhite fsize13">Website</p>
          </div>
          <hr className="dash-hr" />
        </div>
        <Swiper
          grabCursor={true}
          className="mySwiper py10 px5 mtpx6"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1536: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            912: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {images.map((e) => (
            <SwiperSlide>
              <div className="bgwhite b-shadow p8 rounded-5">
                <img
                  src={e.image}
                  alt="dashsection-img"
                  className="dashsection-img object-cover rounded-5"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mtpx18">
        <div>
          <div className="dash-patch bgprimary px20 ptpx6 pbpx5 w-max">
            <p className="textwhite fsize13">Dashboard</p>
          </div>
          <hr className="dash-hr" />
        </div>
        <Swiper
          grabCursor={true}
          className="mySwiper py10 px5 mtpx6"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            1536: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2.4,
              spaceBetween: 10,
            },
            912: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            800: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
          }}
        >
          {images.map((e) => (
            <SwiperSlide>
              <div className="bgwhite b-shadow p8 rounded-5">
                <img
                  src={e.image}
                  alt="dashsection-img"
                  className="dashsection-img object-cover rounded-5"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DashSection;
