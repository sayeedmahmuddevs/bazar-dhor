"use client"

import { ProductItem } from "@/ProductType";
import Card from "./Card";
import { useContext } from "react";
import { searchContext } from "@/context/contextApi";
interface SearchOverlayType{
    searchBar: ProductItem[]
}

const SearchOverlay = ({searchBar} : SearchOverlayType ) => {
    const {searchString} = useContext(searchContext)

    const searchData = searchBar.filter((country) => {
    if (searchString === "") {
      return country;
    }
    return country.nameBn
      .toLowerCase()
      .includes(searchString.toLowerCase().trim());
  });

  return (
    <div
      className={`inset-0 z-50 flex justify-center mt-30
                overflow-y-auto bg-black/50 backdrop-blur-sm ${searchString.length === 0 ? "hidden" : "fixed"}`}
    >
      <div
        className="relative mb-6 h-fit mt-10
                  w-full max-w-7xl rounded-2xl
                  bg-gray-800 p-6 shadow-2xl"
      >

        
 
      {searchData.length === 0 ? <div className="w-full max-h-100 h-full text-center text-white">
        no data here
      </div> : <div className="grid grid-cols-3 gap-10">
        {searchData.map((pro) => (
          <Card key={pro.id} card={pro} />
        ))}
      </div> }


        
      </div>
    </div>
  );
};

export default SearchOverlay;
