import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaMailBulk } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="flex justify-between ">
    <div className="flex xl:justify-start lg:justify-start md:justify-start p-3">
      <Image
                      src='/images/jeetFav.png'
                      height="100"
                      width="100"
                      className="xl:h-28 lg:h-28 md:h-28 h-16 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt="Logo"
                    />
    </div>

      <div className="flex xl:justify-end lg:justify-end md:justify-end xl:pr-8 lg:pr-8 md:pr-8 space-x-8 pt-8 pr-8 justify-center">
        <Link href="https://github.com/Jeetcodes95" target="_blank" rel="noopener noreferrer">
        {/* <FaGithub size="1.5em" /> */}
          <FaGithub className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        </Link>
        <Link href="https://www.linkedin.com/in/jeetendra-barman-a4656611b/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        </Link>
        {/* <Link href="" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        </Link> */}
        <Link  href="https://www.instagram.com/official_jeet_kumar" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        </Link>
        <Link href="mailto:jkbarman75@gmail.com">
          <FaMailBulk className="text-white hover:text-gray-300 transition-colors duration-200 sm:text-xl lg:text-2xl" />
        </Link>
      </div>
      </div>
  );
}
