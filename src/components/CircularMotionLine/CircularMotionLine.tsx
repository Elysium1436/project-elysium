import './styles.css'

interface CircularMotionLine {
  extraClasses: string
}

function CircularMotionLine({ extraClasses }: CircularMotionLine) {

  return (
    <div className={`absolute ${extraClasses}`}>
      <div className={` w-[15px] overflow-visible outer-rotation flex items-center justify-center ${extraClasses} `}>
        <div className="inner-rotation min-w-[800px] sm:min-w-[1000px] md:min-w-[1300px] lg:min-w-[1300px] xl:min-w-[1400px] h-[2px] bg-background-shape-color bg-nier-dark-900 dark:bg-nier-light-300" />
      </div>
    </div>
  )
}



export default CircularMotionLine