import MovingCircle from "src/components/MovingCircle/MovingCircle";
import CircularMotionLine from "src/components/CircularMotionLine/CircularMotionLine";


function BackgroundDecoration(positionClasses: string) {

  return (
    <div>
      <MovingCircle extraClasses={`w-[60vw] h-[60vh] ${positionClasses}`} />
      <MovingCircle extraClasses={`w-[55vw] h-[55vh] ${positionClasses}`} />
      <CircularMotionLine extraClasses="top-0 left-0" />
    </div>

  )
}



export default BackgroundDecoration
