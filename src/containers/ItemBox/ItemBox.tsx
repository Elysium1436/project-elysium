import { NavLink, useParams } from "react-router-dom";
import "./styles.css";

type ItemBoxArgs = {
  itemNames: Array<string>;
  paramName: string;
};

const ItemBox = ({ itemNames, paramName }: ItemBoxArgs) => {
  const param = useParams()[paramName];
  return (
    <div className="flex flex-col">
      <div className="w-[80%] self-center h-[3px]"></div>
      <ul className="w-[15vw] shadow-bigBox bg-[#d9d3b1]  ">
        {itemNames.map((itemName, index) => {
          const isActive = itemName === param;
          return (
            <li className="group relative flex flex-col" key={index}>
              <div
                className={`header-widening-bar-small mb-[2px] h-[1px]`}
              ></div>
              <div className="relative">
                <NavLink to={itemName}>
                  <div
                    className={`${isActive ? "w-full bg-header-secondary-color" : "w-0"} absolute top-0 bottom-0 left-0 bg-none group-hover:w-full group-hover:bg-header-secondary-color transition-all `}
                  />
                  <div
                    className={`${isActive ? "text-secondary-light" : "text-primary-light"} py-1 pl-3 flex flex-row items-center group-hover:text-secondary-light z-10`}
                  >
                    <div
                      className={`${isActive ? "bg-secondary-light" : "bg-primary-light"} inline-block w-3 h-3 bg-primary-light group-hover:bg-secondary-light mr-2 z-10`}
                    ></div>
                    <span className="-mt-1 z-10">{itemName}</span>
                  </div>
                </NavLink>
              </div>
              <div
                className={`header-widening-bar-small mt-[2px] h-[1px]`}
              ></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemBox;
