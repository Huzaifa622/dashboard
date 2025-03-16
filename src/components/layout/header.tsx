import { Input } from "../ui/input";
import { Search } from "lucide-react";
// import Timer from "../ui/timer";
import { AvatarDropdown } from "../ui/avatar-dropdown";
import { ModeToggle } from "../mode-toggle";

function Header() {
  return (
    <div className=" fixed top-0 bg-sidebar text-sidebar-foreground w-full border-b border-b-sidebar-border border-dashed">
      <div className=" flex justify-between items-center px-8 py-1 ">
        <div className="flex gap-4 items-center w-full">
          <div className="text-2xl font-bold ">Logo</div>
          <div className="md:w-[30%] relative">
            <Search className="absolute left-2.5 top-2.5 " size={20} />
            <Input
              type="text"
              placeholder="Search..."
              className="  border-sidebar-border pl-10   py-5  placeholder:font-bold "
            />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          {/* <Timer /> */}
          <AvatarDropdown />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Header;
