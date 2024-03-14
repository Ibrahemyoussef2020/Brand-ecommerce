'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { showProducts } from "@/app/apis";
import { ProductProps } from "@/types";
import Image from "next/image";
import BrowserProduct from "../general/BrowserProduct";

interface prop{
    section:string,
}

const BothHomeElectricSwiper = ({section}:prop) => {

    const [products,setProducts] = useState<[]|ProductProps[]>([]);

    useEffect(()=>{
        showProducts(section,setProducts);
    },[])


    
  
  return (
    <>
    <div className="offers-swiper">
       <div className="container">
       <Swiper
        slidesPerView={3}
        loop={true}
        className="wraper-center h-[250px]"
        breakpoints={{
          570: {
            slidesPerView: 5,
          },
        }}
      >
        {products?.map((product:ProductProps, i) => {
        
            return (
              <SwiperSlide
                key={product.id}
                className="broweserd-product"
              >
                <div
                  className="item-container"
                >
                  <div className="img-wrapper"> 
                    <Image
                        src={`/${product.image}.webp`}
                        height={98}
                        width={98}
                        alt=""
                    />
                  </div> 
                  <div className="text-wrapper">
                    <h3>{product.title.slice(0,10)}</h3>
                    <p>From USD 19</p>  
                  </div>

                  <BrowserProduct section={section} productId={product.id} />

                </div>
              </SwiperSlide>
            );
        })}
      </Swiper>
       </div>
    </div>

    <div className="src">
      <Link href={`/showResults/${section}`}>
        Source now
        <img src="/images/home-arrow.webp" alt="->" />
      </Link>
    </div>
    </>
  )
}

export default BothHomeElectricSwiper