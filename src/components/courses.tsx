import React from "react";
import Course from "./course";
import { SpecModule } from "../moduls";
import { Types } from "../moduls/specialization";

interface CoursesProps {
  onAddCourse: (course: Types.IEntity.Courses) => void;
  onDelCourse: (courseID: number) => void;
}

const Courses: React.FC<CoursesProps> = ({ onAddCourse, onDelCourse }) => {
  return (
    <div
      className="w-[50%] min-h-full grid grid-cols-3 place-items-center grid-flow-row gap-2 border p-[10px] overflow-y-auto rounded-[10px]"
      style={{ boxShadow: "0px 8px 16px -8px #0F0F0F33" }}
    >
      {SpecModule.Store.courses.map((course) => (
        <Course
          key={course.id}
          course={course}
          onAdd={onAddCourse}
          onDel={onDelCourse}
        />
      ))}
    </div>
  );
};

export default Courses;
