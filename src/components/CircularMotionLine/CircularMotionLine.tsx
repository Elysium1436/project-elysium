import './styles.css'

interface CircularMotionLine {
  extraClasses: string
}

function CircularMotionLine({ extraClasses }: CircularMotionLine) {

  return (
    <div className={`absolute ${extraClasses}`}>
      <div className={`bg-gray-400 w-[5px] overflow-visible outer-rotation flex items-center justify-center ${extraClasses} `}>
        <div className="inner-rotation min-w-[800px] sm:min-w-[1000px] md:min-w-[1300px] lg:min-w-[1300px] xl:min-w-[1400px] h-[2px] bg-background-shape-color" />
      </div>
    </div>
  )
}



export default CircularMotionLine
