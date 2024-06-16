import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import { FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import FooterPic from '../../public/assets/Image2.png';

export default function Footer() {
  return (
    <footer className="bg-[#FFA500] grid gap-2 sm:grid-cols-2 px-4 sm:pl-40">
      {/* left side */}
      <div className="px-2 p-10 sm:flex sm:flex-col sm:justify-around">
        <div className="relative sm:w-11/12">
          <input
            type="text"
            className="block w-full pl-6 pr-10 py-3 border border-transparent rounded-xl sm:rounded-xl leading-5 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-gray-300 focus:ring-0 text-xs"
            placeholder="Enter Your Email"
          />
          <div className="absolute inset-y-2 right-0 pr-2 flex items-center pointer-events-auto">
            <button className="flex justify-between items-center text-[#FC6011] font-medium sm:bg-[#FC6011] sm:text-white sm:rounded-xl sm:py-1 sm:pl-8 pr-5 sm:pr-4">
              <span>Subscribe</span>
              <BsArrowRight className="h-5 w-5 ml-2" />
            </button>
          </div>
        </div>
        <div className="flex gap-1 items-center flex-col-reverse sm:flex-row sm:items-end sm:justify-between my-4 py-2">
          <div className="text-center sm:text-start px-2">
            <h1 className="text-3xl font-extrabold my-4">
              pti<span className="text-[#FC6011] text-4xl">.</span>
            </h1>
            <p className="font-medium text-nowrap">
              Copyright&copy;Tripp. All Right Reserved
            </p>
          </div>
          <div className="flex gap-2 pr-1">
            <div className="h-10 w-10 bg-[#FC6011] sm:bg-white sm:text-[#FC6011] rounded-full text-white flex justify-center items-center">
              <FaGoogle />
            </div>
            <div className="h-10 w-10 bg-[#FC6011] sm:bg-white sm:text-[#FC6011] rounded-full text-white flex justify-center items-center">
              <FaTwitter />
            </div>
            <div className="h-10 w-10 bg-[#FC6011] sm:bg-white sm:text-[#FC6011] rounded-full text-white flex justify-center items-center">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      {/* <div className="hidden bg-green-400 sm:block p-2"> */}
      <Image className="hidden sm:block p-8" src={FooterPic} alt="FooterPic" />
      {/* </div> */}
    </footer>
  );
}
