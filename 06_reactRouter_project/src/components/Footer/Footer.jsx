import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://softpfp.com/wp-content/uploads/2026/07/Tuff-Anime-PFP-Dark-1.webp"
                alt="logo"
                className="mr-3 h-20 bg-no-repeat rounded-xl shadow-lg object-contain"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium flex flex-col gap-2">
                <li>
                  <Link
                    to="/"
                    className="pb-[1px] hover:border-b-[2px] border-blue-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="pb-[1px] hover:border-b-[2px] border-blue-300"
                  >
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Follow Us
              </h2>
              <ul className="text-gray-500 font-medium flex flex-col gap-2">
                <li>
                  <a
                    href="https://github.com/kabir-rajbhandari"
                    className="pb-[1px] hover:border-b-[2px] border-blue-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://np.linkedin.com/in/kabir-rajbhandari-288116317"
                    className="pb-[1px] hover:border-b-[2px] border-blue-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium flex flex-col gap-2">
                <li>
                  <Link
                    to="#"
                    className="pb-[1px] hover:border-b-[2px] border-blue-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="pb-[1px] hover:border-b-[2px] border-blue-300"
                  >
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center">
            &#169; 2026{" "}
            <a
              href="https://rajbhandarikabir.com.np/"
              className="hover:underline"
            >
              Kabir Rajbhandari
            </a>
            . All Rights Reserved
          </span>
          {/* <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
