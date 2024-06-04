export default function Footer() {
  return (
    <div className="flex flex-col px-5 py-10 mt-5 w-full max-w-[960px] max-md:max-w-full">
      <div className="flex justify-center items-center px-16 text-base leading-6 text-center text-slate-500 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full w-[707px] max-md:flex-wrap">
          <div>About Us</div>
          <div>Our Products</div>
          <div>Contact Us</div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 mt-6 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-4">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8853348e13bed8d9b914f29599fa9e1f891edd29dc269f83b84f1497dcec4127?"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1139579901cfa05bb848d062751638f90d0d9636d40cc78a1a18a488e1091808?"
            className="shrink-0 w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/152fdf2dfb82c12338703b439d755b3a4b9aa9dcf517535c42743f241c56c9d7?"
            className="shrink-0 w-6 aspect-square"
          />
        </div>
      </div>
      <div className="self-center mt-6 text-base leading-6 text-center text-slate-500">
        © 2022 Acme Co. All rights reserved.
      </div>
    </div>
  );
}
