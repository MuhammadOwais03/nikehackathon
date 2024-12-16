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
            <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8 ">
                <div className="bg-white p-6 sm:p-8  w-full max-w-md ">
                    <div className="flex justify-center mb-6">
                        <svg width="64" height="64" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-center">
                        Your Account for Everything <br /> Nike
                    </h1>
                    <input
                        type="email"
                        placeholder="Email address"
                        className="w-full h-10 sm:h-12 p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-10 sm:h-12 p-3 border border-gray-300 rounded-md mb-4"
                    />
                    <div className="flex flex-wrap justify-between items-center mb-4">
                        <div className="flex items-center mb-2 sm:mb-0">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm">Keep me signed in</span>
                        </div>
                        <a href="#" className="text-sm text-gray-400 hover:underline">
                            Forgotten your password?
                        </a>
                    </div>
                    <p className="text-center text-xs sm:text-sm text-gray-500 mb-6">
                        By logging in, you agree to Nike's <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Use.</span>
                    </p>
                    <button className="w-full h-10 sm:h-12 bg-black text-white py-2 px-4 rounded-md mb-4">
                        SIGN IN
                    </button>
                    <div className="text-center">
                        <span>Not a Member? </span>
                        <a href="#" className="text-black underline">
                            Join Us.
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
