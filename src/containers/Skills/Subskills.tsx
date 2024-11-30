import { Outlet, useOutletContext, useParams } from "react-router-dom";
import ItemBox from "../ItemBox/ItemBox";

type SubSkill = {
  subskill: string;
  description: string;
};

type Skill = {
  skillName?: string;
  subSkills: SubSkill[];
};

type Data = {
  [key: string]: Skill;
};

type Params = {
  skillName?: string;
  subskillName?: string;
};

const Subskills = () => {
  const { skillName } = useParams<Params>();
  const data: Data = useOutletContext();

  if (!skillName || !(skillName in data)) {
    throw new Error("No skill found");
  }
  const subSkills = data[skillName];

  return (
    <div className="flex flex-row flex-1">
      <div className="mr-8 flex flex-col items-center justify-center">
        <ItemBox
          itemNames={Object.keys(subSkills.subSkills)}
          paramName="skillName"
        />
      </div>
      <Outlet context={subSkills.subSkills} />
    </div>
  );
};

export default Subskills;
