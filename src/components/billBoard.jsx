import { Carousel, Typography } from "@material-tailwind/react";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";

// eslint-disable-next-line react/prop-types
export default function BillBoard({ children }) {
  const billBoardData = [
    {
      image: img2,
      title1: "Transforming Oncology",
      title2: "Liquid biopsies provide better therapy options for more patients",
      title3: "Hedera Dx liquid biopsy solution radically streamlines tumor profiling and cancer treatment monitoring for all patients, enabling every hospital laboratory to run CE-IVDR compliant and clinically actionable liquid biopsies in-house.",
    },
    {
      image: img1,
      title1: "Transforming Oncology",
      title2: "Liquid biopsies provide better therapy options for more patients",
      title3: "Hedera Dx liquid biopsy solution radically streamlines tumor profiling and cancer treatment monitoring for all patients, enabling every hospital laboratory to run CE-IVDR compliant and clinically actionable liquid biopsies in-house.",
    },
  ];

  return (
    <div className="relative h-[605px] lg:h-[615px]">
      <div className="absolute inset-0 z-10">
        {children}
      </div>
      <Carousel
        autoplay={true}
        loop={true}
        transition={{ duration: 2 }}
        prevArrow={false}
        nextArrow={false}
        className="h-full"
      >
        {billBoardData.map((data, index) => (
          <div key={index} className="relative h-full w-full">
            <img
              src={data.image}
              alt={`image ${index + 1}`}
              className="h-full w-full object-cover brightness-150 duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 flex items-center justify-start bg-black/75 p-6">
              <div className="text-white space-y-4 lg:space-y-8 px-4 ;g:px-8">
                <Typography
                  variant="h2"
                  color="white"
                  className="text-sm "
                >
                  {data.title1}
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="text-2xl lg:text-5xl  w-2/3 lg:w-1/2"
                >
                  {data.title2}
                </Typography>
                <Typography
                  variant="h2"
                  color="white"
                  className="text-sm w-4/5 lg:w-1/2"
                >
                  {data.title3}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
