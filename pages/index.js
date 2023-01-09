import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen bg-slate-100 flex flex-col items-center px-10">
        <div className="font-bold">Т.Ганхөлөг</div>
        <div className="w-60 h-60 bg-slate-400 rounded-full flex justify-center items-center">
          <img
            src="propic.jpeg"
            className="w-56 h-56 rounded-full object-cover"
          />
        </div>
        <div className="w-full h-40 bg-indigo-700 text-slate-100 flex flex-col justify-center items-center text-2xl font-bold">
          About me
          <div className="text-sm">tailbar</div>
        </div>
        <div className="w-30 h-30 text-black bg-slate-200 ">
          <div className="font-bold">Details</div>
          <div className="fond-normal text-sm">Name</div>
          <div className=" font-normal text-ms">Hunter Norton</div>
          <div className="fond-bold">Age</div>
          <div className="text-sm">30 years</div>
          <div className="font-bold">Location</div>
          <div className="fond-normal text-sm">Ulaanbaatar, HUD</div>
        </div>
        <div className="w-80 h-20 bg-slate-200 flex justify-center items-center gap-5">
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              src="instagram.png"
              className="w-6 h-6 rounded-full object-cover"
            />
          </div>
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="twitter.png " className="w-6 h-6 rounded-full" />
          </div>
          <div className="w-8 h-8  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="mdi-facebook"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
