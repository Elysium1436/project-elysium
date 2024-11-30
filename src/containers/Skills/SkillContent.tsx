import { useOutletContext, useParams } from "react-router-dom";
import { SubSkill } from "./Skills";
import DescriptionBox from "../DescriptionBox/DescriptionBox";

function SkillContent() {
  const subSkills = useOutletContext<SubSkill>();
  const { subskillName } = useParams();

  if (!subskillName || !(subskillName in subSkills)) {
    throw new Error("No skill found");
  }
  const subSkillContent = subSkills[subskillName];

  return (
    <div className="flex-1 h-full  flex flex-col justify-center ">
      <DescriptionBox
        name={subskillName}
        description={subSkillContent.description}
      />
    </div>
  );
}

export default SkillContent;
