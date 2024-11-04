import { NavLink, useLocation } from "react-router-dom";
import "./styles.css";

interface HeaderButtonProps {
  name: string;
  iconComponent: React.ReactNode;
  to: string;
}

function HeaderButton({ name, iconComponent, to }: HeaderButtonProps) {
  const navClasses =
    "group w-[170px] min-w-[170px] cursor-pointer select-none box-border";

  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <NavLink to={to} className={navClasses}>
      <div className={`header-widening-bar mb-[2px]`}></div>

      <div className="relative flex flex-row items-center transition-colors ease-in-out bg-secondary-light dark:bg-nier-dark-900 py-2 w-full">
        <div
          className={`${isActive ? "bg-header-secondary-color w-full" : "bg-header-main-color w-0"} absolute h-full group-hover:bg-header-secondary-color top-0 bottom-0 transition-all ease-in-out z-10 group-hover:w-full`}
        ></div>

        <div
          className={`
          ${isActive ? " bg-secondary-light dark:bg-secondary-dark text-primary-light dark:text-primary-dark" : "bg-primary-light dark:bg-primary-dark text-secondary-light dark:text-secondary-dark "}
          mr-2 ml-2 p-2 transition-colors ease-in-out  
          group-hover:bg-secondary-light dark:group-hover:bg-secondary-dark group-hover:text-primary-light dark:group-hover:text-primary-dark z-20`}
        >
          {iconComponent}
        </div>

        <div
          className={`${isActive ? "text-secondary-light dark:text-secondary-dark" : "text-primary-light dark:text-primary-dark"} transition-colors ease-in-out group-hover:text-header-main-color z-20 font-nier-header text-[15px] uppercase tracking-wide font-thin `}
        >
          <span className="my-auto inline-block">{name}</span>
        </div>
      </div>
      <div className={`header-widening-bar mt-[2px]`}></div>
    </NavLink>
  );
}

export default HeaderButton;
