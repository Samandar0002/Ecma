import React from "react";
import { AddIcon, ExitIcon } from "../assets";
import { Types } from "../moduls/specialization";
import { useParams } from "react-router-dom";
import { UseReduce } from "../hooks";

interface CourseProps {
  course: Types.IEntity.Courses;
  onAdd(course: Types.IEntity.Courses): void;
  onDel(courseID: number): void;
}

const Course: React.FC<CourseProps> = ({ course, onAdd, onDel }) => {
  const { specializationID } = useParams();
  const { state, dispatch } = UseReduce();
  const [isAdded, setIsAdded] = React.useState(false);

  React.useEffect(() => {
    const specialization = state.find((s) => s.id === Number(specializationID));
    if (specialization) {
      const isCourseAdded = specialization.courses.some(
        (c) => c.id === course.id
      );
      setIsAdded(isCourseAdded);
    }
  }, []);

  const classes =
    "h-[80px] w-[30px] rounded-l-[900px] rounded-r-[20px] bg-[#45B26B]";
  const classesExit =
    "h-[80px] w-[30px] rounded-l-[900px] rounded-r-[20px] bg-[#EF466F]";
  const classesCourseActive =
    "w-[264px] h-[87px] flex items-center justify-between pl-[24px] pr-1 relative rounded-[8px] bg-[#F4F5F6]";
  const classesCourseInactive =
    "w-[264px] h-[87px] bg-[#23262F] flex items-center justify-between pl-[24px] pr-1 relative rounded-[8px]";

  const handleClick = () => {
    if (!isAdded) {
      onAdd(course);
      setIsAdded(true);
    } else {
      onDel(course.id);
      setIsAdded(false);
    }
  };

  return (
    <div className={isAdded ? classesCourseActive : classesCourseInactive}>
      <h2
        className={
          isAdded ? "text-[#B1B5C3] text-[18px]" : "text-white text-[18px]"
        }
      >
        {course.title}
      </h2>
      <button
        className={!isAdded ? classes : classesExit}
        onClick={handleClick}
      >
        {!isAdded ? <AddIcon /> : <ExitIcon />}
      </button>
    </div>
  );
};

export default Course;
