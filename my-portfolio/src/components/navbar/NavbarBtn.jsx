import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";
const cvFilePath = "../../resume/Anvit_Singh_-_Full_Stack_Developer.pdf"
const NavbarBtn = () => {
  return (
    <a href={cvFilePath} download="Anvit_Singh_Resume.pdf">
    <button className=" px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r  from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow">
      Get Resume
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
    </a>
  );
};

export default NavbarBtn;
