import Markdown from "react-markdown";

const DescriptionBox = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="w-full flex flex-col max-h-[500px] ">
      <div className="py-1 px-2 bg-primary-light text-secondary-light">
        {name}
      </div>
      <div className="bg-secondary-light p-2  flex-1 scrollbar-nier">
        <div className="prose prose-xl max-w-[65ch] m-auto prose-p:text-header-secondary-color font-nier-text prose-headings:text-header-secondary-color ">
          <Markdown>{description}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
