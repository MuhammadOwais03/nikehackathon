"use client"

import Image from 'next/image';
import Header from "../../../components/header";
import Header2 from "../../../components/header2";
import L4 from '../../../public/l4.png'
import { faChevronLeft, faChevronRight, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from "../../../components/footer";

export default function Cart() {
    return (
        <>
            <Header />
            <Header2 />
            <div className="flex flex-col items-center px-4 md:px-16 py-8">
                <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between bg-white  p-6">
                    {/* Cart Items Section */}
                    <div className="w-full md:w-3/5">
                        {/* Free Delivery Info */}
                        <div className="bg-gray-100 p-4 mb-4">
                            <h2 className="text-[15px] font-medium">
                                Free Delivery
                                <span className="block text-[15px] text-gray-500">
                                    Applies to orders of ₹14,000.00 or more. <a href="#" className="underline">View details</a>
                                </span>
                            </h2>
                        </div>

                        {/* Bag Section */}
                        <h2 className="text-[22px] font-bold mb-4">Bag</h2>

                        {/* Product Item */}
                        <div className="flex flex-wrap items-start border-b border-gray-300 py-4">
                            {/* Product Image */}
                            <div className="w-[150px] h-[150px] flex-shrink-0">
                                <Image
                                    src={L4.src}
                                    alt="Product Image"
                                    width={150}
                                    height={150}
                                    className="object-cover rounded"
                                />
                            </div>

                            {/* Product Details */}
                            <div className="flex-grow px-4 mt-4 md:mt-0">
                                <h4 className="text-[15px] font-bold">Nike Dri-FIT ADV TechKnit Ultra</h4>
                                <p className="text-[15px] text-gray-500">Men's Short-Sleeve Running Top</p>
                                <p className="text-[15px] text-gray-500">Ashen Slate/Cobalt Bliss</p>
                                <div className="flex justify-start text-[15px] text-gray-500">
                                    <span className="mr-6">Size L</span>
                                    <span>Quantity 1</span>
                                </div>
                                {/* Icons */}
                                <div className="flex space-x-4 mt-2">
                                    <button className="text-gray-500 hover:text-black">
                                        <FontAwesomeIcon icon={faHeart} className="text-black hover:text-white-500 text-[22px]" />


                                    </button>
                                    <button className="text-gray-500 hover:text-black">
                                        <FontAwesomeIcon icon={faTrash} className="text-black text-[20px]" />
                                    </button>
                                </div>
                            </div>

                            {/* Product Amount */}
                            <div className="text-right mt-4 md:mt-0">
                                <p className="text-[15px] font-semibold">MRP: ₹ 2,499.00</p>
                            </div>
                        </div>
                    </div>

                    {/* Summary Section */}
                    <div className="w-full md:w-2/5 mt-8 md:mt-0 md:pl-8">
                        <h3 className="text-[15px] font-semibold mb-4">Summary</h3>

                        <div className="flex justify-between py-2">
                            <span className="text-[15px] text-gray-500">Subtotal</span>
                            <span className="text-[15px] font-medium">₹ 2,499.00</span>
                        </div>

                        <div className="flex justify-between py-2">
                            <span className="text-[15px] text-gray-500">Estimated Delivery & Handling</span>
                            <span className="text-[15px] font-medium">Free</span>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between py-2">
                            <span className="text-[15px] font-semibold">Total</span>
                            <span className="text-[15px] font-semibold">₹ 2,499.00</span>
                        </div>

                        <hr className="my-4" />

                        <a className="w-full bg-black text-white py-3 px-4 rounded-full text-[15px]" href="/checkout">Member Checkout</a>
                    </div>
                </div>
            </div >
            <Footer/>
        </>
    );
}
