import React from "react";

interface ChildComponent {
  children: React.ReactNode;
}

const VerticalBarsWrapper = ({ children }: ChildComponent) => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-row mr-4">
        <div className="w-6 bg-nier-dark-800 mr-2"></div>
        <div className="w-2 bg-nier-dark-800 mr-1"></div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default VerticalBarsWrapper;
