import { MoveUp, RotateCcw } from "lucide-react";
import { Button } from "./button";

export const Footer = () => {
  // 🎯 do something with these buttons or remove future devon
  return (
    <div className="flex flex-row justify-center fixed bottom-0 left-0 right-0 bg-transparent p-4 font-extrabold text-blue-700 gap-4">
      <Button className="transition ease-in-out duration-150 hover:scale-110">
        <RotateCcw size={18} />
      </Button>
      <Button className="transition ease-in-out duration-150 hover:scale-110">
        <MoveUp size={18} />
      </Button>
    </div>
  );
};
