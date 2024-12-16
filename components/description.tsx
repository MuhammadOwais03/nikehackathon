import Image from 'next/image'
import L4 from '../public/l4.png'
import './styles/desc.css'

export default function ProductDescriptionPage() {
    return (
        <div className="descCont">
            <img
                src={L4.src}
                alt="Nike Air Force 1 PLT.AF.ORM"
                width="653"
                height="653"
            />
            <div className="descContent">
                <h1 className="text-2xl font-bold">Nike Air Force 1 PLT.AF.ORM</h1>
                <p className="text-gray-600 mt-4">
                    Turn style on its head with this crafted take on the Air Jordan 1 Mid. It's "Inside out" -inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh and coated upper, while the unexpected shading, rich texture of materials and aged midsole aesthetic give this release an artisan finish.
                </p>
                <p className="text-2xl font-bold mt-8 mb-[8rem]">₹ 8,695.00</p>
                <a id="cartBtn" href="/cart" className='bg-black text-white py-3 px-[12rem] rounded-full mt-12'>
                    
                        Add to Cart
                    
                </a>

            </div>
        </div>
    )
}
