import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <>
      <div className="p-4 bg-gray-200 text-center font-bold text-fuchsia-600 text-[2rem]">
        User: {userId}
      </div>
    </>
  );
}
