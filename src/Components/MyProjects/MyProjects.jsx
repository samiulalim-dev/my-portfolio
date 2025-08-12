import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import ProjectDescription from "./ProjectDescription/ProjectDescription";
const projects = [
  {
    id: 1,
    name: "Daily Market BD ",
    description:
      "A full-stack web application to track and manage daily prices of fresh produce and essentials from local markets across Bangladesh.",
    image: "https://i.postimg.cc/Dz24WNCw/veg2.png",
    liveLink: "https://daily-market-bd.netlify.app/",
    githubLink: "https://github.com/samiulalim-dev/daily-market-bd-client/",
  },
  {
    id: 2,
    name: "ProFast",
    description:
      "ProFast is a modern, feature-rich courier service web application built with React, Firebase Authentication, and Tailwind CSS. Users can send parcels, track deliveries, and riders/admins can manage parcels and earnings.",
    image:
      "https://static.vecteezy.com/system/resources/previews/004/379/352/non_2x/delivery-van-driver-with-parcels-flat-character-courier-postman-deliveryman-holding-cardboard-boxes-and-order-receipt-isolated-cartoon-illustration-on-white-background-shipping-service-transport-vector.jpg",
    liveLink: "https://zap-shift-web.netlify.app/",
    githubLink: "https://github.com/samiulalim-dev/zap-shift-client-side/",
  },
  {
    id: 3,
    name: " Plant Tracker ",
    description:
      "PlantCare is a smart plant management web application where users can keep track of their plant care activities, explore plant information, and add new plants with personalized details.",
    image: "https://planttracer.com/img/Plant%20Tracer%20Logo.png",
    liveLink: "https://plant-tracker-web-app.netlify.app/",
    githubLink: "https://github.com/samiulalim-dev/plant-tracker-client/",
  },
];

const MyProjects = () => {
  return (
    <section id="projects" className="py-16  text-white">
      <div className="w-11/12 mx-auto">
        <h2 className=" text-3xl md:text-4xl font-bold mb-8  ">
          <div className="flex items-center gap-2">
            {/* Left Gradient Arrow */}
            <span className=" text-[#a855f7]">
              <MdArrowBackIos />
            </span>

            {/* Text */}
            <span className="text-white ">My Projects</span>

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

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(
            ({ id, name, description, image, liveLink, githubLink }) => (
              <div
                key={id}
                className="bg-[#111128] z-10 rounded-lg shadow-lg overflow-hidden hover:shadow-indigo-500 transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{name}</h3>
                  <ProjectDescription
                    description={description}
                    maxLength={100}
                  />

                  <div className="flex space-x-4">
                    <a
                      href={liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center lg:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow"
                    >
                      Live Demo
                    </a>
                    <a
                      href={githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white transition-colors duration-300 font-semibold"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
