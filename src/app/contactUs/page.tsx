import Header from "../../../components/header";
import Header2 from "../../../components/header2";
import Footer from "../../../components/footer";

export default function ContactUs() {
    return (
        <>
            <Header />
            <Header2 />

            {/* Contact Page - Get Help Section */}
            <div className="container mx-auto py-12 text-gray-700 flex  items-center flex-col px-[4rem]">
                <h1 className="text-3xl font-bold mb-8 text-center">GET HELP</h1>
                <div className="relative h-[56px] w-full max-w-[457.33px] flex items-center px-6 bg-white-100 rounded-[10px] border border-black mb-8">
                    {/* SVG icon */}
                    <svg
                        width="25"
                        height="18"
                        viewBox="0 0 25 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-gray-500 absolute right-[8px] sm:right-4 lg:right-[8px]"
                    >
                        <g clipPath="url(#clip0_1_3798)">
                            <path
                                d="M19.9388 15.2176L17.1563 12.4576C18.2364 11.1109 18.7594 9.40152 18.6179 7.68103C18.4764 5.96053 17.6811 4.35964 16.3954 3.20753C15.1098 2.05543 13.4317 1.43968 11.706 1.4869C9.98033 1.53412 8.33834 2.24072 7.11766 3.46141C5.89697 4.68209 5.19037 6.32408 5.14315 8.04974C5.09593 9.77541 5.71168 11.4536 6.86378 12.7392C8.01589 14.0248 9.61678 14.8201 11.3373 14.9617C13.0578 15.1032 14.7671 14.5801 16.1138 13.5001L18.8738 16.2601C18.9435 16.3303 19.0265 16.3861 19.1179 16.4242C19.2093 16.4623 19.3073 16.4819 19.4063 16.4819C19.5053 16.4819 19.6033 16.4623 19.6947 16.4242C19.7861 16.3861 19.8691 16.3303 19.9388 16.2601C20.074 16.1202 20.1495 15.9333 20.1495 15.7388C20.1495 15.5443 20.074 15.3574 19.9388 15.2176ZM11.9063 13.5001C10.8679 13.5001 9.85291 13.1921 8.98956 12.6153C8.1262 12.0384 7.45329 11.2185 7.05593 10.2591C6.65857 9.29983 6.55461 8.24423 6.75718 7.22583C6.95975 6.20743 7.45976 5.27197 8.19399 4.53774C8.92822 3.80351 9.86368 3.3035 10.8821 3.10093C11.9005 2.89836 12.9561 3.00232 13.9154 3.39968C14.8747 3.79704 15.6946 4.46995 16.2715 5.33331C16.8484 6.19666 17.1563 7.2117 17.1563 8.25005C17.1563 9.64244 16.6032 10.9778 15.6186 11.9624C14.634 12.9469 13.2987 13.5001 11.9063 13.5001Z"
                                fill="#757575"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_3798">
                                <rect width="24" height="18" fill="white" transform="translate(0.65625)" />
                            </clipPath>
                        </defs>
                    </svg>

                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-transparent pl-12 text-gray-700 focus:outline-none w-full h-full"
                        id="searchInput"
                    />
                </div>


                <div className="grid md:grid-cols-3 gap-8">
                    {/* Payment Options Section */}
                    <div className="md:col-span-2">
                        <h2 className="text-[28px] font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                        <p className="mb-4 text-[16px]">
                            We want to make buying your favorite Nike shoes and gear fast and easy, and we accept the following payment options:
                        </p>
                        <ul className=" mb-4 ml-8">
                            <li className="text-[16px] list-style-none ml-2">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                            <li className="text-[16px] list-style-none ml-2">PayPal, Apple Pay, and local debit or credit cards</li>
                        </ul>
                        <p className="mb-4 text-[16px]">
                            Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member, join us today.
                        </p>
                        <div className="flex space-x-4">
                            <button className="w-[106.13px] h-[39px] rounded-full bg-black text-white px-4 py-2 rounded hover:opacity-80">JOIN US</button>
                            <button className="w-[129.84px] h-[39px] rounded-full bg-gray-800 text-white px-4 py-2 rounded hover:opacity-80">SHOP NIKE</button>
                        </div>
                        <div className="mt-12 self-start">
                            <h2 className="text-xl font-bold mb-4">FAQs</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold text-[16px]">Does my card need international purchases enabled?</h3>
                                    <p className="text-[16px]">Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                                    <p className="mt-8 text-[16px]">Please note, some banks may charge a small transaction fee for international orders.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[16px]">Can I pay for my order with multiple methods?</h3>
                                    <p className="text-[16px]">No, currently Nike does not split payments across multiple payment methods.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[16px]">What payment method is accepted for SNKRS orders?</h3>
                                    <p className="text-[16px]">You can use any accepted credit card to pay for your SNKRS order.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[16px]">Why don’t I see Apple Pay as an option?</h3>
                                    <p className="text-[16px]">To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                                </div>
                                <div>
                                    {/* <h3 className="font-semibold">Why don’t I see Apple Pay as an option?</h3> */}
                                    <p className="text-[15px]" >Was this answer helpful?</p>
                                    <div className="flex flex-row gap-6">
                                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1_3842)">
                                                <path d="M10.025 15.375C10.525 14.575 11.025 13.75 11.525 12.9L11.975 12.3C12.925 10.95 13.5125 10.125 13.7375 9.825C13.9625 9.525 14.325 8.875 14.825 7.875L15.125 7.275C15.175 7.225 15.225 7.025 15.275 6.675C15.375 5.825 15.525 5.2 15.725 4.8C15.975 4.1 16.375 3.75 16.925 3.75C17.675 3.75 18.225 4.025 18.575 4.575C18.875 5.075 19.025 5.65 19.025 6.3C19.025 6.85 18.75 7.85 18.2 9.3L17.9 10.125C17.8 10.475 17.725 10.95 17.675 11.55L17.525 12.3H20.15L20.975 12.375C21.575 12.425 22.1 12.525 22.55 12.675C23.2 12.825 23.65 13.05 23.9 13.35C24.2 13.75 24.375 14.175 24.425 14.625C24.475 14.925 24.475 15.325 24.425 15.825L23.525 23.325C23.375 24.575 22.775 25.425 21.725 25.875C21.125 26.125 20.35 26.25 19.4 26.25H6.125V15.375H10.025Z" fill="#111111" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1_3842">
                                                    <rect width="30" height="30" fill="white" transform="translate(0.5)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.525 17.025L10.025 14.625H6.125V3.75H19.4L20 3.825C20.45 3.875 20.9 3.975 21.35 4.125C21.9 4.325 22.35 4.6 22.7 4.95C23.15 5.45 23.425 6.025 23.525 6.675L24.425 14.1C24.475 14.6 24.475 15 24.425 15.3C24.375 15.8 24.1875 16.2625 23.8625 16.6875C23.5375 17.1125 22.975 17.375 22.175 17.475C21.775 17.575 21.1 17.625 20.15 17.625H17.525L17.675 18.45C17.725 19.05 17.8 19.5 17.9 19.8L18.2 20.7C18.75 22.15 19.025 23.15 19.025 23.7C19.025 24.35 18.875 24.925 18.575 25.425C18.225 25.975 17.675 26.25 16.925 26.25C16.375 26.25 15.975 25.9 15.725 25.2C15.525 24.8 15.375 24.175 15.275 23.325C15.225 22.925 15.175 22.7 15.125 22.65L14.825 21.975C14.325 21.025 13.95 20.3875 13.7 20.0625C13.45 19.7375 12.825 18.875 11.825 17.475L11.525 17.025Z" fill="#111111" />
                                        </svg>

                                    </div>
                                    <p className="text-[16px] mb-2 mt-6">RELATED</p>
                                    <div className="flex flex-col ml-[2rem]">
                                        <a href="" className="text-[16px] underline">WHAT ARE NIKE'S DELIVERY OPTIONS?</a>
                                        <a href="" className="text-[16px] underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information Section */}
                    <div className="border-l p-6 rounded">
                        <h3 className="text-lg font-bold mb-4 text-[28px] text-center mb-8">CONTACT US</h3>

                        <ul className="space-y-[2rem]">
                            <li className="flex flex-col justify-center items-center">
                                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3857)" />
                                    <defs>
                                        <pattern id="pattern0_1_3857" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_1_3857" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1_3857" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAA9UlEQVR42u3bMQ6DMAyF4UyMXIAzZgxXzNbeJRMbNZKRGKhUGsEL4rf0FoYk/hSYcAj11VmiJVuKZT45xfeKvre0Bsv7gqa/5eVnkFQnbn6LILkJsYHm10QFQP7joL/W0XWzAqA0BFAUAHNjAQAAADQA6gIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM7ZmL/FATieyZIsvSf5s8cApJ31xrsB1EyJ9jvr9aFumvTyyg0BSMbmYkOvgGRwsmZ0dvKG14/gWPERlI3OLjX4AR45PL29Cbcdn/8ANj8tWTu2jFYAAAAASUVORK5CYII=" />
                                    </defs>
                                </svg>

                                <p className="text-cente text-[16px]r">080 080 919 0569</p>
                                <p className="text-[16px] text-gray-500 text-center">Products & Orders: 24 hours a days, <br /> 7 days a week <br />Company Info & Enquiries: 07:30 <br />- 16:30, Monday - Friday</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3863)" />
                                    <defs>
                                        <pattern id="pattern0_1_3863" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_1_3863" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1_3863" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACjElEQVR42u2aTUgUYRzGV6MO+ZVrH5If4SpSYfkFCpYReQiCPjxWXq2rBgUJbeBBzx6UkO0gnjx58xIi4sXDQmJ0EEsLCckw1HBjl4V/PHOIcfedd3RaGvbd54GXZWZ4/v//89vZUd7dQICiKIqilBodjcjJgvMSyCvN2oX5kcMTgGwPb4fg7RYwIPzfRQAEQAAEQAAEQAAEQAAEQAAEkGkAjU2dMj4+ITMz72Rk5I2EaptdPRcvtcnY2FvLg1ccu3lQF/XhQT/09R3Ag+4eSSQSYtfe3i9pa+9y9Nzqui+x2O8DHhzjvJMH9VDXLvRFf98AHD9xVjY3v4tK0eh7pScvPyirq5+VHpzHdZUP9VRCf8zhC4CW1puiU2mwJs1TE2rSenA91YM6OmEOXwBcbbyuHay4pDrNU1XdoPXgeqoHdXTCHL4AyD9WJuvrX5VDzc0tOPqWlj4oPTjv5EE9ldAfc/j2EOy8cSft4YTPpe6pjlt2e/vnAQ+Odbcy6qU+b9AX/X3/M4jb9lV4SCKRSXn+IizBspCr51x5vbwcGLQ8eMWxmwd1UR8e9FN9XPiPEAEQAAEQAAEQAAEQAAEQAAEQwL8CUG1oZOOycnjR1NS0tUVVcupC2ioqrvI8EPb9CgorlHUzvTA/cmT8F2TYifESvrCoUmZn5zM/0P+WFwB4RxYXo9kf3guA02fqZHn5oxnhjwqgovKyrKx8Mif8UQDU1rXI2toXs8IfFkDDlQ7Z2PhmXvjDAMAW99bWDzPDuwHouHZbdnZ2zQ2vA4BvePf3Y2aHdwJw995Dicfj5odXAXj0uNf6vj6QK7IDePK0T5LJZO6EtwPofzaQW8HtAMKvh3MzPEVRFGWI/gC0rm3hUNXjQgAAAABJRU5ErkJggg==" />
                                    </defs>
                                </svg>

                                <strong className="text-[16px]">24 hours a day</strong>
                                <p className="text-[16px] text-gray-500">7 days a week</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3868)" />
                                    <defs>
                                        <pattern id="pattern0_1_3868" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_1_3868" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1_3868" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAB+UlEQVR42u1Z0U3DQAztD4IFUBdAsADqBMACqBMAE9AJ6ATABHSDMgHdoGyQDcoGQQ/pIsu6kvPlnETte1J+SlXb7+z3fGEyIQiCIAiCIAiCIAiCEDg5PasP4SEBJOBICDifTn0JQICvzaa+ub0bXfEPj0/1bvcTza0YAev1Z/NjCDiW4l+Wyyavqqr8CLiezWoECH9H4KFb/mO1avLZbr+jY1BUAxAAgcJ3kMBQxcs80J3uGiCDy3GALuwL7vHoTnx9ex/GBVLar/RzP5//iZ1Fi1xt8HmxaAIgMZyOV/E6Vqobue8BOAWZGE6pdPG62yxE97IIISFra+aIXc6o9bYJggSZbJs4WX8v13F6XYVL2STmW3ZUl52j97tA6oKSoiklxmmwy5DcFUDCxeWVSexSlpzREqBPsc0mw0VLEpZD4CgIkKeIojG/YZ5jNonCpG7IzVJedHL3jN4IiJ1iKGSfTerPY6IZrrqBBKsm9LYHyP08VkjspFPFThNlcQV3Aiz7ubZJy/YYs9gUcXQlQM9o6n4edAJdY5lrfRNNsVgXAmJeb1VpkJdrb9gyU8WxOAF6lrv6dAmr/U8cixLQRYy8Xo605VOUgHDyOXbk9eiO1ONQ/J0gWt7zxUfu/QN5uXcA/zNEAkjA8RBAEARBEARBEARBEMRB4hejBknIGsSfUgAAAABJRU5ErkJggg==" />
                                    </defs>
                                </svg>

                                <strong className="text-[16px]">We'll reply within</strong>
                                <p className="text-sm text-gray-500 text-[16px]">five business days</p>
                            </li>
                            <li className="flex flex-col justify-center items-center">
                                <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <rect x="0.875" width="64" height="64" fill="url(#pattern0_1_3873)" />
                                    <defs>
                                        <pattern id="pattern0_1_3873" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0_1_3873" transform="scale(0.015625)" />
                                        </pattern>
                                        <image id="image0_1_3873" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEGUlEQVR42u2aaUhVQRiGb5qVS7S5p2m4kpWVmiVK2WL1o2yzfVWoSH9EKVQWlaKmoqLpJXFLTStKhQpUMMkwi5SEEKV+hFkgBrkEmor6xTdwQk295+qdOXOXBz5EPWfmfd9775m5MyOT6dDBhK9fWyErqwBOnroAnl5bYImpA+jPNgXZrEXkJ/6Of8f/43V4vdqb7uv7A5mZD8B7wzZiVNnC+/B+bEetjA8NDUFGRjZYWrlMy/j4wnawPWyXe/NNTS3g4emvEuPjC9vF9rk1X1DwGIyMramYFwrbx364Mx8bm0zV+Pgi/fFCXFwKU/NCkX6lpqjoqSTmhSL9S0VLyxcwNlkqaQDYP+pgbn54eBjWe2+V1LxQqAP1MA0AZ2s8mBeK6GHFwMAA2C5byVUAqAd1MQkgN/chV+aFIrpY4Ou3i8sAiC7atLX94NK8UEQfTfLyirgOgOijSXBIGNcBEH002egTIJk5Pf0lCq8h+mhiZu4kWrCNrRu4r/GbtmFcKcJJzrnzlyBgx36wsHRWeA/RRxODOeaixBsaWUF5eZWoV210OTl7wsXQcCgtfQFVVa/hzNlQmGdoKfp+oo8qIoXI5TlQXf1G1Ct2+EgwZGcXwrdv32FwcBCKi5/BjD5qNBHzaqxw2wAjIyPQ2dkFCxfZ/7eggW/nxMR70Nj4iVyHtLd3wK3bd2e8jEb00cTOfrVCETExSSCAq7tJSRmQkiKHmpq30N/fD6Opq/sAR46GwJy5Fip5UBJ9NAnce1yhiMLCJzAVGAKO12vXbVL5SEH00SQ+PlWhiMtXIic0jrO0q9fukD0AWkMl0Ud7EUTM8HU9Mpq8vWtr30N6ehZs9t+t9IgwnWKyOLJylQ+Xs0CiiwX4UOMxAKKLBd3dPWAy34Yr86gHdTFbFQqPuMlVAEQPS3796oQFC+24MI86UA/zleGEhDQuAiA6pADn7avdfSU1j/2jDsk2R+rrPzIZ3ydbH8D+Jd8ei45OlCQA0i8P4K7M9oB9TM1jf8x3gxSNCi6uXkzMYz+SPPUVgV99zS2cqZrH9rk+QNXQ0EhtlojtYvvcnxOqrKxW+ciA7VVUvFKf02KpqfdVGkByslz9zg0eDDqtEvN7951Qz0OTXV3dYL/cfUbmcW+Byye+WN69q/93JFbZmqW3mCykytSd6X51Dg2LUH/zSG9vHzg6eSh94qOn57dmBIDgNpcyAZSVvdQc8wJBh86IMo87RzJNpLW1jWyaTmV+toEZNDd/1swAkBs3Y7TjwTcZ+GAzNXOcdK7f0fFTswNA0tIyJwwgKipB880jeKDRwXHdGPNW1q6Aw6VMWygpeT4mgPz8R9pjXmBP4DFifsfOA9pnHsFDExgAngzRBaALQAvJyXmo3QEI5461NgAdHPAXndYJOQzqOzwAAAAASUVORK5CYII=" />
                                    </defs>
                                </svg>


                                <strong>STORE LOCATOR</strong>
                                <p className="text-sm text-gray-500">Find Nike retail stores near you</p>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>

            <Footer />
        </>
    );
}
