"use client"

import Image from 'next/image';
import nikeIcon from '../public/nike-icon.svg';
import Header from "../../../components/header";
import Header2 from "../../../components/header2";
import { useState } from 'react';
import Footer from "../../../components/footer";

export default function JoinUs() {
    const [selectedGender, setSelectedGender] = useState("");

    return (
        <>
            <Header />
            <Header2 />
            <div className="flex justify-center items-center h-screen mt-[8rem] px-4 md:px-0 mb-[12rem]">
                <div className="bg-white p-8 rounded-lg w-full max-w-md">
                    <div className="flex justify-center mb-1">
                        <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_32)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M68.9262 28.7725L25.8854 47.0298C22.302 48.5502 19.2874 49.3087 16.8581 49.3087C14.1248 49.3087 12.1336 48.3442 10.9108 46.4184C9.32501 43.9335 10.0182 39.9381 12.7385 35.7203C14.3536 33.2551 16.4069 30.9925 18.4079 28.828C17.9371 29.5931 13.7815 36.5083 18.3262 39.7648C19.2253 40.4187 20.5037 40.7391 22.0764 40.7391C23.3384 40.7391 24.7869 40.5332 26.3792 40.1179L68.9262 28.7725Z" fill="#111111" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_32">
                                    <rect width="78.47" height="78.47" fill="white" transform="translate(0.264648 0.264648)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold mb-4 px-12 text-center">BECOME A NIKE MEMBER</h1>
                    <p className="text-center mt-6 mb-6 p-5 text-gray-500 text-sm">
                        Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.
                    </p>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <input
                        type="text"
                        placeholder="Date of Birth"
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <p className="text-center text-sm text-gray-500 mb-4">
                        Get a Nike Member Reward every year on your Birthday.
                    </p>

                    <select
                        className="w-full p-3 border border-gray-300 rounded-md mb-4 text-gray-500 mt-2"
                        defaultValue="India"
                    >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                    </select>

                    <div className="flex justify-between items-center space-x-4 mb-4">
                        {/* Male Button */}
                        <button
                            onClick={() => setSelectedGender('Male')}
                            className={`w-[48%] h-[43px] text-gray-500 bg-white border border-gray ${selectedGender === 'Male' ? 'bg-black' : 'bg-white-300'} transition-colors duration-200`}
                        >
                            Male
                        </button>

                        {/* Female Button */}
                        <button
                            onClick={() => setSelectedGender('Female')}
                            className={`w-[48%] h-[43px] text-gray-500 bg-white border border-gray ${selectedGender === 'Female' ? 'bg-black' : 'bg-white-300'} transition-colors duration-200`}
                        >
                            Female
                        </button>
                    </div>

                    <div className="flex items-start mb-4">
                        <div className="flex items-center mr-10 mt-4">
                            <input type="checkbox" className="mr-2 bg-black w-6 h-6 border-2 border-black rounded-sm checked:bg-black checked:border-black" />
                            <span className="text-[12px] text-gray-500">
                                Sign up for emails to get updates from Nike on products, offers and your Member benefits
                            </span>
                        </div>
                    </div>

                    <p className="text-center mt-6 mb-6 p-5 text-gray-500 text-[12px]">
                        By creating an account, you agree to Nike's <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use.</span>
                    </p>

                    <button className="w-full h-[40px] bg-black text-white py-3 px-4 rounded-md mb-4">
                        JOIN US
                    </button>

                    <div className="text-center mt-4">
                        <span>Already a Member? </span>
                        <a href="#" className="text-black-800 underline">
                            Sign In.
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
