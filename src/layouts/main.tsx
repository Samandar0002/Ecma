import React from "react";
import { UseReduce } from "../hooks";
import { Types } from "../moduls/specialization";

interface MainProps {
  id: number;
}

const Main: React.FC<MainProps> = ({ id }) => {
  const { state } = UseReduce();
  const [name, setName] = React.useState("");
  const [courses, setCourses] = React.useState<Types.IEntity.Courses[]>([]);

  React.useEffect(() => {
    const specialization = state.find((s) => s.id === Number(id));
    if (specialization) {
      setName(specialization.name);
      setCourses(specialization.courses);
    }
  }, [id, state]);

  return (
    <div
      className="w-[50%] min-h-[20vh] flex flex-col border overflow-y-auto rounded-[10px] overflow-hidden p-[20px]"
      style={{ boxShadow: "0px 8px 16px -8px #0F0F0F33" }}
    >
      <div className="w-full bg-[#353945] h-[40px] mb-3 rounded-md">
        <h2 className="text-[#FCFCFD] text-[16px] py-[8px] px-[15px]">
          {name}
        </h2>
      </div>
      {courses.length > 0 &&
        courses.map((course) => (
          <ul>
            <li className="text-[#23262F] text-[14px] font-medium h-[40px] py-[10px] px-4">
              <span>{course.id + 1}</span> {course.title}
            </li>
          </ul>
        ))}
      {courses.length === 0 && (
        <div className="w-full h-[20vh] grid place-items-center text-[#B1B5C3]">
          INFO NO FOUND
        </div>
      )}
    </div>
  );
};

export default Main;
