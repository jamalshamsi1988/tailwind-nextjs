import Link from "next/link";
import {
  FaLinkedinIn,
  FaGoogle,
  FaFacebookF,
  FaRegEnvelope,
} from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

const SignIn = () => {
  return (
    <>
      <div className="text-left font-bold">
        <spn className="text-red-500">APSignals</spn> Company
      </div>
      <div className="py-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Sign in to Account
        </h2>
        <div className="border-2 w-10 border-gray-900 inline-block mb-2"></div>
        <div className="flex justify-center my-2">
          <Link
            href="#"
            className="border-2 border-gray-200 rounded-full p-3 mx-1 font-semibold hover:bg-gray-900  hover:text-white"
          >
            <FaFacebookF className="text-sm" />
          </Link>
          <Link
            href="#"
            className="border-2 border-gray-200 rounded-full p-3 mx-1 font-semibold hover:bg-gray-900  hover:text-white"
          >
            <FaLinkedinIn className="text-sm " />
          </Link>
          <Link
            href="#"
            className="border-2 border-gray-200 rounded-full p-3 mx-1 font-semibold hover:bg-gray-900  hover:text-white"
          >
            <FaGoogle className="text-sm" />
          </Link>
        </div>
        <p className="text-gray-400 my-3">or use your email account</p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <FaRegEnvelope className="text-gray-400 m-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-100 outline-none text-sm flex-1"
            />
          </div>
          <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
            <IoMdLock className="text-gray-400 m-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-gray-100 outline-none text-sm flex-1"
            />
          </div>
          <div className="flex justify-between w-64 mb-5">
            <label className="flex items-center text-xs">
              {" "}
              <input type="checkbox" name="remember" className="mr-1" />
              Remember me
            </label>
            <Link href="#" className="text-xs">
              Forgot Password
            </Link>
          </div>
          <Link
            href="#"
            className="border-2 border-gray rounded-full px-12 py-2 inline-block font-semibold hover:bg-gray-900  hover:text-white"
          >
            Sing in
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignIn;
