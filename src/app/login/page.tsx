import Image from 'next/image'
import nikeIcon from '../public/nike-icon.svg'
import Header from "../../../components/header";
import Header2 from "../../../components/header2";
import Footer from "../../../components/footer";

export default function LoginPage() {
    return (
        <>
            <Header />
            <Header2 />
            <div className="flex justify-center items-center h-screen">
                <div className="bg-white p-8 rounded-lg  w-full max-w-md">
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
                    <h1 className="text-3xl font-bold mb-4 px-12 text-center">Your Account for Everything <br /> Nike</h1>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-[324px] h-[40px] p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-[324px] h-[40px] p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <div className="flex items-center mb-4">
                        <div className="flex items-center mr-10">

                            <input type="checkbox" className="mr-2 p-2 bg-black" />
                            <span>Keep me signed in</span>
                        </div>
                        <div className="text-center">
                            <a href="#" className="text-gray-400 hover:underline">
                                Forgotten your password?
                            </a>
                        </div>
                    </div>
                    <p className="text-center mt-6 mb-6 p-5 text-gray-500">
                        By logging in, you agree to Nike's <span className='underline' >Privacy Policy</span> and <span className='underline' >Terms of Use.</span>
                    </p>

                    <button className="w-[324px] h-[40px] bg-black text-white py-3 px-4 rounded-md mb-4">
                        SIGN IN
                    </button>

                    <div className="text-center mt-4">
                        <span>Not a Member? </span>
                        <a href="#" className="text-black-800  underline">
                            Join Us.
                        </a>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}