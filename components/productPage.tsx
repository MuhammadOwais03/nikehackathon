// pages/index.js

import L1 from '../public/l1.png'
import L2 from '../public/l2.png'
import L3 from '../public/l3.png'
import L4 from '../public/l4.png'
import L5 from '../public/l5.png'
import L6 from '../public/l6.png'
import L7 from '../public/l7.png'
import L8 from '../public/l8.jpeg'
import L9 from '../public/l9.png'
import w1 from '../public/w1.png'
import w2 from '../public/w2.png'
import m1 from '../public/m1.png'
import m2 from '../public/m2.png'

import './st.css'

export default function ProductPage() {
    return (
        <div className="flex justify-between" id='mainProductAll' >
            <div className="flex w-[260px] h-[849px] px-4 overflow-y-auto self-start" id='filter'>
                {/* Header */}
                <div className="flex justify-between items-center mb-12">
                    <h3 className="text-2xl font-bold" id="new-head">New (500)</h3>
                </div>

                {/* List of Items */}
                <div className="mt-4 mb-12" id='filterOptions'>
                    <ul className="mt-2 space-y-1">
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Shoes</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Sports Bras</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Tops & T-Shirts</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Hoodies & Sweatshirts</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Jackets</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Trousers & Tights</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Shorts</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Tracksuits</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Jumpsuits & Rompers</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Skirts & Dresses</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Socks</a>
                        </li>
                        <li>
                            <a href="#" className="text-black-600 font-bold hover:underline">Accessories & Equipment</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-4" />

                {/* Gender */}
                <div className="mt-8 mb-12">
                    <h4 className="font-medium">Gender</h4>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li className="flex items-center">
                            <input type="checkbox" id="men" className="mr-2" />
                            <label htmlFor="men" className="text-gray-600">Men</label>
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" id="women" className="mr-2" />
                            <label htmlFor="women" className="text-gray-600">Women</label>
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" id="unisex" className="mr-2" />
                            <label htmlFor="unisex" className="text-gray-600">Unisex</label>
                        </li>
                    </ul>
                </div>
                <hr className="my-4" />

                {/* Kids */}
                <div className="mt-8 mb-12">
                    <h4 className="font-medium">Kids</h4>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li className="flex items-center">
                            <input type="checkbox" id="boys" className="mr-2" />
                            <label htmlFor="boys" className="text-gray-600">Boys</label>
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" id="girls" className="mr-2" />
                            <label htmlFor="girls" className="text-gray-600">Girls</label>
                        </li>
                    </ul>
                </div>
                <hr className="my-4" />

                {/* Shop By Price */}
                <div className="mt-8">
                    <h4 className="font-medium">Shop By Price</h4>
                    <ul className="ml-4 mt-2 space-y-2">
                        <li className="flex items-center">
                            <input type="checkbox" id="under-2500" className="mr-2" />
                            <label htmlFor="under-2500" className="text-gray-600">Under ₹2,500.00</label>
                        </li>
                        <li className="flex items-center">
                            <input type="checkbox" id="2501-above" className="mr-2" />
                            <label htmlFor="2501-above" className="text-gray-600">₹2,501.00 - ...</label>
                        </li>
                    </ul>
                </div>
            </div>





            <div id="allProductMainDiv" className="flex flex-wrap gap-6 justify-center w-full">
                

                {/* Products Section */}
                {[
                    {
                        image: L1.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: m1.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: m2.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: w1.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: w2.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: L6.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: L7.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: L8.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    {
                        image: L9.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 Mid '07",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 10,795.00",
                    },
                    
                    {
                        image: L2.src,
                        tag: "Just In",
                        name: "Nike Court Vision Low Next Nature",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 4,995.00",
                    },
                    {
                        image: L4.src,
                        tag: "Just In",
                        name: "Nike Air Force 1 PLT.AF.ORM",
                        category: "Women's Shoes",
                        color: "1 Colour",
                        price: "₹ 8,695.00",
                    },
                    {
                        image: L4.src,
                        tag: "Just In",
                        name: "Nike Air Max White",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 9,995.00",
                    },
                    {
                        image: L5.src,
                        tag: "Just In",
                        name: "Nike Air Max White",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 9,995.00",
                    },
                    {
                        image: L1.src,
                        tag: "Just In",
                        name: "Nike Air Max White",
                        category: "Men's Shoes",
                        color: "1 Colour",
                        price: "₹ 9,995.00",
                    },
                ].map((item, index) => (
                    <a
                        key={index}
                        className="flex flex-col bg-white  p-4 w-[348px] h-[533px] hover:shadow-xl cursor-pointer"
                        id="productCard"
                        href='/description'

                    >
                        {/* Product Image */}
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-[348px] h-[348px] object-cover rounded-md"
                            width="348px"
                            height="348px"
                            
                        />
                        {/* Product Details */}
                        <div className="flex flex-col mt-4 space-y-2">
                            <p className="text-orange-500 text-sm font-bold">{item.tag}</p>
                            <h3 className="text-lg font-semibold">{item.name}</h3>
                            <p className="text-gray-600">{item.category}</p>
                            <p className="text-gray-500 text-sm">{item.color}</p>
                            <p className="text-black font-bold">MRP: {item.price}</p>
                        </div>
                    </a>
                ))}
            </div>



        </div>
    );
}
