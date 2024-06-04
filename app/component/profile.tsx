export default function Profile() {
  return (
    <div className="flex flex-col px-4 py-10 mt-4 w-full max-w-[960px] max-md:max-w-full">
      <div className="text-4xl font-black tracking-tighter text-neutral-900 max-md:max-w-full">
        About Us
      </div>
      <div className="mt-4 text-base leading-6 text-neutral-900 max-md:max-w-full">
        We are committed to providing the best products and services to our
        customers.
      </div>
      <div className="justify-center mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-4 w-full rounded-lg border border-solid bg-slate-50 border-slate-300 max-md:mt-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5aab80c367781b2f7c9c8839cc8300fdae88880e55204d1dd3b924714ec3dd4d?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Innovative Products
              </div>
              <div className="mt-1 text-sm leading-5 text-slate-500">
                Our products are designed with innovation in mind.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-4 w-full rounded-lg border border-solid bg-slate-50 border-slate-300 max-md:mt-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd5fbb7f9a03872b42df9db6ef382d2094fbadc8742e4c68de42fe9ed60b6b3?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                Customer Satisfaction
              </div>
              <div className="mt-1 text-sm leading-5 text-slate-500">
                We prioritize customer satisfaction in all our engagements.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow p-4 w-full rounded-lg border border-solid bg-slate-50 border-slate-300 max-md:mt-3">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b60472ddab031bd43c61416f1e1f0403d574e5839b09a07e971e4eb25e48755d?"
                className="w-6 aspect-square"
              />
              <div className="mt-3 text-base font-bold text-neutral-900">
                High Quality
              </div>
              <div className="mt-1 text-sm leading-5 text-slate-500">
                We ensure high quality in all our products and services.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
