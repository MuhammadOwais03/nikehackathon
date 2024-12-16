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
      <section className="px-8">
        <h1 className="text-2xl font-bold mb-4 ml-[8rem]">Gear Up</h1>
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
      <section className="px-8 mt-8">
        <h1 className="text-2xl font-bold mb-4 ml-[8rem]">Don't Miss</h1>
        <div className="px-4 flex justify-center item-center flex-col">
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

      <section>
        <h1 className="text-2xl font-bold mb-4 ml-[8rem]">The Essentials</h1>
        <div className="flex space-x-4 space-y-4 justify-center mt-10 flex-wrap">


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
        <div className="main-links-div flex flex-wrap justify-center items-center mt-[8rem] mb-[8rem]">
          <div className="flex flex-col mr-[8rem]">
            <h1 className="mb-8 font-bold">Icons</h1>
            <a href="" className="text-gray-500 mb-2">Air Force 1</a>
            <a href="" className="text-gray-500 mb-2">Huarache</a>
            <a href="" className="text-gray-500 mb-2">Air Max 90</a>
            <a href="" className="text-gray-500 mb-2">Air Max 95</a>
          </div>
          <div className="flex flex-col mr-[8rem]">
            <h1 className="mb-8 font-bold">Shoes</h1>
            <a href="" className="text-gray-500 mb-2">All Shoes</a>
            <a href="" className="text-gray-500 mb-2">Custom Shoes</a>
            <a href="" className="text-gray-500 mb-2">Jordan Shoes</a>
            <a href="" className="text-gray-500 mb-2">Running Shoes</a>
          </div>
          <div className="flex flex-col mr-[8rem]">
            <h1 className="mb-8 font-bold">Clothing</h1>
            <a href="" className="text-gray-500 mb-2">All Clothing</a>
            <a href="" className="text-gray-500 mb-2">Modest Wear</a>
            <a href="" className="text-gray-500 mb-2">Hoodies & Pullovers</a>
            <a href="" className="text-gray-500 mb-2">Shirts & Tops</a>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-8 font-bold">Kid's</h1>
            <a href="" className="text-gray-500 mb-2">Infant & Toddler Shoes</a>
            <a href="" className="text-gray-500 mb-2">Kids' Shoes</a>
            <a href="" className="text-gray-500 mb-2">Kids' Jordan Shoes</a>
            <a href="" className="text-gray-500 mb-2">Kids' Basketball Shoes</a>
          </div>
        </div>
      </section>

            <Footer/>
    </>
  );
}
