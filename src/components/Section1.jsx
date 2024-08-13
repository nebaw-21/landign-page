
import image3 from '../assets/image3.avif';

function Section1() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 md:gap-16 md:p-16">
        {/* First Box */}
        <div className="w-full mb-8 ">
  <div
    className="h-64 bg-cover bg-center "
    style={{ backgroundImage: `url(${image3})` }}
  >
    <div  className='md:flex md:items-center md:justify-center flex-wrap'>
    <div className="pt-16 md:w-[500px]  text-3xl bg-white bg-opacity-75">
      Alzheimers Disease Is Complex.
       Diagnosing It Doesnt Have to Be
    </div>

    </div>
  </div>
</div>


        {/* Second and Third Boxes */}
        <div className="flex flex-col md:flex-row md:gap-10 ">
          {/* Second Box */}
          <div className="mb-8 shadow-md md:w-1/2">
            <div className="p-4 bg-white text-2xl  ">
            Is it Alzheimers?
Everyone dealing with the challenge of dementia needs to know.
Now they can.
            </div>
          </div>
          

          {/* Third Box */}
          <div className="p-4 bg-white shadow-md md:w-1/2">
            <div>With just a small, easy-to-perform autopsy-validated 
skin biopsy, the DISCERN test informs the definitive 
diagnosis physicians need to provide the right care for 
their patients with dementia - and it paid for by Medicare.</div>
           
            <button className="mt-4 bg-blue-50 hover:bg-blue-100 rounded-2xl text-blue-600 font-bold py-1 px-3 text-sm ">
            Learn about the DISCERN Test →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;