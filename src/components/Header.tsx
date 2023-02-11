import { ExternalLink, Github, Linkedin, UserSquare } from "lucide-react";
import { Button } from "./ui/button";
import FlipdishLogo from "./../assets/flipdish-logo.svg";

export const Header = () => {
  return (
    <>
      <nav className="flex flex-row justify-between">
        {/* SOURCE CODE BUTTON */}
        <div>
          <a
            target="_blank"
            href="https://github.com/DevonGifford/Menu--TechnicalAssignment"
          >
            <Button
              className="flex flex-row gap-2 transition ease-in-out duration-150 hover:scale-110"
              size={"sm"}
            >
              <ExternalLink size={20} />
              <span className="hidden sm:block">Project Source Code</span>
            </Button>
          </a>
        </div>
        {/* QUICK LINKS */}
        <div>
          <div className="flex flex-row gap-2">
            <a target="_blank" href="https://devongifford.vercel.app/">
              <Button
                className="transition ease-in-out duration-150 hover:scale-110"
                size={"sm"}
              >
                <UserSquare size={15} />
              </Button>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/dbgifford/">
              <Button
                className="transition ease-in-out duration-150 hover:scale-110"
                size={"sm"}
              >
                <Linkedin size={15} />
              </Button>
            </a>

            <a target="_blank" href="https://github.com/DevonGifford">
              <Button
                className="transition ease-in-out duration-150 hover:scale-110"
                size={"sm"}
              >
                <Github size={15} />
              </Button>
            </a>
          </div>
          <span className="text-sm font-semibold text-gray-400">
            by: Devon Gifford
          </span>
        </div>
      </nav>
      {/* HEADER SPLASH */}
      <header className="flex flex-col pt-3 items-center">
        <img src={FlipdishLogo} alt="Logo" height={100} width={200} />
        <span className="font-semibold">Technical Assessment</span>
      </header>
      <h1 className=" text-flipdish-blue text-2xl md:text-3xl lg:text-4xl tracking-wide font-extrabold py-5 mx-10">
        Today's Menu
      </h1>
    </>
  );
};
