import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Types } from "../moduls/specialization";
import { UseReduce } from "../hooks";
import toast from "react-hot-toast";

interface FooterProps {
  values?: {
    name: string;
    description: string;
    courses: Types.IEntity.Courses[];
  };
}

const Footer: React.FC<FooterProps> = ({ values }) => {
  const navigate = useNavigate();
  const { state, dispatch } = UseReduce();
  const { specializationID } = useParams();
  const [degree, setDegree] = React.useState(false);
  const [active, setActive] = React.useState(false);

  function handleSave() {
    if (!values || values.name.trim() === "" || values.description.trim() === "") {
      toast.error("Please fill in all fields before saving.");
      return;
    }    if (specializationID === ":new") {
      console.log("if ID: ", specializationID);
      dispatch({
        type: "ADD",
        payload: {
          title: values!.name,
          description: values!.description,
          course: values!.courses,
          info: degree ? "DEGREE" : "NO DEGREE",
          status: active ? "Active" : "No Active",
        },
      });
      navigate("/");
      toast.success(
        "New specialization added successfully, with title: " + values!.name
      );
    } else {
      console.log("else ID: ", specializationID);
      dispatch({
        type: "EDIT",
        payload: {
          ID: Number(specializationID),
          title: values!.name,
          description: values!.description,
          course: values!.courses,
          info: degree ? "DEGREE" : "NO DEGREE",
          status: active ? "Active" : "No Active",
        },
      });
      navigate("/");
      toast.success(
        "Specialization edited successfully, with title: " + values!.name
      );
    }
  }

  return (
    <div className="fixed bottom-0 left-[4.4rem] w-full  h-[3.5rem] flex justify-end items-center px-4 bg-white border-t border-gray-300">
      <button className=" absolute left-[60rem] flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:text-blue-700 font-semibold py-2 px-4 rounded">
        <input
          type="checkbox"
          className="w-4 h-4 inline-block border-2 border-gray-400 rounded-sm"
          checked={degree}
          onChange={(e) => setDegree(e.target.checked)}
        />
        No Degree
      </button>
      <button className=" absolute left-[70rem] flex items-center justify-center gap-2 border border-gray-300 text-gray-700 hover:text-blue-700 font-semibold py-2 px-4 rounded">
        <input
          type="checkbox"
          className="w-4 h-4 inline-block border-2 border-gray-400 rounded-sm"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />
        Active
      </button>
      <button
        className="absolute left-[78rem] text-red-700 bg-red-100 hover:bg-red-200 font-semibold py-2 px-4 rounded"
        onClick={() => navigate("/")}
      >
        Cancel
      </button>
      <button
        className="absolute left-[84rem] text-white bg-green-500 hover:bg-green-600 font-semibold py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default Footer;
