import { BrowserRouter as Router, createBrowserRouter } from "react-router-dom";
import Home from "./containers/Home/Home";
import Skills from "./containers/Skills/Skills";
import Projects from "./containers/Projects/Projects";
import Contact from "./containers/Contact/Contact";
import Root from "./Root";
import Test from "./containers/Skills/Subskills";
import Subskills from "./containers/Skills/Subskills";
import SkillContent from "./containers/Skills/SkillContent";
import ProjectDetail from "./containers/ProjectDetail/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
        children: [
          { path: ":skillName/:projectName", element: <ProjectDetail /> },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "skills",
        element: <Skills />,
        children: [
          {
            path: ":skillName",
            element: <Test />,
            children: [
              {
                path: ":subskillName",
                element: <SkillContent />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
