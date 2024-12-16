"use client"; // Required for client-side rendering in Next.js
import shoe1 from "../public/shoe1.png"; // Replace with your images
import './slider.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Slider() {
  const images = Array(26).fill(shoe1); // Repeating `shoe1` image for demonstration

  // Scroll the slider to the left
  const slideLeft = () => {
    let slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft -= 500; // Scroll left by 500px
    }
  };

  // Scroll the slider to the right
  const slideRight = () => {
    let slider = document.getElementById('slider');
    if (slider) {
      slider.scrollLeft += 500; // Scroll right by 500px
    }
  };

  return (
    <>
      <h1 className="ML">Best of Air Max</h1>
      <div id="mainSliderContainer">
        <div className="sliderNav">
          <button onClick={slideLeft} className="sliderButton">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <div id="slider" className="sliderDiv">
          {
            images.map((image, index) => (
              <div key={index} className="image">
                <img src={image.src} alt={`shoe ${index}`} />
                <div className="sliderContent">
                  <div className="contentAbove">
                    <h1>Nike Air Max Pulse</h1>
                    <div className="amount">₹ 13 995</div>
                  </div>
                  <p>Women's Shoes</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="sliderNav">
          <button onClick={slideRight} className="sliderButton">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </>
  );
}
