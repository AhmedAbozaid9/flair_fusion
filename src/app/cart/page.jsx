import React from "react";
import CartItemCard from "@components/cart/CartItemCard";

const products = [
  {
    _id: "650851cef901433f06bf3b0c",
    category: "top",
    type: "hot",
    gender: "women",
    title: "Draped halterneck body",
    desc: "Halterneck body in mesh with gathered seams for a ruched effect. Deep V-neckline and narrow straps that tie at the back of the neck. Concealed press-studs at the crotch and cutaway coverage at the back. Lined.",
    price: "599.00",
    images: [
      "https://eg.hm.com/assets/styles/HNM/16394865/1b1ac289926894080b0c45ec1ea4bafc21e5cffb/1/image-thumb__4697242__product_zoom_medium_606x504/1b1ac289926894080b0c45ec1ea4bafc21e5cffb.jpg",
      "https://eg.hm.com/assets/styles/HNM/16167368/1e07e4f0362d46987ce6534f9f2275dec2425675/2/image-thumb__4629721__product_zoom_medium_606x504/df601e97ecd5542fd82ab34f6018166f76688d7c.jpg",
      "https://eg.hm.com/assets/styles/HNM/16394867/3d0a1338e5f3bc98b564f208cd201efb31727ab4/1/image-thumb__4697276__product_zoom_medium_606x504/3d0a1338e5f3bc98b564f208cd201efb31727ab4.jpg",
      "https://eg.hm.com/assets/styles/HNM/16394866/4cd685fd151729429adda4840538fb08bbbb47ec/1/image-thumb__4697259__product_zoom_medium_606x504/4cd685fd151729429adda4840538fb08bbbb47ec.jpg",
      "https://eg.hm.com/assets/styles/HNM/16394868/9429e4b174f41d773541da2c2eb8c5fd1e6f3139/1/image-thumb__4697293__product_zoom_medium_606x504/9429e4b174f41d773541da2c2eb8c5fd1e6f3139.jpg",
      "https://eg.hm.com/assets/styles/HNM/16167367/9f7590afe96a46180628747324b8d2262af33719/2/image-thumb__4629714__product_zoom_medium_606x504/beb88608fc7df6828c87f9fdaec41cf249f225e5.jpg",
      "https://eg.hm.com/assets/styles/HNM/16394869/ff7395d042f4fb1e152cf4e5da891e6a6b94ebd8/1/image-thumb__4697310__product_zoom_medium_606x504/ff7395d042f4fb1e152cf4e5da891e6a6b94ebd8.jpg",
    ],
  },
  {
    _id: "650851cef901433f06bf3afd",
    category: "dress",
    type: "new",
    gender: "women",
    title: "Pleated wrap dress",
    desc: "Ankle-length dress in a pleated weave made from a viscose blend. Long, flared sleeves and a wrapover front with a deep V-neckline and a wide tie belt at the waist. Unlined.",
    price: "1,699.00",
    images: [
      "https://eg.hm.com/assets/styles/HNM/16736346/168a0ad1dcc70be46f34747b5412a416f2d41baf/1/image-thumb__4895800__product_zoom_medium_606x504/168a0ad1dcc70be46f34747b5412a416f2d41baf.jpg",
      "https://eg.hm.com/assets/styles/HNM/16535652/25ac915a6494a38139a7ffcdaf22b615f60e9427/2/image-thumb__4813793__product_zoom_medium_606x504/7a0020599f580783088e860bbdf59c684f85520b.jpg",
      "https://eg.hm.com/assets/styles/HNM/16535653/33f0a1841e8859dbdf3af5fdd7bf35c472da6226/2/image-thumb__4813806__product_zoom_medium_606x504/efa7c1a96a5b563a2f9fa08cd647489438015b2e.jpg",
      "https://eg.hm.com/assets/styles/HNM/16736347/44714b4ec8155376dd0be79625438cd4769afc18/1/image-thumb__4895816__product_zoom_medium_606x504/44714b4ec8155376dd0be79625438cd4769afc18.jpg",
      "https://eg.hm.com/assets/styles/HNM/16736350/aef342ecf5e7567c8c6a3ff4abb25c86873911c2/1/image-thumb__4895867__product_zoom_medium_606x504/aef342ecf5e7567c8c6a3ff4abb25c86873911c2.jpg",
      "https://eg.hm.com/assets/styles/HNM/16736348/d7afa757c9b0120d5654826e1cebe2518fedfe5c/1/image-thumb__4895832__product_zoom_medium_606x504/d7afa757c9b0120d5654826e1cebe2518fedfe5c.jpg",
      "https://eg.hm.com/assets/styles/HNM/16736349/fda7cf525b7d4504488b13f7f83c2f4de5ea3ecf/1/image-thumb__4895850__product_zoom_medium_606x504/fda7cf525b7d4504488b13f7f83c2f4de5ea3ecf.jpg",
    ],
  },
  {
    _id: "650851cef901433f06bf3af2",
    category: "trousers",
    type: "new",
    gender: "men",
    title: "Cargo joggers",
    desc: "Joggers in a cotton weave with covered elastication and a drawstring at the waist, diagonal side pockets and flap back and leg pockets with concealed press-studs. Tapered legs with seams and darts at the knees and covered elastication at the hems.",
    price: "1,699.00",
    images: [
      "https://eg.hm.com/assets/styles/HNM/16985540/081c62f3a02579ab2a1c1dad3bbc8e1ca00a66b1/2/image-thumb__5050016__product_zoom_medium_606x504/3ebb44508dcf54fb960690e49943a5a5a5edd772.jpg",
      "https://eg.hm.com/assets/styles/HNM/16985539/472842dfc71e2c4e9645f113435786135d0f71ad/2/image-thumb__5049999__product_zoom_medium_606x504/93a45b6b878c64731c501ba3d72f9a20036fb6ce.jpg",
      "https://eg.hm.com/assets/styles/HNM/17092226/696b99ad3a9d9a840681b2de57c2b66dd6258e1b/1/image-thumb__5182154__product_zoom_medium_606x504/696b99ad3a9d9a840681b2de57c2b66dd6258e1b.jpg",
      "https://eg.hm.com/assets/styles/HNM/17092227/78cab175c4692311bcea24d20b97bfd4ed7346a0/1/image-thumb__5182175__product_zoom_medium_606x504/78cab175c4692311bcea24d20b97bfd4ed7346a0.jpg",
      "https://eg.hm.com/assets/styles/HNM/17092228/88e7320aedb81e56670a0954888a64b67c159c5e/1/image-thumb__5182194__product_zoom_medium_606x504/88e7320aedb81e56670a0954888a64b67c159c5e.jpg",
      "https://eg.hm.com/assets/styles/HNM/17092229/dee528591effb2b605925d877a20531fc030891e/1/image-thumb__5182216__product_zoom_medium_606x504/dee528591effb2b605925d877a20531fc030891e.jpg",
    ],
  },
];

const Page = () => {
  return (
    <>
      <h1 className="text-4xl my-4 font-semibold">Shopping Cart</h1>
      <main className="flex max-lg:flex-col gap-3 mx-1">
        <section className="p-4 mt-4 border border-gray-300 rounded-md flex flex-col flex-1">
          {products.map((product, idx) => (
            <>
              <CartItemCard key={product._id} product={product} />
              {!(products.length - 1 === idx) && (
                <div className="my-4 w-full h-[0.5px] bg-gray-300" />
              )}
            </>
          ))}
        </section>
        <section className="p-4 mt-4 border border-gray-300 rounded-md flex h-full flex-col">
          <div>
            <p>Do you have a coupon ?</p>
            <div className="flex items-center mt-3">
              <input
                type="text"
                placeholder="Coupon code"
                className="border border-gray-300 outline-none p-2"
              />
              <button className="px-4 py-2 bg-blue-950 text-white">
                Apply
              </button>
            </div>
            <div className="my-4 w-full h-[0.5px] bg-gray-300" />
          </div>
          <div>
            <div className="flex items-center justify-between py-2">
              <p>Items Price : </p>
              <span className="font-semibold"> {`${500.0} EGP`}</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <p>Shipping Price : </p>
              <span className="font-semibold">{`${30.0} EGP`}</span>
            </div>
            <div className="flex items-center justify-between py-2 ">
              <p>Total Price : </p>
              <span className="font-semibold">{`${530.0} EGP`}</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
