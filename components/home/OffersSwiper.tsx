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



const OffersSwiper = () => {

    const [products,setProducts] = useState<ProductProps[]|[]>([]);

    useEffect(()=>{
        showProducts('deal-offers',setProducts);
    },[])


  return (
    <div className="offers-swiper">
       <div className="container">
       <Swiper
        slidesPerView={3}
        loop={true}
        className="wraper-center h-[250px]"
        breakpoints={{
          570: {
          //  slidesPerView: 3,
          },
        }}
      >
        {products?.map((product:ProductProps, i:number) => {
  
            return (
              <SwiperSlide
                key={product.id}
                className="broweserd-product"
              >
                <div
                  className="item-container"
                >
                  <Image
                    src={`/${product.image}.webp`}
                    height={98}
                    width={98}
                    alt=""
                  />
                  <p>{product.title}</p>
                  <div>
                    <span>{product.discount}</span>
                  </div>
                  <BrowserProduct section='deal-offers' productId={product.id} />
                </div>
              </SwiperSlide>
            );
        })}
      </Swiper>
       </div>
    </div>
  )
}

export default OffersSwiper