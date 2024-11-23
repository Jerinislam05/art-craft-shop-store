const Banner = () => {
    return (
      <div className="carousel rounded-2xl w-full">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.squarespace-cdn.com/content/v1/63dde481bbabc6724d988548/58ba3776-0c42-408e-ad5a-10d5e5a16aaa/_6bb838fb-7b3c-477a-88de-2d94d9d49c37.jpeg"
            className="w-full h-[500px] object-cover"
            alt="Slide 1"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-amber-300 font-serif bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold">Explore Unique Crafts</h2>
            <p className="mt-2 text-lg">Handcrafted with love by artisans worldwide.</p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://johndyergallery.com/cdn/shop/articles/sunset-painting-john-dyer-gallery_1600x.jpg?v=1687691469"
            className="w-full h-[500px] object-cover"
            alt="Slide 2"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-teal-500 font-serif bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold">Discover Beautiful Art</h2>
            <p className="mt-2 text-lg">Celebrate creativity and craftsmanship.</p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://media.licdn.com/dms/image/D5612AQGy-MNpml9r2w/article-cover_image-shrink_600_2000/0/1689236191195?e=2147483647&v=beta&t=GYh4d5uao6PW2aKlh2hGDIEJOIvxOCQjHf_xuL2PmpI"
            className="w-full h-[500px] object-cover"
            alt="Slide 3"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-pink-400 font-serif bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold">Support Local Artisans</h2>
            <p className="mt-2 text-lg">Empowering creativity and sustainability.</p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        {/* Slide 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://creatingamasterpiece.com/wp-content/uploads/2020/11/website-frontpage-small-scaled.jpg"
            className="w-full h-[500px] object-cover"
            alt="Slide 4"
          />
          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-lime-500 font-serif bg-black bg-opacity-50">
            <h2 className="text-4xl font-bold">Create Your Masterpiece</h2>
            <p className="mt-2 text-lg">Bring your imagination to life.</p>
          </div>
          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  