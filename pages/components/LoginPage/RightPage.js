import Image from 'next/image';
import React from 'react';

function RightPage() {
  return (
    <div className="relative h-full w-full">
      <Image 
        src="/assets/rightimage.png" 
        alt="login" 
        layout="fill" 
        objectFit="cover" 
        quality={100}
      />
    </div>
  );
}

export default RightPage;
