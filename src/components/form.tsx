import React from "react";
import { DeleteIcon, DnDIcon } from "../assets";
import { UseReduce } from "../hooks";
import { useParams } from "react-router-dom";
import { Types } from "../moduls/specialization";

interface FormProps {
  name?: string;
  description?: string;
  setName?: React.Dispatch<React.SetStateAction<string>>;
  setDescription?: React.Dispatch<React.SetStateAction<string>>;
  Courses: Types.IEntity.Courses[];
  onDel: (courseID: number) => void;
  onClear(): void;
}

const Form: React.FC<FormProps> = ({ Courses, onDel, onClear, name, setName,description, setDescription }) => {
  const { specializationID } = useParams();
  
  const [courses, setCourses] = React.useState<Types.IEntity.Courses[]>([
    ...Courses,
  ]);
  const { state, dispatch } = UseReduce();

  React.useEffect(() => {
    const specialization = state.find((s) => s.id === Number(specializationID));
    if (specialization) {
      setName!(specialization.name);
      setDescription!(specialization.description);
      setCourses(specialization.courses);
    }
  }, [specializationID, Courses]);

  return (
    <div
      className="w-[50%] h-full flex flex-col border overflow-y-auto rounded-[10px]"
      style={{ boxShadow: "0px 8px 16px -8px #0F0F0F33" }}
    >
      <form className="flex flex-col gap-[20px] w-full p-[24px] border-b">
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="name"
            className="text-[#777E90] font-semibold text-[12px]"
          >
            Specialization
          </label>
          <input
            id="name"
            type="text"
            value={name}
            className={`border py-[12px] px-[14px] w-full h-[40px] rounded-xl text-[18px] font-normal`}
            onChange={(e) => setName!(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="description"
            className="text-[#777E90] font-semibold text-[12px]"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            className="border py-[12px] px-[14px] w-full h-[100px] rounded-xl text-[18px] font-normal resize-none"
            onChange={(e) => setDescription!(e.target.value)}
          />
        </div>
      </form>

      <ul className="p-[24px] flex flex-col gap-3 place-items-start overflow-y-auto h-[360px]">
        {Courses.map((course) => (
          <li
            className="w-full flex items-center justify-between"
            key={course.title}
          >
            <div className="flex items-center gap-[15px]">
              <DnDIcon /> {course.title}
            </div>

            <button
              className="bg-[#ef46705a] w-8 h-8 grid place-items-center rounded-lg"
              onClick={() => {
                onDel(course.id);
              }}
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
      <div className="border-t py-[10px] px-[24px] flex items-end justify-end w-full bg-white">
        <button
          className="h-10 w-[91px] bg-[#3773ff76] rounded-lg text-[#3772FF]"
          onClick={onClear}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Form;
