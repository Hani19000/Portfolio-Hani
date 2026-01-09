// import "./testimonials.css";
// import testimonialsCards from "./TestimonialsCards";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// function Testimonials() {
//   return (
//     <section id="testimonials">
//       <h5>Review from clients</h5>
//       <h2>Testimonials</h2>
//       <Swiper className="container testimonials__container" 
//       // install Swiper modules
//       modules={[Pagination]}
//       spaceBetween={40}
//       slidesPerView={1}
//       pagination={{ clickable: true }}
//     >
//         {testimonialsCards.map(({ avatar, name, review }, index) => {
//           return (
//             <SwiperSlide key={index} className="testimonials">
//               <div className="client__avatar">
//                 <img src={avatar} alt="" />
//               </div>
//               <h5 className="client__name">{name}</h5>
//               <div className="client__review">
//                 <small>{review}</small>
//               </div>
//             </SwiperSlide>
//           );
//         })}

//         {/*
//         <article className="testimonials">
//           <div className="client__avatar">
//             <img src={AVTR1} alt="" />
//           </div>
//           <h5 className="client__name">Client Name</h5>
//           <div className="client__review">
//             <small>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
//               quod.
//             </small>
//           </div>
//         </article> */}
//       </Swiper>
//     </section>
//   );
// }
// export default Testimonials;
