function Section2() {
  return (
    <>
      <div className="bg-purple-50 m-4 w-full md:w-[1200px] mx-auto p-4">
        <h1 className="text-center text-blue-300 text-2xl mt-3">Why Choose Health?</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2">
          <div className="md:col-span-2 md:row-span-1 ">
            <div className="shadow-lg rounded-xl h-auto flex flex-col items-center justify-center px-4 py-16">
              <h1 className="text-xl text-blue-400 ">A Personal Doctor Who Saves You Time</h1>
              <h2 >
                Your personal physician will provide you with targeted, long-term care and solutions to acute health problems.
                He or she will coordinate your treatment and any visits to our specialists according exactly to your
                availability.
              </h2>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 ">
            <div className="shadow-lg rounded-xl h-auto flex flex-col items-center justify-center px-4 py-16">
              <h1 className="text-xl text-blue-400">96% Care in One Place</h1>
              <h2>
                You will receive 96% of specialist care onsite at Health+. Provided by more than 90 experienced physicians in
                40 fields of medicine.
              </h2>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-1 md:col-start-1 ">
            <div className="shadow-lg rounded-xl h-auto flex flex-col items-center justify-center px-4 py-16">
              <h1 className="text-xl text-blue-400">24/7</h1>
              <h2>
                Our call center is available to you 24 hours a day, 365 days a year. In case of acute problems, we guarantee
                an appointment within 24 hours.
              </h2>
            </div>
          </div>
          <div className="md:col-span-2 md:row-span-1 md:col-start-2 ">
            <div className="shadow-lg rounded-xl h-auto flex flex-col items-center justify-center px-4 py-16">
              <h1 className="text-xl text-blue-400">Respect and Dignity</h1>
              <h2>
                A personal approach and enough time for each client are key for us. We replace the typical waiting rooms
                with several comfortable lounges with a pleasant atmosphere and refreshments.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;