import './styles.css'

interface HeaderButtonProps {
  name: string;
  onHoverCallback: (headerButtonName: string) => void;
  currentPage: string;
  iconComponent: React.ReactNode
}

function HeaderButton({ name, onHoverCallback, currentPage, iconComponent }: HeaderButtonProps) {

  function hoverEvent() {
    onHoverCallback(name)
  }

  return (
    <div onMouseEnter={hoverEvent} className={`${currentPage == name ? "active-header" : ""} group w-[170px] min-w-[170px] cursor-pointer select-none box-border overflow-hidden `}>

      <div className={`header-widening-bar mb-[3px]`}></div>

      <div className="relative flex flex-row items-center transition-colors ease-in-out bg-header-main-color py-2 w-full">

        <div className="absolute h-full bg-header-main-color group-hover:bg-header-secondary-color w-0 top-0 bottom-0 transition-all ease-in-out z-10 group-hover:w-full flex flex-row items-center"></div>

        <div className="mr-2 ml-2 bg-header-secondary-color p-2 transition-colors ease-in-out text-header-main-color group-hover:bg-header-main-color group-hover:text-header-secondary-color z-20">
          {iconComponent}
        </div>

        <div className=" transition-colors ease-in-out text-header-secondary-color group-hover:text-header-main-color z-20 font-nier-header text-[15px] uppercase tracking-wide font-[300]">
          <span className="my-auto inline-block  ">{name}</span>
        </div>

      </div >

      <div className={`mt-[3px] header-widening-bar `}></div>

    </div >
  )
}


export default HeaderButton
