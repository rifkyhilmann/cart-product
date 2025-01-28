import { DataProduct } from "@/data/product";
import Image from "next/image";


export default function Home() {
  return (
   <div className="w-full h-max min-h-screen p-10">
    <div className="w-full h-full flex flex-col gap-5">
      <h1 className="text-2xl font-medium">Dessert</h1>
      <div className="flex md:flex-row flex-col gap-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {DataProduct.map((item, i) => (
            <div key={i} className="w-full h-[300px] flex flex-col">
              <Image 
                src={item.image.desktop}
                width={50}
                height={50}
                alt="Image product"
                className="h-60 w-full bg-blue-500 rounded"
              />
              <div className="w-52 h-14 bg-red-500">

              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col h-[300px] w-full md:w-[300px] bg-blue-100">

        </div>
      </div>
    </div>
   </div>
  );
}
