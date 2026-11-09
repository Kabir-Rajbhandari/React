import React from "react";

// export default function Header(){
//     return(

//     )
// }

function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <img
            className="mr-3 h-12"
            src="https://softpfp.com/wp-content/uploads/2026/07/Tuff-Anime-PFP-Dark-1.webp"
            alt="logo"
          />
        </div>
      </nav>
    </header>
  );
}
