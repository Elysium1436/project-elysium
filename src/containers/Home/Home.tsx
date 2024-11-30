import NierHeaderText from "src/components/NierHeaderText/NierHeaderText";
import Logo from "./yorha-01.svg?react";
import VerticalBarsWrapper from "../VerticalBarsWrapper/VerticalBarsWrapper";
import "./home.css";

export default function Home() {
  return (
    <VerticalBarsWrapper>
      <div className="flex flex-col mx-5 h-[80vh] z-50">
        <div className="flex-1 h-full w-full flex flex-row">
          <div className="flex-1 flex flex-col justify-between py-12">
            <div className="w-auto inline-block">
              <NierHeaderText
                text="Bryan Almeida Farias"
                className="nier-title text-5xl -mx-1 mb-4 text-nier-dark-900"
              />
              <h4 className="nier-title text-xl text-nier-dark-900 drop-shadow-smallText">
                Software Engineer, Data Scientist and Physicist
              </h4>
            </div>
            <div className="bg-[#d9d3b1] p-8 max-w-3xl shadow-bigBox z-50">
              <p className="text-4xl font-nier-text text-nier-dark-900 font-semibold drop-shadow-smallText">
                Born in the US in 1997. Passionate about technology and the
                boundless potential it has. I aspire to bring it to the world.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-[#d9d3b1] z-50 w-64 h-64 shadow-bigBox">
              <Logo
                height="100%"
                width="100%"
                className="logo-svg text-nier-dark-900"
              />
            </div>
          </div>
        </div>
      </div>
    </VerticalBarsWrapper>
  );
}
