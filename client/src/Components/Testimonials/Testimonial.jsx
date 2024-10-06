import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper React components
import "swiper/css"; // Core Swiper CSS
import "swiper/css/pagination"; // Pagination CSS styles
import { Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

const Testimonial = () => {
  const swiperRef = useRef(null);
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

    return (
      <>
        <div className="section-header" id="testimonial">
          <h2 className="title text-center">Testimonial</h2>
          <p className="justify-content-center d-flex">
            <strong>What My Clients Says About Me</strong>
          </p>
        </div>
        <div className="testimonials rounded">
          <div className="container">
            <div className="testimonial-container position-relative">
              <Swiper
                ref={swiperRef}
                grabCursor={true}
                spaceBetween={30}
                navigation={false}
                pagination={{ clickable: true }} // Enable pagination
                breakpoints={{
                  767: {
                    slidesPerView: 2,
                  },
                }}
                modules={[Pagination, Navigation]} // Correctly register Pagination module
                className="js-testimonials-slider"
              >
                <SwiperSlide className="testimonials-item">
                  <div className="info">
                    <img
                      src="./pexels-george-dolgikh-551816-1310482.jpg"
                      alt="Tom Oginga"
                      className="img-fluid img"
                    />
                    <div className="text-box">
                      <h1 className="name">Emily Carter</h1>
                      <span className="job">Startup Founder</span>
                    </div>
                  </div>
                  <p>
                    Efficient and adaptable, capable of handling full-stack
                    tasks from concept to deployment. An invaluable contributor.
                  </p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="testimonials-item">
                  <div className="info">
                    <img
                      src="./pexels-estoymhrb-17162081.jpg"
                      alt="Tom Oginga"
                      className="img-fluid img"
                    />
                    <div className="text-box">
                      <h1 className="name">James Anderson</h1>
                      <span className="job">Database Administrator</span>
                    </div>
                  </div>
                  <p>
                    Impressive database management skills, ensuring data
                    integrity and performance. Highly reliable and precise.
                  </p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="testimonials-item">
                  <div className="info">
                    <img
                      src="./pexels-matheusferrero-1937791.jpg"
                      alt="Tom Oginga"
                      className="img-fluid img"
                    />
                    <div className="text-box">
                      <h1 className="name">Michael Nguyen</h1>
                      <span className="job"> Project Manager</span>
                    </div>
                  </div>
                  <p>
                    A highly skilled full-stack developer who delivers on time
                    and exceeds expectations. A great asset to any team!
                  </p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="testimonials-item">
                  <div className="info">
                    <img
                      src="./pexels-estoymhrb-17113239.jpg"
                      alt="Tom Oginga"
                      className="img-fluid img"
                    />
                    <div className="text-box">
                      <h1 className="name">Charles Muriuki</h1>
                      <span className="job">DevOps Engineer</span>
                    </div>
                  </div>
                  <p>
                    Has a deep understanding of full-stack development and
                    database optimization, making deployments smooth and
                    efficient.
                  </p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="testimonials-item">
                  <div className="info">
                    <img
                      src="./pexels-gabriel-soares-58866945-15340589.jpg"
                      alt="Tom Oginga"
                      className="img-fluid img"
                    />
                    <div className="text-box">
                      <h1 className="name">Alex Patel</h1>
                      <span className="job">UX/UI Designer</span>
                    </div>
                  </div>
                  <p>
                    A developer who understands the importance of user
                    experience, making collaboration smooth and effective.
                  </p>
                  <div className="rating">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="swiper-button-next" onClick={handleNext}></div>
              <div className="swiper-button-prev" onClick={handlePrev}></div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Testimonial;
