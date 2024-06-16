import Image from 'next/image';
import HeroPic from '../../public/assets/Image1.png';
import Navbar from './main-nav';

export default function Header() {
  return (
    <header className="container mx-auto">
      <Navbar />
      <div className="grid sm:grid-cols-2 sm:bg-[#F99F1C] sm:text-white sm:mt-36 rounded-xl px-4">
        <div className="flex flex-col justify-center text-center mb-12 px-8 py-6">
          <h1 className="text-3xl font-semibold mb-4">
            Deliver Food To Your Door Step
          </h1>
          <p>Authentic Food, Quick Service, Fast Delivery</p>
        </div>
        <div className="rounded-3xl bg-[#fd9460] sm:bg-[#F99F1C]">
          <Image className="-mt-20 sm:mt-0" src={HeroPic} alt="HeroPic" />
        </div>
      </div>
    </header>
  );
}
