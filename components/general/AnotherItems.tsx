'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { ProductProps } from "@/types";
import Image from "next/image";
import BrowserProduct from "../general/BrowserProduct";
import { useEffect, useState } from "react";
import { showProducts } from "@/app/apis";

interface props {
    category:string,
    title:string
}


const AnotherItems = ({category='consumer-sections',title}:props) => {
    const [products,setProducts] = useState<[]|ProductProps[]>([]);

    useEffect(()=>{
        showProducts(category,setProducts);
    },[])

 if (products?.length) {
  return (
    <section className="another-items">
       <div className="container">
       <h2>{title}</h2>
        <Swiper
        slidesPerView={2}
        loop={true}
        className="custom-swiper"
        breakpoints={{
          570: {
            slidesPerView: 5,
          },
        }}
      >
            <div className="products">
                {
                    products.map(product => <SwiperSlide
                        key={product.id}
                        className="custom-slide"
                      >
                    
                    <Link  href={`/itemDetails/${category}/${product.id}`}>
                        <Image
                            src={`/${product.image}.webp`}
                            alt=""
                            height={114}
                            width={112}
                        />
                        <div className="text">
                            <p className="price">${product.price}</p>
                            <p className="title-desc">{product.title.slice(0,15)} {product.description.slice(0,20)}</p>
                        </div>
                    </Link>
                    </SwiperSlide>
                    )
                }
            </div>
        </Swiper>
    </div>
    </section>
  )
 }else{
  return ''
 }
}

export default AnotherItems