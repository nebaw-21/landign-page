export default function Footer(){
    return (
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-20 lg:px-8">
        <div className="grid  row-gap-2 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
  
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                DISCERIN
              </span>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
              DISCERN™ is the world's only NIH Gold Standard validated test that is highly accurate 
              in identifying the presence or absence of Alzheimer's Disease (AD) in a patient
              </p>
            
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
            Providers
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">The diagnostic challenge</p>
          
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">The body of evidence</p>
          
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">Getting started in early</p>
        
            </div>

            <div className="flex">
              <p className="mr-1 text-gray-800">FAQ</p>
        
            </div>
          </div>

          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">
            Patients & Caregivers
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800">All about DISCERN</p>
          
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">LeaN about memory loss</p>
          
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800">FAQ</p>
        
            </div>

          </div>

        </div>


        <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
          <p className="text-sm text-gray-600">
            © Copyright 2020 Lorem Inc. All rights reserved.
          </p>
          <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                F.A.Q
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }