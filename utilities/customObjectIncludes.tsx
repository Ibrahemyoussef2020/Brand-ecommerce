import { ProductProps } from "@/types";


const customObjectIncludes = (list:ProductProps[] , itemId:string):boolean => {

  const checkout = list?.some((product:ProductProps) => product.id === itemId ? true : false)
    
  return checkout;
}

export default customObjectIncludes