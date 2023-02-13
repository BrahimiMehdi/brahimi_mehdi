import { Link as LinkS } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import {AiFillHome} from "react-icons/ai"
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  const showScroll = router.asPath === "/contact" ? false : true
  return (
    <header className="w-full grid   fixed top-0 z-50 bg-opacity-80 bg-dark-blue backdrop-blur intersect
     h-28 grid-cols-4 sm:grid-cols-6 md:grid-cols-9  text-white  ">
      <div id="topers" className="h-[1px] bg-yellow  w-0 absolute top-0"></div>
      <div id="topers" className="h-[1px] bg-yellow  w-0 absolute bottom-0"></div>

      <div className="w-full h-full relative col-span-1  md:col-span-4">
        <div data-line="1" className="w-[1px] sideLine bg-yellow h-0 absolute left-0"></div>
        <div data-line="2" className="w-[1px] sideLine bg-yellow h-0 absolute left-0"></div>
        <div data-info="1" className="w-full innerInfo opacity-0 h-full py-4 md:px-12 flex items-center justify-center md:justify-between">
          <Link className="md:block hidden" href={"/"}>
          <Image alt="picture contains my face" priority width={400} height={400} className="w-20 border-4 border-opacity-80 border-orange bg-stone-800 h-20 rounded-full object-center object-cover " src={"/pic.png"} />

          </Link>
            <Link href={"/"} className="text-xl md:block hidden font-bold uppercase tracking-widest">brahimi mehdi</Link>
            <Link href={"/"}>
                <AiFillHome className="text-3xl text-white" />
            </Link>
        </div>
      </div>
      <div className={`md:col-span-5  grid-cols-3 sm:grid-cols-5 ${showScroll ? "grid" :"hidden"}`}>
      <button className="w-full sm:block hidden h-full relative ">
        <div data-line="3" className="w-[1px] bg-yellow sideLine h-0 absolute left-0"></div>
        <LinkS offset={-112} spy={true} smooth={true} activeClass="text-yellow" data-info="2" to="/" className="h-full transition-all  duration-300 ease-out hover:scale-90 text-xs sm:text-sm tracking-widest opacity-0 w-full  font-semibold innerInfo cursor-pointer uppercase grid place-items-center">home</LinkS>
      </button>
      <button className="w-full sm:block hidden h-full relative ">
        <div data-line="4" className="w-[1px] bg-yellow sideLine h-0 absolute left-0"></div>
        <LinkS spy={true} offset={-112} smooth={true} activeClass="text-yellow" data-info="3" to="/about" className="h-full transition-all  duration-300 ease-out hover:scale-90 text-xs sm:text-sm tracking-widest opacity-0 w-full  font-semibold cursor-pointer innerInfo uppercase grid place-items-center">about</LinkS>
      </button>
      <button className="w-full h-full relative ">
        <div data-line="5" className="w-[1px] bg-yellow sideLine h-0 absolute left-0"></div>
        <LinkS offset={-112} spy={true} smooth={true} activeClass="text-yellow"  data-info="5" to="/services" className="h-full transition-all  duration-300 ease-out hover:scale-90 text-xs sm:text-sm tracking-widest opacity-0 w-full  font-semibold cursor-pointer innerInfo uppercase grid place-items-center">
            services
        </LinkS>
      </button>
      <button className="w-full h-full relative ">
        <div data-line="6" className="w-[1px] bg-yellow sideLine h-0 absolute left-0"></div>
        <LinkS offset={-112} spy={true} smooth={true} activeClass="text-yellow" data-info="6" to="/work" className="h-full transition-all  duration-300 ease-out hover:scale-90 text-xs sm:text-sm tracking-widest opacity-0 w-full  font-semibold cursor-pointer innerInfo uppercase grid place-items-center">work</LinkS>
      </button>
      
      
      <button className="w-full h-full relative ">
        <div data-line="7" className="w-[1px] bg-yellow sideLine h-0 absolute left-0"></div>
        <LinkS offset={-112} spy={true} smooth={true} activeClass="text-yellow"  data-info="8" to="/contact" className="h-full transition-all  duration-300 ease-out hover:scale-90 text-xs sm:text-sm tracking-widest opacity-0 w-full  font-semibold cursor-pointer innerInfo uppercase grid place-items-center">
            contact
        </LinkS>
      </button>
      </div>
      
    </header>
  );
};

export default Header;
