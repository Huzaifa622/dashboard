import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Timer from "../ui/timer";

function Header() {
  return (
    <div className="bg-[#09090B] fixed top-0 w-full border-b border-b-[#27272A] border-dashed">
      <div className=" flex justify-between items-center px-8 py-2 text-white">
        <div className="flex gap-4 items-center w-full" >
          <div className="text-2xl font-bold" >Logo</div>
        <div className="md:w-[30%] relative">
          <Search className="absolute left-2.5 top-2.5 " size={20} />
          <Input
            type="text"
            placeholder="Search..."
            className="  border-[#27272A] pl-10   text-white py-5 placeholder:text-white placeholder:font-bold "
          />
        </div>
        </div>
        <div><Timer/></div>
      </div>
    </div>
  );
}

export default Header;
