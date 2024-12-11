import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Caption, Container, CustomNavLink, PrimaryButton, Title } from "../../components/common/Design";
import { commonClassNameOfInput } from "../../components/common/Design";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { login } from "../../redux/features/authSlice";
import { Loader } from "../../components/common/Loader";

const initialState={
  email:"",
  password:"",
}

export const Login = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const [formData,setFormData]=useState(initialState);

    const {email,password}=formData;
    const {isLoggedIn, isError} =useSelector(state=> state.auth);

    const handleInputChange=e=>{
      const {name,value}=e.target;
      setFormData({...formData,[name]:value});
    }

`    const handleLogin = (e)=> {
      e.preventDefault();

      if(!email || !password) {
        return toast.error("All fields are required");
      }

      dispatch(login({email, password}));
    };`

    useEffect(() => {
      if (isLoggedIn) {
        navigate("/dashboard"); // Navigate on success            
      }
      
    }, [isLoggedIn, isError, navigate]);
  return (
    <>
      <section className="register pt-16 relative">
          {/* Background Circle */}
          <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute top-2/3"></div>

          {/* Section with Image Background */}
          <div
            className="pt-8 h-[40vh] relative content"
            style={{
              backgroundImage: 'url(../images/cover2.png)', // Replace with your image path
              backgroundSize: 'cover',  // Ensures the image covers the area
              backgroundPosition: 'center',  // Centers the image
            }}
          >
          <Container>
            <div>
              <Title level={3} className="text-secondary">
                Log In
              </Title>
              <div className="flex items-center gap-3">
                <Title level={5} className="text-green font-normal text-xl">
                  Home
                </Title>
                <Title level={5} className="text-secondary font-normal text-xl">
                  /
                </Title>
                <Title level={5} className="text-secondary font-normal text-xl">
                  Log In
                </Title>
              </div>
            </div>
          </Container>
        </div>
        <form onSubmit={handleLogin} className="bg-white shadow-s3 w-1/3 m-auto my-16 p-8 rounded-xl">
          <div className="text-center">
            <Title level={5}>Login</Title>
            <p className="mt-2 text-lg">
              Are you a new member? <CustomNavLink href="/register">Signup Here</CustomNavLink>
            </p>
          </div>

          <div className="py-5 mt-8">
            <Caption className="mb-2">Enter Your Email *</Caption>
            <input type="email" name="email" value={email} onChange={handleInputChange} className={commonClassNameOfInput} placeholder="Enter Your Email" required />
          </div>
          <div>
            <Caption className="mb-2">Password *</Caption>
            <input type="password" name="password"  value={password} onChange={handleInputChange}className={commonClassNameOfInput} placeholder="Enter Your Password" required />
          </div>
          <div className="flex items-center gap-2 py-4">
            <input type="checkbox" />
            <Caption>I agree to the Terms & Policy</Caption>
          </div>
          <PrimaryButton className="w-full rounded-none my-5">LOGIN</PrimaryButton>
          <div className="text-center border py-4 rounded-lg mt-4">
            <Title>OR SIGNIN WITH</Title>
            <div className="flex items-center justify-center gap-5 mt-5">
              <button className="flex items-center gap-2 bg-red-500 text-white p-3 px-5 rounded-sm">
                <FaGoogle />
                <p className="text-sm">SIGNIN WITH GOOGLE</p>
              </button>
              <button className="flex items-center gap-2 bg-indigo-500 text-white p-3 px-5 rounded-sm">
                <FaFacebook />
                <p className="text-sm">SIGNIN WITH FACEBOOK</p>
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
            By clicking the signup button, you create a Cobiro account, and you agree to Cobiros <span className="text-green underline">Terms & Conditions</span> &
            <span className="text-green underline"> Privacy Policy </span> .
          </p>
        </form>
        <div className="bg-green w-96 h-96 rounded-full opacity-20 blur-3xl absolute bottom-96 right-0"></div>
      </section>
    </>
  );
};