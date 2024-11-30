import { useOutletContext, useParams } from "react-router-dom";
import Markdown from "react-markdown";

type Project = {
  [key: string]: string;
};

type ProjectData = {
  [key: string]: Project;
};

type Params = {
  skillName: string;
  projectName: string;
};

const ProjectDetail = () => {
  let { skillName, projectName } = useParams<Params>();
  const data: ProjectData = useOutletContext();
  console.log(data);

  if (!skillName || !(decodeURIComponent(skillName) in data)) {
    throw new Error("No skill found");
  }
  if (!projectName || !(decodeURIComponent(projectName) in data[skillName])) {
    throw new Error("No project found");
  }

  [skillName, projectName] = [
    decodeURIComponent(skillName),
    decodeURIComponent(projectName),
  ];

  const markdown = data[skillName][projectName];

  return (
    <div className="flex-1 min-h-[500px] flex flex-col ">
      <div className="bg-header-secondary-color py-3 px-2 flex flex-row items-center">
        <div className="inline-block bg-header-main-color p-1.5 mr-2" />
        <span className="inline-block my-auto text-header-main-color  -mt-1 leading-none">
          {skillName}
        </span>
      </div>
      <div className="prose prose-xl max-w-none font-nier-text bg-header-main-color  flex-1   scrollbar-nier ">
        <div className="max-w-[65ch] m-auto  prose-p:text-header-secondary-color prose-headings:text-header-secondary-color">
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
