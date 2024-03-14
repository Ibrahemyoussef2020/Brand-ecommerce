import { ProductProps } from "@/types";


interface ShowProductsProps{
  products:string,
  setProducts:(product:[]|ProductProps[])=>void,
} 

export const fetchProduct = async (
  products:string,
  setProduct:(product:{}|ProductProps)=>void,
  productId:string)=>{
    const isCategorySelected = products === '' || !products ? false : true ;
    const res = await fetch(`http://localhost:5000/${isCategorySelected ? `${products}/${productId}` : ''}`, {
        cache: "no-cache",
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        return res.json();
      })
      .then(data => setProduct(data));
}


export const showProducts = async (products:string,setProducts:(product:[]|ProductProps[])=>void)=>{
  const isCategorySelected = products === '' || !products ? false : true ;
  const res = await fetch(`http://localhost:5000/${isCategorySelected ? `${products}` : ''}`, {
      cache: "no-cache",
    })
    .then(res =>{
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }

      return res.json();

    })
    .then(data => setProducts(data));
  
}

export const fetchProductsToServer = async (products:string)=>{

  const isCategorySelected = products === '' || !products ? false : true ;
  const res = await fetch(`http://localhost:5000/${isCategorySelected ? `${products}` : ''}`, {
       cache:'no-cache',
  });
  
    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    
      return res.json()
}

export const fetchProductToServer = async (category:string,item:string)=>{

  const isCategorySelected = category === '' || !category ? false : true ;
  const res = await fetch(`http://localhost:5000/${isCategorySelected ? `${category}/${item}` : ''}`, {
    cache:'no-cache'
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  

    return res.json()
}




