import GeometricDecoration from "../GeometricDecoration/GeometricDecoration";

export default function BackgroundDecoration() {
  return (
    <div className="absolute">
      <div className="tv-screen-filter"></div>
      <GeometricDecoration
        linePosition="top"
        positionClasses="top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      />
      <GeometricDecoration
        linePosition="bottom"
        positionClasses="bottom-0 right-0 translate-x-1/2 translate-y-1/2"
      />
    </div>
  );
}
