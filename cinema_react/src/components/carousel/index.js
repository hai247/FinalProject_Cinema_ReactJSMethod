import React from 'react'
import './_carousel.scss'


export default function Carousel() {
  
    return (
<section className="carousel carouselTop" id="carousel">
  <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselIndicators" data-slide-to={1} />
      <li data-target="#carouselIndicators" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="./img/onward-15840276765820.jpg" className="d-block w-100"  />
        <div className="playTrailer">
          <a data-toggle="modal" data-target="#modalTrailer"><img src="./img/play-video.png"  /></a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/blood.png" className="d-block w-100"  />
        <div className="playTrailer">
          <a data-toggle="modal" data-target="#modalTrailer"><img src="./img/play-video.png"  /></a>
        </div>
      </div>
      <div className="carousel-item">
        <img src="./img/onward-15840276765820.jpg" className="d-block w-100"  />
        <div className="playTrailer">
          <a data-toggle="modal" data-target="#modalTrailer"><img src="./img/play-video.png"  /></a>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
      <span aria-hidden="true"><img src="./img/pre.png"  style={{height: 25}} /></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
      <span aria-hidden="true"><img src="./img/next.png"  style={{height: 25}} /></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  <div className="filterTool">
  </div>
</section>

    )
}
