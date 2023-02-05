import { ExternalLink, Github, Linkedin } from "lucide-react";
import { Button } from "./button";

export const Footer = () => {
  return (
    <div className="flex flex-row justify-evenly fixed bottom-0 left-0 right-0 bg-transparent p-4 font-extrabold text-blue-700">
      <a
        target="_blank"
        href="https://github.com/DevonGifford/Menu--TechnicalAssignment"
      >
        <div className="flex flex-col items-center gap-1 transition ease-in-out duration-150 hover:scale-110">
          <Button className="flex flex-row gap-2">
            <Github size={20} />
            Project Source Code
          </Button>
        </div>
      </a>

      <a target="_blank" href="https://devongifford.vercel.app/">
        <div className="flex flex-col items-center gap-1 transition ease-in-out duration-150 hover:scale-110">
          <Button className="flex flex-row gap-2">
            <ExternalLink size={20} />
            Portfolio Website{" "}
          </Button>
        </div>
      </a>

      <a target="_blank" href="https://www.linkedin.com/in/dbgifford/">
        <div className="flex flex-col items-center gap-1 transition ease-in-out duration-150 hover:scale-110">
          <Button className="flex flex-row gap-2">
            <Linkedin size={20} />
            LinkedIn Profile{" "}
          </Button>
        </div>
      </a>
    </div>
  );
};
