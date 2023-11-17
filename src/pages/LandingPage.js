import React from 'react'
import img0 from '../images/img0.jpeg'
import img2 from '../images/img2.png'
import img3 from '../images/img3.png'
import img4 from '../images/img4.jpeg'
import img5 from '../images/img5.jpeg'

export default function LandingPage() {         //Landing page for my Home page/component. Have included a new courosel feature. 
  return (
    <div className="container mx-auto">
      <div>                                     {/* Carousel for displaying images */}
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel" data-bs-interval="1600">
          <ol className="carousel-indicators">  {/* Carousel indicators */}
            <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="3"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="4"></li>
          </ol>
          <div className="carousel-inner">      {/* Carousel images & slides */}
            <div className="carousel-item active">
              <img className="d-block w-100" src={img0} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img4} alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img5} alt="Fifth slide" />
            </div>
          </div> 
          {/* Previous button/arrow */}
          <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          {/* Next button/arrow */}
          <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}