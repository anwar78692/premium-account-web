import React from "react";
import Image from "next/image";
import ListItem from "./ListItem";
import ListItemComponent from "./ListItemComponent";

function SearchLogoAccount() {
  return (
    <div className="grid grid-cols-2 gap-8 px-10 border-b-2 pt-[6px] pb-[11px] border-gray-A300">
      <div className="col-span-1 flex items-center">
        <Image
          src="/assets/logo-no-background.png"
          alt="logo"
          className="cursor-pointer"
          onClick={() => { }}
          width={180}
          height={180}
        />
        <ListItemComponent />
      </div>

      <div className="col-span-1 flex justify-end items-center pl-16">
        <ListItem />
      </div>
    </div>
  );
}

export default SearchLogoAccount;
