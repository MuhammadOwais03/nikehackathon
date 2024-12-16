"use client"

import { menData } from '../data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './styles/menSlider.css';


export default function MenSlider() {
    console.log(menData)
    const slideLeft = () => {
        let slider = document.getElementById('menSliderContent');
        if (slider) {
            slider.scrollLeft -= 500; // Adjust the scroll amount as needed
        }
    };

    const slideRight = () => {
        let slider = document.getElementById('menSliderContent');
        if (slider) {
            slider.scrollLeft += 500; // Adjust the scroll amount as needed
        }
    };

    return (
        <div id="menSlider" className="w-full overflow-hidden">
            {/* Slider Navigation Buttons */}
            <div id="btn-navigation" className="flex w-full px-4 z-10">
                <h1>Men's Shop</h1>
                <div
                    id="btn-Left"
                    onClick={slideLeft}
                    className="cursor-pointer bg-gray-200 p-2 rounded-full"
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-xl text-gray-800" />
                </div>
                <div
                    id="btn-Right"
                    onClick={slideRight}
                    className="cursor-pointer bg-gray-200 p-2 rounded-full"
                >
                    <FontAwesomeIcon icon={faChevronRight} className="text-xl text-gray-800" />
                </div>
            </div>

            

            {/* Slider Content */}
            <div
                id="menSliderContent"
                className="flex space-x-4 overflow-x-scroll scroll-smooth scrollbar-hide p-4"
            >
                {menData.map((item, index) => (
                    <div
                        key={index}
                        className="slide-card w-[300px] h-[400px] bg-white rounded-lg"
                    >
                        <img
                            src={item.img.src}
                            alt={item.name}
                            className="w-full h-[70%] object-cover rounded-md"
                        />
                        <div id='description' className="text-center m-4 flex justify-between item-center" >
                            <h1 id='name' className="text-gray-800 font-semibold">{item.name}</h1>
                            <p id="price" className="text-gray-800 font-semibold mt-2">₹ {item.price}</p>
                        </div>
                        <p className="ex text-xs text-gray-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
