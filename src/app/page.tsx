import Header from "../../components/header";
import Header2 from "../../components/header2";
import Hero from "../../components/hero";
import Slider from "../../components/slider";
import Feature from "../../components/features";
import MenSlider from "../../components/menSlider";
import WomenSlider from "../../components/womenSlider";
import Footer from "../../components/footer";
import shoe1 from "../../public/shoe1.png"; // Replace with your images
import esen1 from "../../public/esen1.png"
import esen2 from "../../public/esen2.png"
import esen3 from "../../public/esen3.png"
import DontMiss from "../../public/dontMiss.png";

export default function Home() {
  return (
    <>
      <Header />
      <Header2 />
      <Hero />
      <Slider />
      <Feature />

      {/* Gear Up Section */}
      <section className="px-8 flex flex-col flex-wrap justify-center items-center">
      <h1 className="text-2xl font-bold ">Gear Up</h1>
        <div className="w-full flex justify-evenly items-center flex-wrap gap-6">
          <div className="w-full md:w-[45%]">
            <MenSlider />
          </div>
          <div className="w-full md:w-[45%]">
            <WomenSlider />
          </div>
        </div>
      </section>

      {/* Don't Miss Section */}
      <section className="px-8 mt-8 px-8 flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-2xl font-bold">Don't Miss</h1>
        <div className=" flex justify-center item-center flex-col">
          <img
            src={DontMiss.src}
            alt="Don't Miss Banner"
            className="mx-auto"
            style={{
              maxWidth: "1344px",
              maxHeight: "700px",
              width: "100%",
              height: "auto",
            }}
          />

          <h1 className="text-center text-6xl font-bold mt-[7rem]">FLIGHT ESSENTIALS</h1>

          <p className="text-center mt-10">Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>
          <button className="p-4 bg-black rounded-full text-white w-[70px] h-[40px] mx-auto text-center mt-10">Shop</button>
        </div>
      </section>

      <section className="mt-8 flex flex-col flex-wrap justify-center items-center">
        <h1 className="text-2xl font-bold">The Essentials</h1>
        <div className="flex gap-8 justify-center mt-10 flex-wrap">


          <div className="relative w-[440px] h-[540px] bg-white overflow-hidden">
            <img
              src={esen1.src}
              alt="Card 1"
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-16 left-16 px-4 py-2 bg-white  rounded-full text-black">
              Men's
            </button>
          </div>


          <div className="relative w-[440px] h-[540px] bg-white overflow-hidden">
            <img
              src={esen2.src}
              alt="Card 2"
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-16 left-16 px-4 py-2 bg-white  rounded-full text-black">
              Women's
            </button>
          </div>


          <div className="relative w-[440px] h-[540px] bg-white overflow-hidden">
            <img
              src={esen3.src}
              alt="Card 3"
              className="w-full h-full object-cover"
            />

            <button className="absolute bottom-16 left-16 px-4 py-2 bg-white  rounded-full text-black">
              Kid's
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="main-links-div flex flex-wrap justify-center items-center mt-[8rem] mb-[8rem] px-[4rem]">
          
          <div className="flex flex-col mb-8 sm:mb-0 sm:mr-[4rem] lg:mr-[8rem] w-full sm:w-auto">
            <h1 className="mb-4 sm:mb-8 font-bold text-center sm:text-left">Icons</h1>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Air Force 1</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Huarache</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Air Max 90</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Air Max 95</a>
          </div>

          
          <div className="flex flex-col mb-8 sm:mb-0 sm:mr-[4rem] lg:mr-[8rem] w-full sm:w-auto">
            <h1 className="mb-4 sm:mb-8 font-bold text-center sm:text-left">Shoes</h1>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">All Shoes</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Custom Shoes</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Jordan Shoes</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Running Shoes</a>
          </div>

          
          <div className="flex flex-col mb-8 sm:mb-0 sm:mr-[4rem] lg:mr-[8rem] w-full sm:w-auto">
            <h1 className="mb-4 sm:mb-8 font-bold text-center sm:text-left">Clothing</h1>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">All Clothing</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Modest Wear</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Hoodies & Pullovers</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Shirts & Tops</a>
          </div>

          
          <div className="flex flex-col w-full sm:w-auto">
            <h1 className="mb-4 sm:mb-8 font-bold text-center sm:text-left">Kid's</h1>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Infant & Toddler Shoes</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Kids' Shoes</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Kids' Jordan Shoes</a>
            <a href="" className="text-gray-500 mb-2 text-center sm:text-left">Kids' Basketball Shoes</a>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
