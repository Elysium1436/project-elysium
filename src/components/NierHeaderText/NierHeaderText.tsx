import useRandomTextReveal from "src/hooks/useRandomTextReveal";

const NierHeaderText = ({
  text,
  className,
  n_letters = 6,
  ms_change = 40,
  delay = 0,
}: {
  text: string;
  className: string;
  n_letters?: number;
  ms_change?: number;
  delay?: number;
}) => {
  var displayText = useRandomTextReveal(text, n_letters, ms_change, delay);
  return <h1 className={className}>{displayText}</h1>;
};

export default NierHeaderText;
