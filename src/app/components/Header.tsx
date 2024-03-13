import { ExternalLink, Github, Linkedin, UserSquare } from "lucide-react";
import FlipdishLogo from "/public/flipdish-logo.svg";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-between pb-2 md:pb-0">
        <a
          target="_blank"
          href="https://github.com/DevonGifford/FlipDish"
          className="flipdish-btn h-6"
        >
          <ExternalLink size={20} />
          <span className="hidden md:block">Project Source Code</span>
        </a>
        <div className="flex flex-col space-y-1 items-center justify-center">
          <div className="flex flex-row gap-3">
            <a
              target="_blank"
              href="https://devongifford.vercel.app/"
              className="flipdish-btn"
            >
              <UserSquare size={15} />
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/dbgifford/"
              className="flipdish-btn"
            >
              <Linkedin size={15} />
            </a>

            <a
              target="_blank"
              href="https://github.com/DevonGifford"
              className="flipdish-btn"
            >
              <Github size={15} />
            </a>
          </div>
          <span className="hidden md:inline-block text-xs font-semibold text-gray-400">
            by: Devon Gifford
          </span>
        </div>
      </nav>
      <header className="flex flex-col items-center mt-2 border-b border-flipdish-blue md:mx-32">
        <Image
          src={FlipdishLogo.src}
          alt="FlipDish Logo"
          width={150}
          height={75}
          className="-translate-x-2"
          priority
        />
        <h1 className="text-flipdish-blue text-xl md:text-2xl font-bold pt-1 mb-2 md:pt-3 px-10 tracking-widest whitespace-nowrap ">
          Today's Menu
        </h1>
      </header>
    </>
  );
};

export default Header;
