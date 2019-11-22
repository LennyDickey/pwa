import React from "react";
import "./styles.css"


const Slideshow = () => {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="/data/img/slide4.jpg"
            alt="First slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/data/img/slide5.png"
            alt="Second slide"
          />
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="/data/img/slide3.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

const Home = props => {
  return (
	  <>
	<Slideshow />
	<section id="who">
	  <div class="container">
		<div class="row">
		  <div class="col-md-6">
			<h2>Sailor Merch</h2>

			<hr align="left" width="50%" />
			<p class="lead">
			  A collection of the latest Sailor Moon gifts and merchandise
			  you can buy online! Includes products such as clothes, jewelry
			  and accessories inspired by your favorite Sailor Scouts and
			  guardian cats. You won’t believe some of the Sailor Moon merch
			  we find online that will have you reaching for your wallet.
			</p>
			<button type="button" class="btn btn-who">
			  Check it Out
			</button>
		  </div>

		  <div class="col-md-6">
			<img
			  class="img-fluid"
			  src="/data/img/merchside.png" alt="fashion"
			/>
		  </div>
		</div>
	  </div>
	</section>
	</>
  );
};

export default Home;
