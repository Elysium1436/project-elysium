import MovingCircle from "src/components/MovingCircle/MovingCircle";
import CircularMotionLineContainer from "src/components/CircularMotionLine/CircularMotionLineContainer";


interface BackgroundDecorationProps {
  positionClasses: string;
  linePosition: string
}


function GeometricDecoration({ positionClasses, linePosition }: BackgroundDecorationProps) {

  return (
    <div className="fixed w-full h-full top-0 left-0 pointer-events-none opacity-50 z-10">
      <MovingCircle extraClasses={`w-[90%] h-[90%] ${positionClasses}`} />
      <MovingCircle extraClasses={`w-[80%] h-[80%] ${positionClasses}`} />
      <CircularMotionLineContainer middleLinePosition={linePosition} extraClasses={`w-[50px] h-[50px] ${positionClasses}`} />
    </div>
  )
}



export default GeometricDecoration

