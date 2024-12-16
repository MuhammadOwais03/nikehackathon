import feature from '../public/feature.jpeg'
import './styles/feature.css'

export default function Feature() {



    return (
        <div className='feature space-y-8 mb-8'>

            <h5 className='text-2xl font-bold ml-[8rem] mb-[8rem]'>Feature</h5>
            <img src={feature.src} alt="" className='feature_img' />
            <h1 className='text-center'>STEP INTO WHAT FEELS GOOD</h1>
            <p className='text-center'>Cause everyone should know the feeling of running in that perfect pair.</p>
            <button className='text-center'>Find Your Shoe</button>
        </div>
    )

}