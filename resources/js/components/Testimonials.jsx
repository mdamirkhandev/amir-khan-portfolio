import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Testimonials = ({ testimonials }) => {
    return (
        <section id="testimonials" className="testimonials section">
            <div className="container section-title" data-aos="fade-up">
                <h2>Testimonials</h2>
                <div>
                    <span>Check my</span>{" "}
                    <span className="description-title">Testimonials</span>
                </div>
            </div>

            <div className="container" data-aos="fade-up" data-aos-delay="100">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                >
                    {testimonials &&
                        testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>{testimonial.text}</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                    <img
                                        src={`storage/${testimonial.img}`}
                                        className="testimonial-img"
                                        alt={testimonial.name}
                                    />
                                    <h3>{testimonial.name}</h3>
                                    <h4>{testimonial.role}</h4>
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
