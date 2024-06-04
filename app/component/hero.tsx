import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex overflow-hidden relative flex-col justify-end px-4 pt-4 mt-9 max-w-full rounded-xl min-h-[480px] w-[928px]">
      <Image
        priority
        height={300}
        width={300}
        alt="Gambar Hero"
        src="https://images.unsplash.com/photo-1459802071246-377c0346da93?q=80&w=1609&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col justify-end items-start px-10 pt-20 pb-6 max-md:px-5 max-md:max-w-full">
        <div className="mt-36 text-5xl font-black tracking-tighter text-white max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          Experience the worlds most innovative products
        </div>
        <div className="flex gap-0 py-2 pr-2 pl-4 mt-24 text-base leading-6 rounded-xl bg-slate-50 max-md:flex-wrap max-md:pl-5 max-md:mt-10">
          <div className="flex gap-4 my-auto text-slate-500 max-md:flex-wrap">
            <Image
              height={300}
              width={300}
              alt="Gambar Cari"
              loading="lazy"
              src="https://w7.pngwing.com/pngs/608/913/png-transparent-computer-icons-google-search-symbol-mobile-search-search-for-miscellaneous-logo-mobile-phones-thumbnail.png"
              className="shrink-0 my-auto w-5 aspect-square"
            />
            <input
              type="text"
              className="max-md:max-w-full"
              placeholder="Search for products"
            ></input>
          </div>
          <button className="flex flex-col justify-center px-5 py-3 font-bold tracking-wide whitespace-nowrap bg-blue-600 rounded-xl text-slate-50 hover:bg-blue-800">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
