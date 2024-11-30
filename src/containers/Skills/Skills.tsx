import NierHeaderText from "src/components/NierHeaderText/NierHeaderText";
import { Outlet } from "react-router-dom";
import VerticalBarsSibling from "../VerticalBarsWrapper/VerticalBarsSibling";
import ItemList from "../ItemBox/ItemList";
import myData from "./skills.json";

type SubSkillContent = {
  description: string;
};

export type SubSkill = {
  [key: string]: SubSkillContent;
};

type Skill = {
  skillName?: string; // skillName is optional, since skillName2 and skillName1 don't have it
  subSkills: SubSkill;
};

// @ts-ignore
type Data = {
  [key: string]: Skill;
};

export default function Skills() {
  return (
    <div className="h-[80vh] items-center  w-full ">
      <div className="flex flex-row gap-x-3 h-full mr-8 ">
        <VerticalBarsSibling />
        <div className="flex flex-col py-12 ">
          <NierHeaderText
            text="Skills"
            className="nier-title text-5xl absolute   text-nier-dark-900"
          />
          <div className="flex flex-col my-auto  ">
            <ItemList itemNames={Object.keys(myData)} paramName={"skillName"} />
          </div>
        </div>
        <Outlet context={myData} />
      </div>
    </div>
  );
}
