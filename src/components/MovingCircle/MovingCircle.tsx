import './styles.css'

interface MovingCircleProps {
  extraClasses: string
}


function MovingCircle(circleParams: MovingCircleProps) {


  return (
    <div className={`absolute ${circleParams.extraClasses}`}>
      <svg className="w-full h-full text-background-shape-color moving-circle-animation" viewBox="0 0 110 110">
        <circle cx="55" cy="55" r="45%" fill="transparent" strokeWidth=".40px"></circle>
      </svg>
    </div>
  )
}



export default MovingCircle
