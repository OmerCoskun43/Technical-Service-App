import { useEffect } from "react";
import Glide from "@glidejs/glide";
import kombi1 from "../assets/kombi1.jpg";
import kombi from "../assets/kombi.jpg";
import kombi2 from "../assets/kombi2.jpg";

export default function Kombi() {
  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "slider",
      focusAt: "center",
      perView: 1,
      autoplay: 3000,
      animationDuration: 700,
      gap: 0,
      classes: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="container mx-auto flex flex-col   md:flex-row md:gap-5 md:items-center  md:pt-3 pb-6">
      {/*<!-- Component: Slider with controls inside --> */}

      <div className="relative md:w-[49%]  glide-01 mt-6 m-2 md:m-0 md:pt-6   ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden rounded-lg" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] rounded-lg relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={kombi}
                className="w-full max-w-full m-auto h-[350px] rounded-lg object-cover border-2 border-black"
              />
            </li>
            <li>
              <img
                src={kombi1}
                className="w-full max-w-full h-[350px] m-auto rounded-lg  object-cover border-2 border-black"
              />
            </li>
            <li>
              <img
                src={kombi2}
                className="w-full max-w-full h-[350px] m-auto rounded-lg object-cover border-2 border-black"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 flex items-center justify-between w-full h-0 px-4 top-1/2 "
          data-glide-el="controls"
        >
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/80 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex items-center justify-center w-8 h-8 transition duration-300 border rounded-full border-slate-700 bg-white/80 text-slate-700 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className=" md:w-[49%] md:h-[395px] m-2 md:m-0 text-justify  ">
        <h1 className="text-xl bg-white px-3 mb-1 md:mb-0 animate-bounce md:animate-none rounded-lg    md:text-3xl font-bold text- font-[monospace] text-blue-700">
          Kombi Tamiri ve Petek Temizliği
        </h1>
        <div className="bg-white p-[17px] rounded-lg  border-2 border-black">
          <p className="indent-6 ">
            Petek temizliği{" "}
            <span className="text-red-600 font-semibold">
              her iki yılda bir{" "}
            </span>{" "}
            yapılmasını tavsiye ediyoruz. Müşterilerimiz bizi aradıkları zaman
            peteklerinin yarısının sıcak yarısının soğuk olduğunu dile getirerek
            şikayetlerini bildirirler. Bunu sebebi peteklerin zaman içerisinde
            paslandığını ve biriken tortular nedeni ile sıcak suyun bütün
            bölgelere ulaşmasını engeller. Peteklerin ısınmamasına neden olur.
            Bu durum peteklerin temizlik zamanı geldiğine işarettir. Kombi petek
            temizliği esnasında eviniz ve işyeriniz hiçbir şekilde kirlenmez.
          </p>
          <p className="indent-6">
            Kombide kalıcı bir arıza var ise müşteri istekleri ve ihtiyaçları
            doğrultusunda bilgi alınır. Daha sonra kombi sıcak su ve petek
            radyatörler test edilir. Kombinin içi açılarak profesyonel
            cihazlarla ve tecrübeli uzman kadro ile arzalı parça tespit edilir.
            Müşteriye bilgi verilir. Kombi cihazınızda oluşacak arıza kodlarını
            sildirmek ve kombi kartlarını da tamir edebiliyoruz. Müşteri
            onayından sonra orjinal yedek parça ile değiştirilerek tamir edilir.
            Tüm arızalar ve sorunlar giderildikten sonra gaz kaçak testi ve
            menfez kontrol edilir. Güvenli bir şekilde kombi ve petek bakım
            tamir hissetimizden yararlanabilirsiniz.
          </p>
        </div>
      </div>
      {/*<!-- End Slider with controls inside --> */}
    </div>
  );
}
