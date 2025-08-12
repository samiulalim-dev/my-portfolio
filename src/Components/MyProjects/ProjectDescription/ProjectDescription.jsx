import React, { useState } from "react";

const ProjectDescription = ({ description, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (description.length <= maxLength) {
    // টেক্সট ছোট হলে সব দেখাবে
    return <p className="text-gray-300 mb-4">{description}</p>;
  }

  return (
    <p className="text-gray-300 mb-4">
      {isExpanded ? description : `${description.slice(0, maxLength)}... `}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-indigo-400 cursor-pointer hover:underline ml-1"
      >
        {isExpanded ? "View Less" : "View More"}
      </button>
    </p>
  );
};

export default ProjectDescription;
