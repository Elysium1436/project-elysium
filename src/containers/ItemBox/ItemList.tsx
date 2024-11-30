import { NavLink, useParams } from "react-router-dom";

const ItemList = ({
  itemNames,
  paramName,
}: {
  itemNames: Array<string>;
  paramName: string;
}) => {
  const params = useParams()[paramName];

  return (
    <div className="">
      <ul className="w-[15vw] min-h-[500px] flex flex-col justify-between  my-auto">
        {itemNames.map((itemName, key) => {
          const isActive = itemName === params;
          return (
            <div className="group">
              <div className="header-widening-bar-small h-[5px] mb-[1px]" />
              <li key={key} className="relative">
                <NavLink to={itemName}>
                  <div className="relative">
                    <div
                      className={`${isActive ? "w-full bg-header-secondary-color" : "w-0"} absolute top-0 bottom-0 left-0 bg-none group-hover:w-full group-hover:bg-header-secondary-color transition-all `}
                    />
                    <div
                      className={`${isActive ? "text-secondary-light" : "text-primary-light"} bg-secondary-light py-1 pl-3 flex flex-row items-center group-hover:text-secondary-light z-10`}
                    >
                      <div
                        className={`${isActive ? "bg-secondary-light" : "bg-primary-light"} inline-block w-3 h-3 bg-primary-light group-hover:bg-secondary-light mr-2 z-10`}
                      ></div>
                      <span className=" z-10">{itemName}</span>
                    </div>
                  </div>
                </NavLink>
              </li>
              <div className="header-widening-bar-small h-[5px] mt-[1px]" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default ItemList;
