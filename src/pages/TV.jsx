import { useEffect } from "react";
import Glide from "@glidejs/glide";
import tv from "../assets/tv.jpg";
import tv1 from "../assets/tv1.jpg";
import tv2 from "../assets/tv2.jpg";
import tv3 from "../assets/tv3.jpg";

export default function TV() {
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
      <div className="relative md:w-[49%]  glide-01 mt-6 m-2 md:m-0 md:pt-6">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden rounded-lg" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] rounded-lg relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={tv}
                className="w-full max-w-full m-auto h-[350px] rounded-lg object-cover  border-2 border-black"
              />
            </li>
            <li>
              <img
                src={tv1}
                className="w-full max-w-full h-[350px] m-auto rounded-lg object-cover border-2 border-black"
              />
            </li>
            <li>
              <img
                src={tv2}
                className="w-full max-w-full h-[350px] m-auto rounded-lg border-2 object-cover border-black"
              />
            </li>
            <li>
              <img
                src={tv3}
                className="w-full max-w-full h-[350px] m-auto rounded-lg border-2 object-cover border-black"
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
      <div className=" md:w-[49%] md:h-[395px] m-2 md:m-0   ">
        <h1 className="text-xl bg-white px-3 mb-1 md:mb-0 animate-bounce md:animate-none rounded-lg text-center md:text-start    md:text-3xl font-bold text- font-[monospace] text-blue-700">
          Televizyon & LCD & Smart TV Tamiri
        </h1>
        <div className="bg-white p-[17px] rounded-lg  border-2 border-black text-justify">
          <p className="indent-6 ">
            <span className="text-red-600 font-semibold">
              Uzman teknik servis
            </span>{" "}
            olarak sizlerin arızalı veya problemli televizyonunu en sağlıklı
            şekilde tamir ederek ve bakım yaparak teslim edeceğimizin
            garantisini sunuyoruz.
          </p>
          <p className="indent-6 ">
            Sunduğumuz hizmetler;
            <span className="font-semibold"> Led TV, LCD TV </span>tamiri de
            bulunmaktadır. Sizin televizyonunuza uygun olanı seçin ve
            televizyonunuzu bize teslim edin.{" "}
          </p>
          <p className="indent-6">
            Şayet profesyonel bir TV tamircisi arıyorsanız, biz buradayız.
            Çalışma arkadaşlarımızın her biri sertifikalı ve eğitimlidir.
            Alanında uzman, tecrübeli, deneyimli teknisyenlerimiz ile aklınızda
            hiçbir soru işareti kalmayacak. Dürüst, güvenilir, samimi ekip
            arkadaşlarımıza, tv arızaları ile ilgili her şeyi danışabilir,
            sorabilirsiniz. Arkadaşlarımız, televizyonla ilgili en kaliteli
            hizmeti vermektedir. Gelişen teknolojiye ayak uyduran, yenilikçi
            ekip arkadaşlarımızla ilgili, bugüne kadar bir tek şikayet almadık.
            Öncelikli hedefimiz, müşteri memnuniyetidir. Bizleri aynı zamanda
            Instagram ve Facebook sayfamızdan da takip edebilirsiniz.
          </p>
        </div>
      </div>

      {/*<!-- End Slider with controls inside --> */}
    </div>
  );
}
