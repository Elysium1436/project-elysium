import NierHeaderText from "src/components/NierHeaderText/NierHeaderText";
import ListSlider from "../ItemBox/ItemSlider";
import { Outlet } from "react-router-dom";
import VerticalBarsSibling from "../VerticalBarsWrapper/VerticalBarsSibling";
import data from "./projects.json";
export default function Projects() {
  return (
    <div className="h-[80vh] flex flex-row overflow-hidden">
      <VerticalBarsSibling />
      <div className="flex flex-col flex-1 py-12">
        <NierHeaderText
          text="Projects"
          className="nier-title text-5xl absolute -mx-1  text-nier-dark-900"
        />
        <div className="flex flex-col justify-center h-auto flex-1 ">
          <div className="flex flex-row gap-x-28 flex-1  justify-start  max-h-[500px]">
            <ListSlider projectData={data} />
            <Outlet context={data} />
          </div>
        </div>
      </div>
    </div>
  );
}
