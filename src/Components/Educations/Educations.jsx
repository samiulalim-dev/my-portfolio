import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="py-16  text-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-3xl font-bold mb-10 text-center">
          Education
          <span className="block h-1 w-16 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-2 rounded-full"></span>
        </h2>

        {/* Card */}
        <div className="max-w-3xl mx-auto  bg-black/60 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
          <div className="flex items-center gap-4">
            <FaGraduationCap className="text-4xl text-indigo-500" />
            <div>
              <h3 className="text-xl font-semibold">
                Diploma in Engineering (Computer Science & Technology)
              </h3>
              <p className="text-gray-300">
                Bogura Polytechnic Institute, Bogura
              </p>
              <p className="text-gray-400 text-sm">7th Semester (Ongoing)</p>
              <span className="text-sm text-gray-500">
                Expected Graduation: 2025
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
