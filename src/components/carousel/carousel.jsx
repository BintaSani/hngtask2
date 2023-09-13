import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
//import 'slick-ca'
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';
import Movies from './movies';
import { MovieArray } from '../utils/utils';

const CarouselPage = () => {
    

	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		autoplaySpeed: 3000,
		vertical: true,
		dotsClass: 'slick-dots',
		cssEase: 'linear',
		appendDots: dots => (
			<div
			  style={{
				display: "block",
				width: "3%",
				marginLeft: "93%",
			  }}
			>
			  <ul className='list' > {dots} </ul>
			</div>
		),
		customPaging: i => (
			<div
			  style={{
				display: "block",
				transition: "ease-in-out",
				
			  }}
			>
			  {i + 1}
			</div>
		  )
	

	};
	return (
		<>
			<div className="img-slider">
				<Slider {...settings}>
					{MovieArray.filter((movie,idx) => idx < 5).map((movie) => (
						<div key={movie.id}>
							<Movies src={movie.id} movie={movie} />
						</div>
					))}
				</Slider>
			</div>
            
		</>
	)
}




export default CarouselPage;
