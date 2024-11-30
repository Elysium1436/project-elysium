import { useState } from "react";
import { NavLink } from "react-router-dom";

const ListSliderItem = ({
  parentName,
  childList,
}: {
  parentName: string;
  childList: Array<string>;
}) => {
  const [isToggled, setToggle] = useState(false);
  console.log(childList);

  function clickToggle() {
    setToggle(!isToggled);
  }

  const n_items = childList.length;
  const dynamicMaxHeight = `${(40 + 7) * n_items}px`;

  return (
    <li className="cursor-pointer select-none">
      <div
        className="flex flex-row items-center overflow-visible p-1 "
        onClick={clickToggle}
      >
        <div
          className={`${isToggled ? "bg-nier-dark-900" : "bg-none text-nier-dark-900"} text-[#d9d3b1] flex items-center justify-center border-[2px] border-nier-dark-900  p-2 mr-2 font-bold text-xl`}
        >
          <div className={`flex items-center justify-center w-1 h-1 `}>
            <span className="-mt-1.5 ">{isToggled ? "-" : "+"}</span>
          </div>
        </div>
        <span className="overflow-visible h-5 whitespace-nowrap inline-block -mt-1.5 text-nier-dark-900 font-medium">
          {parentName}
        </span>
      </div>
      <div
        className={`overflow-hidden flex flex-col transition-all ease-in-out duration-150`}
        style={{ maxHeight: `${isToggled ? dynamicMaxHeight : "0"}` }}
      >
        {childList.map((item, key) => {
          return (
            <NavLink to={`${parentName}/${item}`} key={key}>
              <div className="group transition-all duration-150 text-nier-dark-900">
                <div className="header-widening-bar-small h-[1px] mb-[1px]" />
                <div className="p-1 pl-3  flex flex-row items-center relative">
                  <div
                    className={`${false ? "w-full bg-header-secondary-color" : "w-0"} absolute top-0 bottom-0 left-0 bg-none group-hover:w-full group-hover:bg-header-secondary-color transition-all z-10`}
                  ></div>
                  <div
                    className={`${false ? "bg-header-main-color" : "bg-header-secondary-color"} inline-block p-2 mr-2  group-hover:bg-header-main-color z-20`}
                  />
                  <span
                    className={`${false ? "text-header-main-color" : "text-nier-dark-900"} z-20 group-hover:text-header-main-color`}
                  >
                    {item}
                  </span>
                </div>
                <div className="header-widening-bar-small h-[1px] mt-[1px]" />
              </div>
            </NavLink>
          );
        })}
      </div>
    </li>
  );
};

type ProjectItem = {
  [key: string]: string;
};

type Projects = {
  [key: string]: ProjectItem;
};

type ProjectsProp = {
  projectData: Projects;
};

const ListSlider = ({ projectData }: ProjectsProp) => {
  return (
    <ul className="w-[20vw] max-h-[400px] min-h-[400px] self-center  bg-[#d9d3b1] py-1 flex flex-col justify-between overflow-hidden ">
      <div className="mx-auto bg-nier-dark-700 h-[2px] w-[90%] mb-3 opacity-80" />
      <div className="scrollbar-nier">
        {Object.entries(projectData).map((skill, key) => {
          return (
            <ListSliderItem
              parentName={skill[0]}
              childList={Object.keys(skill[1])}
              key={key}
            />
          );
        })}
      </div>
      <div className="mx-auto bg-nier-dark-700 h-[2px] w-[90%] mt-auto opacity-80" />
    </ul>
  );
};

export default ListSlider;
