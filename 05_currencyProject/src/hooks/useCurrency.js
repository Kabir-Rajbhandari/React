// majority of cases the custom hooks is purely js not jsx

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // => incase of API 400 error
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      // maximum api is return in the form of String data type, we need to convert it into JSON format
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      // chaining concept
      // response came in string format  and converted into json format
      .then((res) => res.json())
      // json response accessing key
      .then((res) => {
        res[currency];
      });

    console.log(data);
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
