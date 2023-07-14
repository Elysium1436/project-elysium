import { useState } from 'react'
import HeaderButton from './HeaderButton'
import { BsHouse, IoNewspaperOutline, TiCogOutline, RiContactsBookLine } from "react-icons/all"

function Header() {

  const [currentPage, changePage] = useState("Home")


  function hoverCallback(headerButtonName: string) {
    changePage(headerButtonName)
  }

  return (
    <div className="flex flex-row w-full  justify-center gap-x-[26px] pt-5 overflow-hidden min-w-full">
      <HeaderButton iconComponent={<BsHouse />} name="Home" currentPage={currentPage} onHoverCallback={hoverCallback} />
      <HeaderButton iconComponent={<IoNewspaperOutline />} name="About" currentPage={currentPage} onHoverCallback={hoverCallback} />
      <HeaderButton iconComponent={<TiCogOutline />} name="Projects" currentPage={currentPage} onHoverCallback={hoverCallback} />
      <HeaderButton iconComponent={<RiContactsBookLine />} name="Contact" currentPage={currentPage} onHoverCallback={hoverCallback} />
    </div>
  )
}


export default Header
