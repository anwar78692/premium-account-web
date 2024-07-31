import React from "react";
import Image from "next/image";
import ListItem from "./ListItem";
import Search from "@/pages/customcomponent/Search";

function SearchLogoAccount() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-4 px-10">
      <div className="col-span-1 flex flex-col items-center">
        <Image
          src="/assets/mainlogo.png"
          alt="logo"
          className="cursor-pointer"
          onClick={() => {}}
          width={236}
          height={236}
        />
      </div>
      <div className="col-span-1">
        <Search placeholder="Search products..." />
      </div>
      <div className="col-span-1 pt-5 pl-16">
      <ListItem/>
      </div>
    </div>
  );
}

export default SearchLogoAccount;
