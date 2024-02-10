import Link from "next/link";
import {
  FaLinkedinIn,
  FaGoogle,
  FaFacebookF,
  FaRegEnvelope,
} from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import SingUp from "./components/SingUp";
import SignIn from "./components/SignIn";
// import SignIn from "./components/SignIn";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <SignIn/>
          </div>
          <div className="w-2/5 bg-gray-800 text-white rounded-br-2xl py-36 px-12">
           <SingUp/>
           </div>
        </div>
      </main>
    </div>
  );
}
