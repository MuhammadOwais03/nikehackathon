import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './st.css'

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 py-8 text-sm">
            {/* Footer Container */}
            <div className="container mx-auto flex flex-col justify-center items-center md:items-stretch md:flex-row md:justify-between px-6">
                {/* Left Section */}
                <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                    {/* FIND A STORE */}
                    <div>
                        <ul className='text-[10px]'>
                            <li className="font-bold mb-2 text-white">FIND A STORE</li>
                            <li className="mb-1"><a href="#" className="hover:underline text-white">BECOME A MEMBER</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline text-white">SIGN UP FOR EMAIL</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline text-white">SEND US FEEDBACK</a></li>
                            <li><a href="#" className="hover:underline text-white">STUDENT DISCOUNTS</a></li>
                        </ul>
                    </div>

                    {/* GET HELP */}
                    <div>
                        <ul>
                            <li className="font-bold mb-2 text-white">GET HELP</li>
                            <li className="mb-1"><a href="#" className="hover:underline">Order Status</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Delivery</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Returns</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Payment Options</a></li>
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* ABOUT NIKE */}
                    <div>
                        <ul>
                            <li className="font-bold mb-2 text-white">ABOUT NIKE</li>
                            <li className="mb-1"><a href="#" className="hover:underline">News</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Careers</a></li>
                            <li className="mb-1"><a href="#" className="hover:underline">Investors</a></li>
                            <li><a href="#" className="hover:underline">Sustainability</a></li>
                        </ul>
                    </div>
                </div>

                {/* Social Media Icons */}
                <div className="flex gap-4 justify-center items-center mt-8 md:mt-0 md:w-1/4">
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
            <div id="footer-2" className="text-center mt-4 pt-4 flex flex-wrap items-center sm:px-4 px-6">
                {/* Left Section */}
                <div className="flex items-center gap-4 mb-4 sm:mb-0">
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

                {/* Right Section - Links */}
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                    <a href="#" className="text-gray-300 hover:underline">Guides</a>
                    <a href="#" className="text-gray-300 hover:underline">Terms of Sale</a>
                    <a href="#" className="text-gray-300 hover:underline">Terms of Use</a>
                    <a href="#" className="text-gray-300 hover:underline">Nike Privacy Policy</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
