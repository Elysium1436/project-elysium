type DisplayBoxArgs = {
  title: string;
  description: string;
};

const DisplayBox = ({ title, description }: DisplayBoxArgs) => {
  return (
    <div>
      {" "}
      {title} {description}{" "}
    </div>
  );
};

export default DisplayBox;
