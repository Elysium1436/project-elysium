import HeaderButton from "./HeaderButton";
import { BsHouse } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { TiCogOutline } from "react-icons/ti";
import { RiContactsBookLine } from "react-icons/ri";
import LightDarkToggle from "src/containers/LightDarkToggle/LightDarkToggle";

function Header() {
  return (
    <div className="flex flex-row w-full justify-center items-center gap-x-[26px] overflow-hidden min-w-full h-[15vh]">
      <HeaderButton iconComponent={<BsHouse />} name="Home" to="/" />
      <HeaderButton
        iconComponent={<IoNewspaperOutline />}
        name="Skills"
        to="/skills"
      />
      <HeaderButton
        iconComponent={<TiCogOutline />}
        name="Projects"
        to="/projects"
      />
      <HeaderButton
        iconComponent={<RiContactsBookLine />}
        name="Contact"
        to="/contact"
      />
    </div>
  );
}

export default Header;
