import { FilterProps, ProductProps, filterProductsListProps } from "@/types";
import { customStringIncludes } from ".";


const filterProductsList = (filters:FilterProps[]|[], list:ProductProps[]|[] , checkValuesLength:number = 1) => {
   
      let filterdList = list;

      if (!filters.length) {
            return list
      }else{
      
      filters.forEach((filter:FilterProps) => {
            
            switch (filter.type) {
                  case 'boolean': {
                        
                        //filterdList = filterdList.filter(item => item[filter.prop] === filter.checkd)
                        filterdList = filterdList.filter(product => filter.filterFn(product,filter))
                        break;
                  }
                  case 'list': { 
                        
                       filterdList = filterdList.filter((item:any) => customStringIncludes(filter.values,`${item[filter.prop]}`) ) 
                       ;
                       // filterdList = filterdList.filter(product => filter.filterFn(product,filter)) 
                        break;
                  }
                  case 'custom': {
                        filterdList = filterdList.filter(product => filter.filterFn(product,filter))
                        break;
                  }
                  case 'clear': {
                       // filterdList = filterdList.filter(product => filter.filterFn(product,filter))
                       break;
                   }
                  case 'minmax':{
                        filterdList = filterdList.filter(product => filter.filterFn(product,filter))
                  }
                  default:
                        break;
            }
      });

}

      
      return filterdList
}

export default  filterProductsList  