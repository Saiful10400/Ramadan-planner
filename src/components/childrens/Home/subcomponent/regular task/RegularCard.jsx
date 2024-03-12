import React, { useContext, useState } from "react";
import "./regularcard.css";
import { dataProvider } from "../../../../context api/ContextApi";
const RegularCard = ({ data, serial }) => {
  const { prayerTime } = useContext(dataProvider);



  // input checkmark test.
  const[checkmark,setCheckmark]=useState(null)
  const checkmarkHandle=(e)=>{
    setCheckmark({prayerId:e.target.id,isChecked:e.target.checked})

  }
  // submit button handle.
  const submitHandle=()=>{

  }
  return (
    <div className="w-full min-h-[300px] regularContainer bg-red-300 pt-4 px-4 bangla">
      <h1 className="text-center text-xl lg:text-2xl mb-5">
        চ্যালেঞ্জ - {(serial += 1).toLocaleString("bn-BD")}
      </h1>
      <h1 className="text-2xl lg:text-3xl font-semibold lg:font-bold">
        {data.title}
      </h1>
      <h1>
        ({" "}
        {data.mark.main.toLocaleString("bn-BD") +
          " " +
          "+" +
          " " +
          data.mark.bonus.toLocaleString("bn-BD")}{" "}
        )
      </h1>
      <h1 className={data.type==="saom"?"hidden":"block font-semibold mt-2 text-xl"}>ওয়াক্ত শুরু হবে : {prayerTime?.items[0][data.salatName]}</h1>
      <label
        className="flex justify-start mt-3 items-center gap-3"
        htmlFor={data.salatName||data.type}
      >
        <h1 className="text-lg lg:text-xl">
          {data.type === "saom" ? "সেহারি খেয়েছি" : "জামাতে সালাত আদায় করেছি"}
        </h1>
        <input onChange={checkmarkHandle}
          id={data.salatName||data.type}
          className="checkbox checkbox-secondary"
          type="checkbox"
        />
      </label>
      <button onClick={submitHandle} className="btn btn-ghost mt-3 mb-6 bg-[#444444] shadow-xl">সম্পূর্ণ করেছি</button>
    </div>
  );
};

export default RegularCard;
