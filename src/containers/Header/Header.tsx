import { useState } from 'react'
import HeaderButton from './HeaderButton'

function Header() {

  const [currentPage, changePage] = useState("Home")


  function hoverCallback(headerButtonName: string) {
    changePage(headerButtonName)
  }

  return (
    <div className="flex flex-row w-100 justify-around">
      <HeaderButton faClass="fa-fan" name="Home" currentPage={currentPage} onHoverCallback={hoverCallback} />
      <HeaderButton faClass="fa-fan" name="Home" currentPage={currentPage} onHoverCallback={hoverCallback} />
      <HeaderButton faClass="fa-fan" name="Home" currentPage={currentPage} onHoverCallback={hoverCallback} />
      <HeaderButton faClass="fa-fan" name="Home" currentPage={currentPage} onHoverCallback={hoverCallback} />
    </div>
  )
}


export default Header
