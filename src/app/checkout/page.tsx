import React from 'react';
import L5 from '../../../public/l5.png'

export default function Checkout() {
    return (
        <>
            <header className="p-4 flex flex-wrap justify-between items-center border-b">
                <a href="/">
                    <svg width="79" height="79" viewBox="0 0 79 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_32)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M68.9262 28.7725L25.8854 47.0298C22.302 48.5502 19.2874 49.3087 16.8581 49.3087C14.1248 49.3087 12.1336 48.3442 10.9108 46.4184C9.32501 43.9335 10.0182 39.9381 12.7385 35.7203C14.3536 33.2551 16.4069 30.9925 18.4079 28.828C17.9371 29.5931 13.7815 36.5083 18.3262 39.7648C19.2253 40.4187 20.5037 40.7391 22.0764 40.7391C23.3384 40.7391 24.7869 40.5332 26.3792 40.1179L68.9262 28.7725Z"
                                fill="#111111"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_32">
                                <rect width="78.47" height="78.47" fill="white" transform="translate(0.264648 0.264648)" />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <div className="text-sm font-semibold flex flex-row gap-6 items-center">
                    <p>1800 102 3642</p>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_5507)">
                            <g clipPath="url(#clip1_1_5507)">
                                <path d="M20 0.796875H0V20.7969H20V0.796875Z" fill="white" />
                                <path d="M14.2708 16.4219H16.4375C17.783 16.4219 18.875 15.331 18.875 13.9844V4.23438C18.875 2.88779 17.783 1.79688 16.4375 1.79688H3.4375C2.092 1.79688 1 2.88779 1 4.23438V13.9844C1 15.331 2.092 16.4219 3.4375 16.4219H9.9375C11.283 16.4219 12.375 17.5128 12.375 18.8594V20.4844" stroke="black" stroke-width="1.625" />
                                <path d="M13.1875 11.5469H5.0625" stroke="black" stroke-width="1.625" />
                                <path d="M14.8125 6.67188H5.0625" stroke="black" stroke-width="1.625" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_5507">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.796875)" />
                            </clipPath>
                            <clipPath id="clip1_1_5507">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.796875)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_5513)">
                            <g clipPath="url(#clip1_1_5513)">
                                <path d="M2 7.39062V15.8906C2 16.9952 2.89543 17.8906 4 17.8906H16C17.1046 17.8906 18 16.9952 18 15.8906V7.39062H2ZM10 0.390625C12.9731 0.390625 15.4411 2.55301 15.9171 5.39082L18 5.39062C19.1046 5.39062 20 6.28606 20 7.39062V15.8906C20 18.0998 18.2091 19.8906 16 19.8906H4C1.79086 19.8906 0 18.0998 0 15.8906V7.39062C0 6.28606 0.89543 5.39062 2 5.39062L4.08293 5.39082C4.55893 2.55301 7.02694 0.390625 10 0.390625ZM10 2.39062C8.13616 2.39062 6.57006 3.6654 6.12602 5.39062H13.874C13.4299 3.6654 11.8638 2.39062 10 2.39062Z" fill="#111111" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_5513">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.390625)" />
                            </clipPath>
                            <clipPath id="clip1_1_5513">
                                <rect width="20" height="20" fill="white" transform="translate(0 0.390625)" />
                            </clipPath>
                        </defs>
                    </svg>


                </div>
            </header>
            <div className="bg-white text-gray-800 font-sans">
                {/* Header */}

                {/* Main Content */}
                <main className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 lg:p-8">
                    {/* Left Section */}
                    <section className="flex flex-col flex-wrap justify-center lg:col-span-2">
                        <h2 className="text-base md:text-lg font-bold mb-4">
                            How would you like to get your order?
                        </h2>
                        <p className="text-sm mb-4">
                            Customs regulation for India require a copy of the recipient's KYC. The address on the KYC needs to match the shipping address. Our courier will contact you via SMS/email to obtain a copy of your KYC. The KYC will be stored securely and used solely for the purpose of clearing customs (including sharing it with customs officials) for all orders and returns. If your KYC does not match your shipping address, please click the link for more information.{" "}
                            <a href="#" className="text-gray-600 underline">
                                Learn More
                            </a>
                        </p>

                        {/* Image */}
                        <div className="border p-4 mb-8 flex items-center mx-4 md:mx-8">
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.9538 9.12293L20.3077 1.61523H3.69228L1.10767 8.93831V20.6306H22.9538V9.12293ZM4.3692 2.53831H19.6307L21.7846 8.63062H2.21536L4.3692 2.53831ZM21.9692 19.7691H2.03074V9.5537H22.0307L21.9692 19.7691Z" fill="#111111" stroke="#111111" stroke-width="0.692308" stroke-linejoin="round" />
                                <path d="M15.6902 12.2609L15.5976 12.1619C15.3364 11.8826 14.8983 11.8679 14.619 12.129C14.6158 12.1321 14.6125 12.1352 14.6093 12.1383L10.65 15.9876L9.39079 14.7633C9.11665 14.4968 8.67835 14.503 8.41182 14.7771C8.40869 14.7803 8.40559 14.7836 8.40252 14.7869L8.30992 14.8859C8.05236 15.1613 8.06263 15.5922 8.33301 15.8551L10.1674 17.6386C10.4361 17.8998 10.8639 17.8998 11.1326 17.6386L15.6671 13.2301C15.9375 12.9672 15.9477 12.5363 15.6902 12.2609Z" fill="#111111" />
                                <path d="M12.4614 2.69238H11.5383V8.23084H12.4614V2.69238Z" fill="#D8D8D8" stroke="black" stroke-width="0.923077" />
                            </svg>
                            <span className="ml-8">Deliver It</span>
                        </div>

                        {/* Form */}
                        <form className="space-y-6">
                            <h3 className="text-base md:text-lg font-semibold">
                                Enter your name and address
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Form Fields */}
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="border p-2 w-full rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="border p-2 w-full rounded"
                                />
                                {/* Add remaining fields */}
                            </div>

                            {/* Responsive Spacing */}
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Save this address to my profile
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Make this my preferred address
                                </label>
                            </div>

                            {/* Contact Information */}
                            <h3 className="text-base md:text-lg font-semibold">
                                What’s your contact information?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Contact Fields */}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border p-2 w-full rounded"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="border p-2 w-full rounded"
                                />
                            </div>

                            {/* PAN Information */}
                            <h3 className="text-base md:text-lg font-semibold">What’s your PAN?</h3>
                            <div className="space-y-4 mb-16">
                                <input
                                    type="text"
                                    placeholder="PAN"
                                    className="border p-2 w-full rounded"
                                />
                                <p>
                                    Enter your PAN to enable payment with UPI, Net Banking or local card
                                    methods
                                </p>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    I don’t have a PAN
                                </label>
                            </div>
                        </form>

                        {/* Second Image */}
                        <div className="p-4 mt-16">
                            <div className="flex items-center">
                                <input type="checkbox" className="mr-2" />
                                <p className="text-sm text-gray-600">
                                    I have read and consent to eShopWorld processing my information in
                                    accordance with the{" "}
                                    <a href="#" className="text-gray-600 underline">
                                        Privacy Statement
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" className="text-gray-600 underline">
                                        Cookie Policy
                                    </a>
                                    . eShopWorld is a trusted Nike partner.
                                </p>
                            </div>
                        </div>

                        <button className="w-full md:w-3/4 lg:w-1/2 h-14 bg-gray-800 text-white rounded hover:bg-gray-700 mt-6 mx-auto">
                            Continue
                        </button>
                        <div className="flex flex-col items-evenly justify-center mt-8">
                            <ul className='ml-6'>
                                <hr />
                                <li className='mb-8 text-[21px]'>Delivery</li>
                                <hr />
                                <li className='mb-8 text-[21px] text-gray-600'>Shipping</li>
                                <hr />
                                <li className='mb-8 text-[21px] text-gray-600'>Billing</li>
                                <hr />
                                <li className='mb-8 text-[21px] text-gray-600'>Payment</li>
                            </ul>
                        </div>
                    </section>

                    {/* Right Section - Order Summary */}
                    <aside className="  border-l pl-[1rem] w-full  lg:w-[450px]">
                        <h3 className="text-lg font-bold mb-4">Order Summary</h3>
                        <div className="text-sm mb-4">
                            <div className="flex justify-between mb-2">
                                <span>Subtotal</span>
                                <span>₹15,992.00</span>
                            </div>
                            <div className="flex justify-between mb-2">
                                <span>Delivery/Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-bold border-t pt-2">
                                <span>Total</span>
                                <span>₹15,992.00</span>
                            </div>
                        </div>
                        {/* Product */}
                        <hr />
                        <p className='text-[12px] text-gray mt-4 mb-4'>(The total reflects the price of your order, including all duties and taxes)</p>
                        <h1 className='font-semibold text-[18px]' >Arrives Mon, 27 Mar - Wed, 12 Apr</h1>
                        <div className="flex items-center space-x-4 pt-4">

                            <img src={L5.src} alt="Product" className="object-cover rounded" width="208px" height="208px" />
                            <div>
                                <p className="text-[13px] font-semibold text-black">AirMax Men’s Shoe</p>
                                <p className="text-[13px] text-gray-600">Qty 1</p>
                                <p className="text-[13px] text-gray-600">Size L</p>
                                <p className="text-[13px] text-gray-600">₹7 996</p>
                            </div>
                        </div>




                    </aside>
                </main>
            </div>

            {/* Footer */}
            <footer className="flex flex-row flex-wrap space-y-8 p-4 justify-between items-center text-xs text-gray-600 border-t bg-black text-white">
                <div className="upper flex flex-row gap-8">
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

                    <p className='text-white'>Terms and Conditions &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; © 2024 Nike</p>
                </div>
                <div className="logos flex flex-row p-4 flex-wrap  items-center gap-2 ">
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5668)" />
                        <defs>
                            <pattern id="pattern0_1_5668" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5668" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5668" width="100" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAMAAACn4e/8AAABFFBMVEX///////////////8AAAD///////////////////8mM3qLkrj9/f7smC0pNnwtOX7f4ez3+PptdqY2QoS3u9P1yI/Jzd6orcpSXZby8/fs7fTT1uTMz+Cssc2aoMFmb6JYY5kxPYGXnsCRl7x9hbBgaZ08SIj5+vzO0eHEyNu7v9Wlqsido8OGjrWAiLFia59DTow/SortmzP09fnj5e7a3OjX2ea0udGhpsaTmr2Di7R4gKx0fKpocaJdZ5z//Pjp6vH99evQ0+L87t3Fydy+wtextc+NlLr416720J9OWZNLVpFFUY7ywofu7/X53bt6gq6dlqW3no9PU4NPUHyghHbzvHW6kGy6kGnwrVnfoljen1MANyAiAAAACXRSTlOsHe7yAOuvJvOpv1cdAAACh0lEQVRYw+2YaVPiQBCGg6LuOwyQIHIICigiKIf3Bd63q3vf+///x+bticGv8yHW1m6eKmtmYqafTk9zFE4y4UwhQqamZ5JOYgIRM5FwHESO40wiciYcvAKxJJaExJJYEkv+K8n9nOH+EoaFlE8BBQ5VkPL6qFSq1/odDcHt+v9aspGcvv+2lSZb5yZiVvm4aHJYA7B62FABLkhF7siU7cp1PieaO/MgjHAC1IOo3op6JqtBakoo2J7Jx9++5AnkhAHywGwQta9C3oK4wWrRVpJX39Ppn5ztZPz9s6uYD6Keca36lZ3K2nAI0lOGnK2knFFf01unAA65/xYoBHFuOK5AkGp58oj+36atBCWlfqQvAf3IM3WBdQZfBrqK8eYRskDHMq+e2Upu/U2/7oAqd9cAHHGyz0KSVlGH6fAGue3aVtLxN315wrhxpaf2gO2WEh7aENrSF16Gz2kr8VjlT/AaLA6zZuyMB6DAS1yYmCPTFw/+MLCVSOd+1lKcQ3YCJxsgexvKQMs8k2kCH+jStpIlhtkdMGWe8gWXxxC87qwiWTe4rQ0UObq2kgp3LbHUufB1n0LAdlORIvQGn6BzdXUgfWEr0cxWMu5wmeJsASF1yQFr6iU9WwlyyvCow/enC6CqQXSJ6xvpuTF1a8m6MnRB5LDL0NlWKl+t5AdKDsvlMCarbSVusPEdF/I6aMnFMUfoSf45UpdGsZVgU5ERyF7wjnWtxhyvbjdM85Fd6QRryVCRNsi+ZC41DGgsahRf9LWmsGktqSz6HEAomI9gYKfYr5VKg17ee/5grsJw4M+Lf9UXiVgSS2JJLIkl/5TkDSJn0plG5DjOzGv8+JxMRPnTMGuVSP4BHHb3nhtNgRkAAAAASUVORK5CYII=" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5669)" />
                        <defs>
                            <pattern id="pattern0_1_5669" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5669" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5669" width="100" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAMAAACn4e/8AAABHVBMVEX///////////////8AAAD///////8dW5n///9+osVEd6uGp8hfi7fnqDrh6fJ4ncIsZqBKfK04b6bw9Pj9/v40bKT7/P0iX5zb5e/R3ut0msEwaaIuZ6EkYZ32+fvJ2Oesw9o8cacoY56kvdZpk7xSgbHX4u29z+Fvl75nkLofXZrl7fTc5vDU4OzM2ui4zOCowdiVstCEpsdAdKns8ffA0uNhjbhah7VXhbSLq8v09/qOrcw4ZY1Sb4CCgWnE1OWduNNCdqoyY49Eaodnd3aUiWGejFy6l0/Mnkfp8PW1yt6vxduattI+Z4pMbYKxlFPToUOQr85gdXluenN1fG+NhmSbi12rkVW/mE3gpj1lj7pOfq8pYJN5fm3BmkseyHSCAAAAB3RSTlOt7R3yACbzirf9NwAAA6JJREFUWMPtmHlz0kAYh7FW318LTSAJSZMQIOEGkfsSodWeWnt4337/j+G+BHDGqTOMIVU7Pn8kuzvDPuy7x7zZyOZG5A5C5E7k3mZkI0yFr9mIRBA6kchdhM7dCG6Am5bkttZL6TpJjNZL9L8kDEmCUUigJBJPyOYHkR2T86KRcRICL5ikkAXQFAXvGTCiJvCcnKwGwcMCCUYQVIKGywQa4tUCJKfaBcrEXualaE6pEEY5qGQMZIhcHchTAdBTKe7VLpTOSPACKAHjoBILKBI1ZqoWPwfz+FR5onTULCAXVDIAajQEtATRLtDmjqGNDWKyQLQMNIJKOoBaLQLZWREukazxtNtEtK3hUbwiKkElHqBbwKMkURvYJcEnFUDdISoBLR6qFFRCqugaGIlShvtkUmcAyrwOtH7CAtKBJUUIag4RL6sCuUPRZug8Ow+xwAsqKUGQF4Uy0K1WM8iMZNGmbfexxA0qyWE+s89571uY06qKIGbj8bgCoBBUsiVJUoJDVJSkGBnWQw2AJFNftHd4v4j3YO2nsPckofx7R/2flDy9OJweX15++HZ6enry/vjocM2Sp6/efvi48xPv1ik5mJ7sXMfR2iQXR1c7O1eXR9PDyflj5mDy6vX03YkY19v1SM6np1fHry++XBvBycE6JJP3J2/OQ11d1cPjr09DXsKTNwe3eDMGllTjcygF7IYkScKn+2tJxTQroUtkwAoseZQX9H9IFNcjH0UxfEmZfIw4N9hukhZ4bnwlSZeYhaRSA/Qc99XuAlrPaaSBtNqgnqrmVXymgQnggdAmVTXTTkPfWmkkUYE8l1jimU2jxVkq85wyYEqcrQidPdAwQyYFPrq96pxIFAcekKfigUNbSHuKDr3dSSiUzAGWa5PJ4+pREZCNmA7VERKtWa4BhRUkuiTY8yV9oGuaEpCQl5n1PjAkYkmFyPYzyB5QcIE6URPoryCpEeNLLECVmOEIiC6zJP6vdUAhjpEpKmdArPO7kiGQFWWHWGcaC8lwKTHSIusmQwLcpSS2gkRTBRlf4jyDtl9++SxGdhrY3c+0Z58+xUyMJyPpfz/Ux3ucAQqJKeorSXzqvoQGaTBNovyspHpUgSDHEptXehFMrUNPVpZ4sk+FDFnmHFgZl/ZyQxK4L3qN1jb/vNcYJcmKRh0SOHJjr9SOE9nRaJkoFo0qf8UpfBsk8vZ62ceCW3Rzdx+hc/dmrmzv3cTl8+ZGmFfDHKuNze+coPzPZKaKxwAAAABJRU5ErkJggg==" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5670)" />
                        <defs>
                            <pattern id="pattern0_1_5670" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5670" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5670" width="100" height="60" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5671)" />
                        <defs>
                            <pattern id="pattern0_1_5671" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5671" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5671" width="100" height="60" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5672)" />
                        <defs>
                            <pattern id="pattern0_1_5672" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5672" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5672" width="100" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAMAAACn4e/8AAAAwFBMVEX///////8AAAD///////////////////////////////////////8Acs5mquJVod4Qe9GZx+sFdc+72fKr0e8LeNAxjdgoidZ5tebv9/zN4/ZepuAZgNOfyu1EmNsUfdL3+/7g7vnd7Pi21/GFvOhwsOTj8PqQwuqBued1s+T7/f70+f3r9PvW6fex1PCbyOzm8vva6/hrreNMnN04kdkghNXE3vTS5/fI4fW/3POkze6JvulYo98/ldokhtWnz+4SOpcNAAAADHRSTlPurQDy8KweHeuwKCSnbjvZAAADVUlEQVRYw+2YiY6iQBRFnX27j31VEBRRGxB3293//6t5VehklkwCk9jpSTzRug98yQlVpjTVevvxzWfckc9vvr1tfWzhzrQ+td7g7nxovcPded/CC/CQPCQ/eEgekv9a0laY1FIEFgrlDxbjZ5nzcLxQJGkpYyPHXh3JkgRnOa6zAf0Vg37g/jS2a0j6RhfINaIh4NEliGKg41z9HTD+/ImeMKBgP4+hcnccEfWAI9EYXi1JSiX6SIUkK2yNPGRCUliM08HcsrZsY4kxwWxjnkS3JyUzra7Et8/ondAXEgsLMoZxIiQ7EnQw4nGLDkuWmNhE3L1Cz2BJglFdyYhG3PiMJUtWPHdHTEMhifuM20H7cBjFRcQSfhHJ7i1Ulrh55tSUpLYPTylhssTe4biBKyV5mzl3IPGIDWOMiWS3hR1L7CdsBzUlC1S4LFliiITCn6crXLvdAg5LOuLerdthCS9Sr6ZkAqXb7e6hs4QmQLeSzHTGFWuypgtUlmgFttbs2j1lCZ2AepIEz6StDRe5D5sUvqokkqWQ6BRKCa22GW7dccHdtK8p8TSbdliQxlBgaHZAtmYYmoTTZoldFUSGxmEirbpXgcEtdSShqirARJWE8v0b5q3YjTuq7J6rknEpo/9qNkjghSWpeiPNMK2qo3IYXYvpWL3ytF/IDAcKj2YjiUtahU2dKRnXkhGFUS39rRR5vRM2kwSoyFdEwRwZBKYbyYzNwIGkG5Q5R5/UOQRNJb7OXOC70TMuJkp9OkE7Qq7rVoGpg6HOuDqGpWWNohgmX06aSiYkGGDWRmIkWBGtkUXoE5GHiwOTBBscRTjoGRx6U0nmMxFNgY1NCTxV1dGXTzItsq5TfX4+AP7QXNo+Yv9ZL5tKcpPRDAtIDJYI8mUEyUZzUJjM2vCS9gxx4ISbdgz823TpmG+xZ8mC90ObIvQ07VxiLKfrxgwrEWpziW8xJobraIKRWBMtOgViTRzxg+ZgZjHOgh9ng1hLOHvNJRWFS7SeIcdKA3ASkoOmIrx9hUdg5irFHLFlNZPQDwZ6lVLCyZK//knSG0k85cYI0GWRAjiIIkmVX0n3ZZWh//o2yIfkIXlIHpJXKnmRg84vuDsfWl9f4vCZj9HvOmPvP3x6+x2wF1Qz6LfKqQAAAABJRU5ErkJggg==" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5673)" />
                        <defs>
                            <pattern id="pattern0_1_5673" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5673" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5673" width="100" height="60" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5674)" />
                        <defs>
                            <pattern id="pattern0_1_5674" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5674" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5674" width="100" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAMAAACn4e/8AAABZVBMVEX///8AAAD////////////////smWLxuZD////////////////////////mdy8aGRnd3d2UlJQnJyceHR3//v79/PsxMDBcXFwzMjLnfTgpKCj5+flmZmbqjVFNTEw1NDQvLi6fnp7phESnp6eTk5NCQUHnejL29vb99fDp6enFxMS8vLy4uLi0s7ORkZFubm5KSUkhICAbGhr98+zr6+vl5eXg39/76d364tPT09P53s3AwMD1ya3yuZOCgoLtnms4NzfPzs7Ly8urqqr1x6jwrYNxcHBWVVVRUFBHRkbogT08Ozv++fXx8fH88Oj87eP42sb30rmwsLCioqKbm5vyu5eXlpaGhYV9fHzvqHtqaWnrklj+9/Li4uLHx8fzwJ7zvZvytpCQj4+JiYnxsYh6eXl2dXXtmmReXl7slV1ZWFjqikw+PT0tLCwkIyP9+/nZ2dnNzMz31L32zrTupHR0c3NhYGCBsiClAAAADXRSTlMdAPPurevkNybwsK6rfpGyygAAAxZJREFUWMPt2Olz0kAcxvF4n08e2iQiIaURRChnOUoBgWJra23Vnvb0vu9b/353l6rtjILaWd/I9w0wZPYzv93JTCbGAePwEWjsyKnjBwzjEDR3yDAOQ3unjYPQ3gkD/6A+0ke+10f6SB/5T5GEg53CY2Xs9PbafpBh1z1z9XPaARAZXgGm2rQiWYguBQvkmRyAZPOlac5tVoG8G3cU33ZblWFVDq9c1488ftcFGaRqdgQ4ywGcI1/7HBS/Biyy8IZxYDxqqi40cIfMQBRjMRCgqoUzLMhrJ7sha4HUusV4QiE+PQeZNLBCRmq2k3mGkjJUH3CVLwCIjyAEcrFcLicEch41ny+6IecAZIrMScQucAOyhMtIZ2MwbX4v6sgRgPdifYlcgkgheMJ2LwRBxiWCK2KAbBjIkjWo7DnzR4thny0gzzgkklteXr6tEGeUV3oia7RsiYxFSPpZPOAgOt0wd3UZDzmYGLEYk4gqJpDRmXlaF3shalGJAHc8S2zGeb6xoSrtRSSQox9WyLOZmZlJgYiupNATEdMqRFZxmU+Tk1DZ0V1IHfA42uY6sPtMHs5zCz2Rc2RWIekygAi/hM9yNAHRCJo/jCEbmCRpjexFztcsDnRFNtKrQXILEslY8VRgtSi1IudjlcBaBNeGvhkX6p2hmUcHWUmlUhWJINfjTGTFx2GFjA1T9uo6MFWgLA4s7CihJcimyFoHUbUU4szSvf1LJO953tZARX0NZnG9Ne+2N4QBjK1ffe3PTgFwGhPRue1mCaqwPwv1f1AVwxMvI0jPW92L6C+pH7E/RrUj9W3T1Izc2DRNzUhp+oKpGbl1PyQArYhzOaoAjUjypiD0IuPTYqP0ItUJU6QVqQtCL5K8K56X9CLjj8RR6ETEEEOmSCNiL34S97ZWZOGeHEInsnBTCjqRUmNCbJNOpNqZQR9iV5tS0IjcaEzIG0If4tTvPZfHoA25tfRoWwB/3u++6EwuNp+GzL8rZJzsfcjjjc0hcx8dNY4f6rr+0n0xwP6aOyZfo/90x65VL08/D5n7LnT02IGvTER751k0nVAAAAAASUVORK5CYII=" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5675)" />
                        <defs>
                            <pattern id="pattern0_1_5675" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5675" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5675" width="100" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAYAAACQPx/OAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAZKADAAQAAAABAAAAPAAAAAAn2FpLAAAEW0lEQVR4Ae2cW4hNURjH5zC5zMQgl4lMzctkCpPLi9TwoDSINOXyNvPAC5Pypokn1JSipkaRBzQSyeVRUZSSKJqIJhLDA4OQ0Wgufl85pd3aM7Nm1vrO2qf11b9zztprfZf//+x19t5n7V1SkmEbHh6uAAfAa9AN9oOZGS4pm6lDehVoA70gaZ9oOA4WZ7O6DGUNyatBJ/gNRrM+OpwHKzNUYvipQmgp2ATugkFgawMMuA02gsnhVxxohpBXDvaALuDKnuKoGZQFWnZ4aUFWJTgCPgBf9h7HrWB+eAwEkhHk1ILT4CfQsu8Eagc1gdBQ2DQgIgfqwU3wBxTK+gl8DawtLCMFik7hU8FO8BAMgVBMcnkAGsGUAtGjF5YiZ4OD4A0I3eREswVU6DFUUpLTCEZR1cTZB5rBHI2YDmP04usc6Mjlcu8c+tV3hRByIncJjOVEjm5Bm5xoXgAr9JmcYESSXgfugPGcyDEsaMufaNZPkCbjcOdTFlRuJ9IVUGqMWDyNA5Syg2nsusuSfAjyggRrXSYZsK+XCOK01kkeii334DNUl84PjX0IcixU9jzk1ebap/MpSxLkd6SJl11gFihG+0pRl8FFpqzhYiww1hQZCJMBL1NWslSmsEO0bQEq8ZLxHXwewscNpqcTDnyN6MI7QYixgAx6QNbPS/qpYSGiyO+HN9Mg6TPZd4LNYK6hkh+0SbFpJofRyX/4BmkbiRj5osk1s+RR5C/a+kCaTWPDjMRG+dH+AuQE8FtiW3Y/sqcsAqZL7btpl//N0yArSJLWQ4Ncwk8bU8Y2WX2StMM0pI2R9qbkAD7L/zSVWsxr7CH5WuRbbbIhpgG5DGE0yJD522QDjDP6ZExyz8iPH28sY5y8U5evaYm7jBF9WTAQBbEgS6NrFESDZYsYURALsjS6RkE0WLaIEQWxIEujaxREg2WLGFEQC7I0ukZBNFi2iBEFsSBLo2sURINlixhREAuyNLpGQTRYtogRBbEgS6NrFESDZYsYURALsjS6RkE0WLaIEQWxIEujaxREg2WLGFEQC7I0ukZBNFi2iKEpSNrqkdEWK5vGyRhTe7502WbyO9IYGWsaI+2jjZM+Tsz7MiCW5MiCtb1gVUrGcqfrtpRtQlCdYZv4lIfQpBEoXzTTY5rkVuylBn/5pur8m/9e5fkoHYx7wutZlh55XSzndSkpRcgqwEdgCSgG66KINYgiKyC9mO8paytZF4sYIsAy0CBvfJlvQWStbLGZ15p8T1myJvYZKJan7nykljqmLHmYgBfzKohkzO+ITFmtoAZ4j0cMHyZHWa/AUcTo9hEg+gyUAS/fWPaK5dTbCEz3gwRKhVVacs/LVfaW51ajxtDZuSCIsYG4t8D0McTPche58acBUe67LMKHII9JMO0k0GXuIfi6hyDrXSbi47B3nssEA/flvFYfgpwMnESX6bW7dCa+fFzLkiTlGlMLqPr3npeiMZnm34JT4Axwan8BkwrY61v5YtQAAAAASUVORK5CYII=" />
                        </defs>
                    </svg>
                    <svg width="54" height="19" viewBox="0 0 54 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="54" height="18" fill="url(#pattern0_1_5676)" />
                        <defs>
                            <pattern id="pattern0_1_5676" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5676" transform="scale(0.005 0.015)" />
                            </pattern>
                            <image id="image0_1_5676" width="200" height="67" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <svg width="54" height="16" viewBox="0 0 54 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="54" height="15" fill="url(#pattern0_1_5677)" />
                        <defs>
                            <pattern id="pattern0_1_5677" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5677" transform="scale(0.00425532 0.0153191)" />
                            </pattern>
                            <image id="image0_1_5677" width="235" height="66" xlinkHref="data:image/png;base64,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" />
                        </defs>
                    </svg>
                    <svg width="45" height="28" viewBox="0 0 45 28" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect y="0.796875" width="45" height="27" fill="url(#pattern0_1_5678)" />
                        <defs>
                            <pattern id="pattern0_1_5678" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlinkHref="#image0_1_5678" transform="scale(0.01 0.0166667)" />
                            </pattern>
                            <image id="image0_1_5678" width="100" height="60" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAMAAACn4e/8AAABaFBMVEX///////8AAAD////////////////////////////////////////////hAjgAbLlUsjD4xdKLy3M6jclSm9B7xF/97vLu9fr0+vGY0YP//f2k1pH8/v13sdrS68lnp9Wo2JX/+vvsYILn9eL2tMQJcrznL1tdotNWntH3u8nylauv257qTHJ2wVnmJ1XlHE33+/X98fS72Oy21ev5zNfd8Nb5yNTW7c5NmM4jgMP1rb654Kvve5ee1IrpQmt/xmTjEEJiuEBatTf2+v3y+Pv85Oqv0en73+agyOWHut7f8dlrqtZJl874v80xiccqhcUTd7/J5771p7oCbbryk6rxhZ/uaYqX0IHrVXmQzXjrUXZtvk5ou0jx9/v6/fn+9/np8vnk7/jb6vXQ5PLD3O/v+Ozu9+qnzOedx+SXw+KDuN1xrdhjpdT4ws/D5LbB47TznrPxiaKx3KHuc5HucY/sXYCEx2rhBDoSs10qAAAADXRSTlPy7gCtrB4d6+2wrigkBC32TAAAAkJJREFUWMPt2GdP20AYwHEnhND1OCFAoa6TZtjZe0FCNqOssjd0773br1/fpWenPgnJvliiyP9XZ7/5SbcsmXOOjoyBhY3duOXkRh1gcQ43NwKW5+I4sDwHMizPRv43RJwmLZJXhdukEPR7NEPKG0ee+GsetQlQEuqtDq82DkqR5rlXzWcYKW0TgCCFtAoQ5FOPAKaQF7JHhwgtXo/saIAZRKx59Mg+r0fyXTZk2UMhWQqZ97Ih7ylkiaeQE0YkTiFlGmkzIpMUMk4jUzZiI0xIzY/axEguvC9Vy+WP9a/h6G90GO+SjqaYkA1A3VOQqCSAVlhBBls7Z0DmCNL/foR2D4/DB4kQQWZTqdRnEY0Cw0Bw97M8rvM93UeCXqUgGgkMyOQgIkR5LQ05QaOXw0Ie8HpkPpPJ/Iqg0dGwkCSFkAJtlt0Vvxh5ValU1tDCR3wMSAxQHwami16TNt7bPvPIKqA2Llx4bwTPmGHkeUzGxtZD9DQtky38V8k1BrfwmYiPjAGEtFBcXV9/s4DHMY9yGB/jwyg1Dn8kqwI5jJGAUh5QTcOICFrP5vAFma2HQOsnRrTEbya+8ZuxdyulYrG04p/YI7dw5/RgN5FISF8axzm0Jqk7ar7upb/qbcRGdFWHjsRpZIlCmozIWwrJAoXssCHbixSSpJAzkQnZWwY90hL0SG8WWBD5NeiRdAF0SDcA5hF5y/8U/kVypxKgNKSXCc5c6j8SNnJ1EUsVYlwHy3NxNx1gcdfc6De6pTPGudzOPyS4ay1DJHfWAAAAAElFTkSuQmCC" />
                        </defs>
                    </svg>











                </div>
            </footer>
        </>
    );
}
