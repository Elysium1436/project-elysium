import { useState } from "react"
import { BsHouse } from "react-icons/bs"
import './styles.css'

interface HeaderButtonProps {
  name: string;
  onHoverCallback: (headerButtonName: string) => void;
  currentPage: string;
  faClass: string
}

function HeaderButton({ name, onHoverCallback, currentPage, faClass }: HeaderButtonProps) {

  function hoverEvent() {
    onHoverCallback(name)
  }

  return (
    <div onMouseEnter={hoverEvent} className={`${currentPage == name ? "active-header" : ""} group `}>
      <div className="absolute">
        <div className={`header-widening-bar mb-[1px]`}></div>
        <div className="absolute bg-nier-light w-10 z-50"></div>
        <div className="flex flex-row items-center transition-colors ease-in-out bg-[#49463E] w-min px-4 py-2 ">
          <div className="mr-2 bg-nier-light p-1 transition-colors ease-in-out text-[#49463E] group-hover:bg-[#49463E] group-hover:text-nier-light">
            <BsHouse />
          </div>
          <div className="transition-colors ease-in-out text-nier-light group-hover:text-[#49463E]">
            <h2>Home</h2>
          </div>
        </div >
        <div className={`mt-[1px] header-widening-bar `}></div>
      </div>
    </div >
  )
}


export default HeaderButton
