import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kabir-rajbhandari")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-300 text-black font-semibold p-4 text-3xl">
        GitHub Followers: {data.followers}
        <img
          src={data.avatar_url}
          alt="GitHub Profile"
          className="w-[300px
        ]"
        />
      </div>
    </>
  );
}

export const gitHubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/kabir-rajbhandari",
  );

  return response.json();
};
