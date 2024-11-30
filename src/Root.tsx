import { Outlet, useLocation } from "react-router-dom";
import BackgroundDecoration from "./containers/BackgroundDecorations/BackgroundDecorations";
import Header from "./containers/Header/Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Root() {
  const location = useLocation();
  console.log(location.pathname.split("/"));
  return (
    <div>
      <div className="bg-grid-lines bg-50px bg-nier-light-300 dark:bg-nier-dark-950 bg-fixed h-screen z-0 overflow-clip">
        <div className="w-screen z-20 absolute">
          <Header />
          <div className="mx-auto w-[80vw] h-[85vh] overflow-hidden">
            <TransitionGroup component={null}>
              <CSSTransition
                key={location.pathname.split("/")[1]}
                timeout={{ enter: 300, exit: 0 }}
                classNames={"fade"}
                unmountOnExit
                in={true}
              >
                <Outlet />
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <BackgroundDecoration />
      </div>
    </div>
  );
}
