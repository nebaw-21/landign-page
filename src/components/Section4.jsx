import image7 from "../assets/image7.avif";

function Section4() {
  return (
    <>
      <div
        className="bg-cover bg-center w-[1200px] mx-auto h-[400px] relative bg-[rgba(0,0,0,0.4)]"
        style={{ backgroundImage: `url(${image7})` }}
      >
        <div className="absolute top-1/2 left-8 -translate-y-1/2 text-white">
          <h1 className="text-3xl font-bold mb-4">
            Inform a definitive answer with DISCERN™™
          </h1>
          <h2 className="text-xl mb-8">
            The only single-step, autospy-validated test for Alzheimers disease.
          </h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Take the DISCERN™ Test →
          </button>
        </div>
      </div>
    </>
  );
}

export default Section4;