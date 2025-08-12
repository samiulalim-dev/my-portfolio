import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import myPhoto from "../../assets/myPhoto.png";
const About = () => {
  return (
    <section id="about" className="py-16  text-white">
      <div className="w-11/12 mx-auto">
        <h2 className="text-4xl font-bold mb-8  ">
          <div className="flex items-center gap-2">
            {/* Left Gradient Arrow */}
            <span className=" text-[#a855f7]">
              <MdArrowBackIos />
            </span>

            {/* Text */}
            <span className="text-white">About Me</span>

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
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left side: Image */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src={myPhoto}
              alt="Profile"
              className="rounded-xl shadow-lg w-64 h-64 lg:w-80 lg:h-80 z-10 object-cover"
            />
          </div>

          {/* Right side: Text */}
          <div className="w-full md:w-2/3 text-center md:text-left space-y-6">
            <p className="text-lg leading-relaxed">
              Hi! I’m <strong>Samiul Alim</strong>, a passionate MERN stack web
              developer who loves building fast, scalable, and user-friendly web
              applications. I am currently pursuing a degree in Computer Science
              & Engineering and continuously improving my skills in frontend and
              backend development.
            </p>
            <p className="text-lg leading-relaxed">
              I enjoy working with React, Node.js, Express, and MongoDB to
              create modern web solutions. My goal is to deliver efficient and
              clean code while ensuring great user experiences.
            </p>
            <p className="text-lg leading-relaxed">
              When I’m not coding, I love exploring new technologies, watching
              movies, and enhancing my problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
