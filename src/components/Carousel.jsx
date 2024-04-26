import { Carousel, Typography, Button } from "@material-tailwind/react";
import kombi from "../assets/kombi.jpg";
import camasir from "../assets/camasir.jpg";
import bulasik from "../assets/bulasik.jpg";
import tv from "../assets/tv.jpg";

import { useNavigate } from "react-router-dom";

const Carousell = () => {
  const navigate = useNavigate();
  return (
    <Carousel className="container mx-auto rounded-lg h-[calc(100vh-150px)] md:h-[calc(100vh-96px)]">
      <div className="relative h-full w-full">
        <img
          src={kombi}
          className="h-full w-full  object-cover md:object-none "
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl "
            >
              Kombi Tamiri & Petek Temizliği
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Alanında uzman ekibimiz, kombi tamiri ve petek temizliğini
              işlerinizi titizlikle ve verimli bi şekilde yapmaktadır.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button
                onClick={() => navigate("/kombi")}
                size="lg"
                className="bg-white text-black hover:bg-[#F012BE] hover:text-white"
              >
                Detay
              </Button>
              <Button
                onClick={() => navigate("/galeri")}
                size="lg"
                color="white"
                variant="text"
                className="bg-[#4DC8EE] text-white hover:bg-[#F012BE] "
              >
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={camasir}
          alt="image 2"
          className="h-full w-full object-cover md:object-fill "
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Çamaşır Makinası Tamiri
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Çamaşır makinesi servis hizmetimiz 09:00 – 22:00 saatleri arasında
              haftanın 7 günü geçerlidir. Whatsapp hattımız üzerinden çamaşır
              makinesi resminizi gönderebilir parça ve tamir hakkında fiyat
              bilgisi alabilirsiniz.
            </Typography>
            <div className="flex gap-2">
              <Button
                onClick={() => navigate("/camasir")}
                size="lg"
                className="bg-white text-black hover:bg-[#F012BE] hover:text-white"
              >
                Detay
              </Button>
              <Button
                onClick={() => navigate("/galeri")}
                size="lg"
                className="bg-[#4DC8EE] text-white hover:bg-[#F012BE] "
              >
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img src={bulasik} alt="image 3" className="h-full w-full  " />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/5">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Bulaşık Makinası
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Bulaşık Makinesi Servisi olarak haftanın 7 günü hizmetinizdeyiz.
              Kütahya merkez ve ilçelerine servisimiz vardır. Bulaşık makinesi
              motoru tamiri, kart tamiri ve benzeri tüm teknik servis işlemleri
              yapılmaktadır.
            </Typography>
            <div className="flex gap-2">
              <Button
                onClick={() => navigate("/bulasik")}
                className="bg-white text-black hover:bg-[#F012BE] hover:text-white"
              >
                Detay
              </Button>
              <Button
                onClick={() => navigate("/galeri")}
                size="lg"
                className="bg-[#4DC8EE] text-white hover:bg-[#F012BE] "
              >
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={tv}
          alt="image 3"
          className="h-full w-full object-cover md:object-none"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/5">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Tv Tamiri
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Günümüz bütün marka ve model Lcd, Led, Plazma Televizyonların
              tamir bakım ve montaj işlerini profesyonel olarak yapmaktadır.
            </Typography>
            <div className="flex gap-2">
              <Button
                onClick={() => navigate("/tv")}
                size="lg"
                className="bg-white text-black hover:bg-[#F012BE] hover:text-white"
              >
                Detay
              </Button>
              <Button
                onClick={() => navigate("/galeri")}
                size="lg"
                className="bg-[#4DC8EE] text-white hover:bg-[#F012BE] "
              >
                Galeri
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Carousell;
