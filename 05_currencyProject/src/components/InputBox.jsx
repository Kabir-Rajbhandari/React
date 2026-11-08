import React from "react";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], // empty array
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const inputAmtId = useId();
  // console.log(inputAmtId);

  return (
    <>
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className={`w-1/2`}>
          <label
            htmlFor={inputAmtId}
            className="text-black/40 mb-2 inline-block"
          >
            {label}
          </label>
          <input
            id={inputAmtId}
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
            type="number"
            className="outline-none w-full bg-transparent py-1.5"
            placeholder="Amount"
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black/40 mb-2 w-full">Currency Type</p>
          <select
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          >
            {/* <option value="usd" >USD</option> */}
            {/* if we use loop in jsx we must need to add the key otherwise the React performance will be downgraded.. => remember the key while adding loops in jsx/react */}
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
