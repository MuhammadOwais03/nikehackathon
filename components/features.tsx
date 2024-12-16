import feature from '../public/feature.jpeg'
import './styles/feature.css'

export default function Feature() {



    return (
        <div className='feature'>

            <h5 className='text-2xl font-bold mb-4 ml-[8rem]'>Feature</h5>
            <img src={feature.src} alt="" className='feature_img' />
            <h1>STEP INTO WHAT FEELS GOOD</h1>
            <p>Cause everyone should know the feeling of running in that perfect pair.</p>
            <button>Find Your Shoe</button>
        </div>
    )

}