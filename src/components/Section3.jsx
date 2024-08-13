import image4 from "../assets/image4.jfif";
import image5 from "../assets/image5.jfif";
import image6 from "../assets/image6.webp";

function Section3() {
  return (
    <>
      <div className="p-4 md:p-8">
        <h1 className="text-2xl font-bold text-center mb-4 md:text-3xl md:w-1/3 md:mx-auto ">
          <strong className="text-red-400">HederaxDx</strong> liquid biosy solution expands treatment option for patients-without the hurdles
        </h1>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-full sm:w-auto flex justify-center">
            <img className="w-full max-w-[240px] rounded-lg shadow-lg" src={image4} alt="image4" />
          </div>
          <div className="w-full sm:w-auto flex justify-center">
            <img className="w-full max-w-[240px] rounded-lg shadow-lg" src={image5} alt="image5" />
          </div>
          <div className="w-full sm:w-auto flex justify-center">
            <img className="w-full max-w-[240px] rounded-lg shadow-lg" src={image6} alt="image6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section3;