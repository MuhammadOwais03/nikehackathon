import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer className="bg-black text-gray-400 py-8 text-sm">
                {/* Footer Container */}
                <div className="container mx-auto flex flex-col md:flex-row justify-between px-8">
                    {/* Left Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 w-full">
                        {/* FIND A STORE */}
                        <div>
                            <ul className='text-[10px]'>
                                <li className="font-bold mb-2 text-white text-[10px]">FIND A STORE</li>
                                <li className="mb-1"><a href="#" className="hover:underline text-white text-[10px]">BECOME A MEMBER</a></li>
                                <li className="mb-1"><a href="#" className="hover:underline text-white text-[10px]">SIGN UP FOR EMAIL</a></li>
                                <li className="mb-1"><a href="#" className="hover:underline text-white text-[10px]">SEND US FEEDBACK</a></li>
                                <li><a href="#" className="hover:underline text-white text-[10px]">STUDENT DISCOUNTS</a></li>
                            </ul>
                        </div>

                        {/* GET HELP */}
                        <div>
                            <ul>
                                <li className="font-bold mb-2 text-white text-[10px]">GET HELP</li>
                                <li className="mb-1"><a href="#" className="hover:underline text-[10px]">Order Status</a></li>
                                <li className="mb-1"><a href="#" className="hover:underline text-[10px]">Delivery</a></li>
                                <li className="mb-1"><a href="#" className="hover:underline text-[10px]">Returns</a></li>
                                <li className="mb-1"><a href="#" className="hover:underline text-[10px]">Payment Options</a></li>
                                <li><a href="#" className="hover:underline">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* ABOUT NIKE */}
                        <div>
                            <ul>
                                <li className="font-bold mb-2 text-white text-[10px]">ABOUT NIKE</li>
                                <li className="mb-1"><a href="#" className="hover:underline text-[10px]">News</a></li>
                                <li className="mb-1"><a href="#" className="hover:underline text-[10px]">Careers</a></li>
                                <li className="mb-1"><a href="#" className="hover:underline text-[10px]">Investors</a></li>
                                <li><a href="#" className="hover:underline text-[10px]">Sustainability</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex gap-8 justify-center md:justify-end space-x-6 mt-8 md:mt-0 md:w-1/4">
                        <a href="#" aria-label="Twitter">
                            <FontAwesomeIcon icon={faTwitter} className="text-2xl hover:text-gray-300 transition duration-300" />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-gray-300 transition duration-300" />
                        </a>
                        <a href="#" aria-label="YouTube">
                            <FontAwesomeIcon icon={faYoutube} className="text-2xl hover:text-gray-300 transition duration-300" />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-gray-300 transition duration-300" />
                        </a>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="text-center mt-4 pt-4 flex flex-row justify-between px-4">
                    <div className="flex flex-row gap-8">
                        <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_5658)">
                                <path d="M3.18443 2.29688C1.41443 2.29688 -0.00756836 3.73988 -0.00756836 5.51288C-0.00756836 6.15488 0.211432 6.75188 0.517432 7.25288L3.18743 11.2969L5.85743 7.25288C6.16643 6.75188 6.38243 6.15188 6.38243 5.50988C6.38243 3.73988 4.95443 2.29688 3.18443 2.29688Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_5658">
                                    <rect width="6.39" height="12" fill="white" transform="translate(-0.00756836 0.796875)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className='text-white'>India</p>

                        <p className='text-gray-400'>© 2023 Nike, Inc. All Rights Reserved</p>
                    </div>
                    <div className="flex justify-center space-x-6 gap-4">
                        <a href="#" className="hover:underline">Guides</a>
                        <a href="#" className="hover:underline">Terms of Sale</a>
                        <a href="#" className="hover:underline">Terms of Use</a>
                        <a href="#" className="hover:underline">Nike Privacy Policy</a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
