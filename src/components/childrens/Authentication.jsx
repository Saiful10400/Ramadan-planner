
import { useContext, useState } from "react";
import "./authentication.css";
import { FaCamera } from "react-icons/fa";
import { Link, useHref, useNavigate } from "react-router-dom";
import { dataProvider } from "../context api/ContextApi";
import useImgUpload from "../../Utility/useImgUpload";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../firebase_config";
import { axiosPublic } from "../../Utility/useAxiosPublic";
const Authentication = () => {
  const move=useNavigate()
  //input field style.
  const inputStyle =
    "text-black w-[90%] mx-auto block focus:outline-none text-lg py-1 px-2 rounded-lg mb-6 bangla";

// identify is this login or registration page.
const pageUrl=useHref()

// get context api data.
const{CreateUser,userLogin,user}=useContext(dataProvider)
console.log(user)

  // profile photo handle.
  const photoUpload=useImgUpload()
  const [profilePhotoBaseCode, setProfilePhotoBaseCode] = useState(null);
  const [profilePhotourl,setProfilePhotoUrl]=useState(null)
  const profilePhotoHandle = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePhotoBaseCode(reader.result);
    };
    if(file){
      reader.readAsDataURL(e.target.files[0]);

    // upload profile photo into server.
    photoUpload(file)
    .then(res=>res.json())
    .then(result=>{
      setProfilePhotoUrl(result.data.display_url)
    })
    }
   
  };
  // login and registration handle.
  const [errorMessage,setErrorMessage]=useState(null)
  const userFormHandle=(e)=>{
    e.preventDefault()
    const form=e.target
    const userName=form?.userName?.value
    const email=form.email.value
    const password=form.password.value

    // now its time for login and signup.
    if(pageUrl==="/register"){
      // for registartion page.
      if(profilePhotourl&&profilePhotoBaseCode){
        CreateUser(email,password)
      .then(res=>{
        updateProfile(auth.currentUser,{displayName: userName, photoURL: profilePhotourl})
        .then(()=>{
          // add the new user into the database.
          axiosPublic.post("/create_a_new_user",{userName,PhotoUrl:profilePhotourl,userEmail:email,userPassword:password,created:new Date()})
          .then(res=>{
            if(res.data.insertedId){
              move("/")
            }
          })
        })
      })
      }else{
        setErrorMessage("আপনি ছবি আপলোড করেননি")
      }
    }else{
      // for login page.
    
      userLogin(email,password)
      .then(res=>{
        console.log(res)
      })
    }
  }








  return (
    <div
      id="authContainer"
      className="h-[calc(100vh-55px)] flex justify-center items-center"
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
              accept="image/png, image/jpeg"
            />
            <h1 className={`text-center mt-2 text-red-600 font-bold`}>{errorMessage}</h1>
            {/* input form */}
            <form onSubmit={userFormHandle} className="mt-8">
              <input required
                type="text"
                name="userName"
                placeholder="আপনার নাম লিখুন।"
                className={inputStyle}
              />
              <input required
                type="email"
                name="email"
                placeholder="আপনার ইমেইল লিখুন।"
                className={inputStyle}
              />
              <input required
                type="password"
                name="password"
                placeholder="আপনার পাসওয়ার্ড লিখুন।"
                className={inputStyle}
              />
              <button className="btn btn-ghost border border-gray-300 w-[50%] mx-auto block text-xl">OK</button>
            </form>
            <Link to={"/login"}><h1 className="mt-4 text-center text-orange-600 underline font-semibold">আগে রেজিস্ট্রেশন করেছি</h1></Link>
          </div>
        </div>:<div className="h-[400px] flex justify-center flex-col items-center">
          <form onSubmit={userFormHandle} className="w-full">
          <input required
                type="email"
                name="email"
                placeholder="আপনার ইমেইল লিখুন।"
                className={inputStyle}
              />
              <input required
                type="password"
                name="password"
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
