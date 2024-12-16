import Image from 'next/image'; // Import Image from 'next/image'
import HeroImage from '../public/Hero.png'; // Import the image
import './hero.css'; // Import custom CSS styles

export default function Hero() {
    return (
        <>
            <div className="upper py-4">
                <h3>Hello Nike App</h3>
                <p>Download the app to access everything Nike. <a href="/download">Get Your Great</a></p>
            </div>

            <div className="middle mb-4">
                {/* Image with layout="intrinsic" to set width/height explicitly */}
                <Image   
                    src={HeroImage} 
                    alt="Nike App Hero Banner" 
                    width={1344}   // Max width of 1344px
                    height={700}   // Max height of 700px
                    layout="intrinsic"  // This allows image to maintain the aspect ratio
                />
            </div>
            
            <div className="lower">
                <h5 className='mb-8'>First Look</h5>
                <h1 className='mb-8'>Nike Air Max Pulse</h1>
                <p className='mb-8'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
                    —designed to push you past your limits and help you go to the max.</p>
                <div className="btns className='mb-8'">
                    <button>Notify Me</button>
                    <button>Shop Air Max</button>
                </div>
            </div>

        </>
    );
}
