import CircularMotionLine from "./CircularMotionLine"


function CircularMotionLineContainer({ extraClasses, middleLinePosition }: { extraClasses: string, middleLinePosition: string }) {
  return (
    <div className={`absolute pointer-events-none ${extraClasses}`}>
      <CircularMotionLine extraClasses="top-0 right-0 origin-right" />
      <CircularMotionLine extraClasses={`${middleLinePosition === "top" ? "top-0 left-0 origin-left" : "bottom-0 right-0 origin-right"}`} />
      <CircularMotionLine extraClasses="bottom-0 left-0 origin-left" />
    </div>
  )
}



export default CircularMotionLineContainer
