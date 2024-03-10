
import { useState } from "react";
import "./authentication.css";
import { FaCamera } from "react-icons/fa";
import { Link, useHref } from "react-router-dom";
const Authentication = () => {

// identify is this login or registration page.

const pageUrl=useHref()
console.log(pageUrl);






  //input field style.
  const inputStyle =
    "text-black w-[90%] mx-auto block focus:outline-none text-lg py-1 px-2 rounded-lg mb-6 bangla";

  // profile photo handle.
  const [profilePhotoBaseCode, setProfilePhotoBaseCode] = useState(null);
  const profilePhotoHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePhotoBaseCode(reader.result);
    };
    file && reader.readAsDataURL(e.target.files[0]);
  };

  // login and registration handle.
  const userFormHandle=(e)=>{
    e.preventDefault()
  }

  return (
    <div
      id="authContainer"
      className="min-h-screen flex justify-center items-center"
    >
      <div
        id="loginContainer"
        className="text-white min-h-[500px] border min-w-[80%] lg:min-w-[400px] py-6 pt-9"
      >
        <h1 className="text-3xl lg:text-5xl text-center bangla font-thin">{pageUrl==="/register"?"রেজিস্ট্রেশন":"লগইন"}</h1>
        {
          pageUrl==="/register"?<div>
          
          {/* upload profile photo. */}
          <div>
            <label htmlFor="ProfilePhoto"><div className="w-[120px] h-[120px] border-2 border-gray-200 mx-auto mt-14 rounded-full overflow-hidden">
                {profilePhotoBaseCode ? (
                  <img
                    className="w-full h-full object-cover "
                    src={profilePhotoBaseCode}
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center flex-col">
                    <FaCamera />
                    <h1>Upload photo</h1>
                  </div>
                )}
              </div></label>
              
            

            <input
              className="hidden"
              id="ProfilePhoto"
              onInput={profilePhotoHandle}
              name="profilePhoto"
              type="file"
            />
            {/* input form */}
            <form onSubmit={userFormHandle} className="mt-8">
              <input
                type="email"
                placeholder="আপনার নাম লিখুন।"
                className={inputStyle}
              />
              <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন।"
                className={inputStyle}
              />
              <input
                type="password"
                placeholder="আপনার পাসওয়ার্ড লিখুন।"
                className={inputStyle}
              />
              <button className="btn btn-ghost border border-gray-300 w-[50%] mx-auto block text-xl">OK</button>
            </form>
            <Link to={"/login"}><h1 className="mt-4 text-center text-orange-600 underline font-semibold">আগে রেজিস্ট্রেশন করেছি</h1></Link>
          </div>
        </div>:<div className="h-[400px] flex justify-center flex-col items-center">
          <form className="w-full">
          <input
                type="email"
                placeholder="আপনার ইমেইল লিখুন।"
                className={inputStyle}
              />
              <input
                type="password"
                placeholder="আপনার পাসওয়ার্ড লিখুন।"
                className={inputStyle}
              />
              <button className="btn btn-ghost border border-gray-300 w-[50%] mx-auto block text-xl">Ok</button>
          </form>
          <Link to={"/register"}><h1 className="mt-4 text-center text-orange-600 underline font-semibold">এখনো রেজিস্ট্রেশন করিনি</h1></Link>
        </div>
        }
        
 
      </div>
    </div>
  );
};

export default Authentication;
