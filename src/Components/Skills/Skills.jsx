import { CgNpm } from "react-icons/cg";
import { FaDatabase } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiPython,
  SiCplusplus,
  SiC,
  SiBootstrap,
  SiGit,
  SiGithub,
  SiFigma,
  SiNetlify,
  SiVercel,
  SiStripe,
  SiJsonwebtokens,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const frontendSkills = [
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
];

const backendSkills = [
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Rest API", icon: <FaDatabase className="text-blue-500" /> },
  { name: "Firebase", icon: <IoLogoFirebase className="text-orange-400" /> },
  { name: "JWT", icon: <SiJsonwebtokens className="text-green-500" /> },
];

const programmingLanguages = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Python", icon: <SiPython className="text-blue-400" /> },
  { name: "C", icon: <SiC className="text-blue-600" /> },
];
const techTools = [
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "GitHub", icon: <SiGithub className="text-white" /> },
  { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
  { name: "npm", icon: <CgNpm className="text-white bg-[#CC3534]" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Netlify", icon: <SiNetlify className="text-teal-400" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Stripe", icon: <SiStripe className="text-indigo-500" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16  text-white">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold mb-8  ">
          <div className="flex items-center gap-2">
            {/* Horizontal Gradient Line */}
            <span
              className="flex-grow h-[2px] ml-4 rounded"
              style={{
                background: "linear-gradient(to right, #6366f1, #a855f7)",
              }}
            />
            {/* Left Gradient Arrow */}
            <span className=" text-[#a855f7]">
              <MdArrowBackIos />
            </span>

            {/* Text */}
            <span className="text-white">Skills</span>

            {/* Right Gradient Arrow */}
            <span className=" text-[#a855f7]">
              <MdArrowForwardIos />
            </span>

            {/* Horizontal Gradient Line */}
            <span
              className="flex-grow h-[2px] ml-4 rounded"
              style={{
                background: "linear-gradient(to right, #6366f1, #a855f7)",
              }}
            />
          </div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-30">
          {/* Frontend Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Front-End{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                ()
              </span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-center">
              {frontendSkills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex flex-col bg-black p-3 rounded-2xl  items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  title={name}
                >
                  <div className="text-4xl">{icon}</div>
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Back-End{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                ()
              </span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-center">
              {backendSkills.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex bg-black p-3 rounded-2xl flex-col items-center  hover:scale-110 transition-transform duration-300 cursor-pointer"
                  title={name}
                >
                  <div className="text-4xl">{icon}</div>
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Programming
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                ()
              </span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-center">
              {programmingLanguages.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex bg-black p-3 rounded-2xl flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  title={name}
                >
                  <div className="text-4xl">{icon}</div>
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech & Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">
              Tech & Tools{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500"
                style={{ display: "inline-flex", alignItems: "center" }}
              >
                ()
              </span>
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 justify-center">
              {techTools.map(({ name, icon }) => (
                <div
                  key={name}
                  className="flex bg-black p-3 rounded-2xl flex-col items-center hover:scale-110 transition-transform duration-300 cursor-pointer"
                  title={name}
                >
                  <div className="text-4xl">{icon}</div>
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
