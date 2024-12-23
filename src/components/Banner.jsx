import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
	const swiperRef = useRef(null);

	const slides = [
		{
			title: "Explore Unique Crafts",
			description: "Handcrafted with love by artisans worldwide",
			imgUrl: "https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/58ba3776-0c42-408e-ad5a-10d5e5a16aaa/_6bb838fb-7b3c-477a-88de-2d94d9d49c37.jpeg",
		},
		{
			title: "Discover Beautiful Art",
			description: "Celebrate creativity and craftsmanship",
			imgUrl: "https://johndyergallery.com/cdn/shop/articles/sunset-painting-john-dyer-gallery_1600x.jpg?v=1687691469",
		},
		{
			title: "Support Local Artisans",
			description: "Empowering creativity and sustainability",
			imgUrl: "https://media.licdn.com/dms/image/D5612AQGy-MNpml9r2w/article-cover_image-shrink_600_2000/0/1689236191195?e=2147483647&v=beta&t=GYh4d5uao6PW2aKlh2hGDIEJOIvxOCQjHf_xuL2PmpI",
		},
		{
			title: "Create Your Masterpiece",
			description: "Savor Every Moment with Food Connect",
			imgUrl: "https://creatingamasterpiece.com/wp-content/uploads/2020/11/website-frontpage-small-scaled.jpg",
		},
	];

	return (
		<div className="w-full min-h-screen">
			<Swiper
				loop={true}
				modules={[Autoplay, Navigation]}
				speed={4000}
				autoplay={{ delay: 1000, disableOnInteraction: false }}
				className="mySwiper w-full h-full"
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				navigation
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index + 1}>
						<div
							id={`slide-${index + 1}`}
							className={`home-slide slide-${
								index + 1
							} bg-no-repeat bg-cover bg-center`}
							style={{ backgroundImage: `url(${slide.imgUrl})` }}
						>
							<div className="slide-content w-full min-h-screen text-white flex flex-col items-center justify-center">
								<div
									className="absolute inset-0 bg-black opacity-80"
									style={{
										background: "rgb(0,0,0,0.5)",
										backgroundImage:
											"radial-gradient(circle, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.9) 97%, rgb(12,12,14) 100%)",
									}}
								></div>
								<div className="relative text-center bg-black bg-opacity-40 p-8">
									<h2 className="text-3xl md:text-6xl font-medium mb-2">
										{slide.title}
									</h2>
									<p className="text-xl md:text-2xl font-light">
										{slide.description}
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Banner;
