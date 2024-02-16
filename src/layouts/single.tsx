import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Courses, Form } from "../components";
import { Types } from "../moduls/specialization";
import { UseReduce } from "../hooks";
import NavItem from "../components/navigationBar";
import Barmenu from "../components/barmenu";
import SearchBar from "../components/searchbar";
import Footer from "../components/footer";

const Single = () => {
  const { pathname } = useLocation();
  const { specializationID } = useParams();
  const [newCourses, setNewCourses] = React.useState<Types.IEntity.Courses[]>(
    []
  );
  const [isUpdated, setIsUpdated] = React.useState(false);
  const { state, dispatch } = UseReduce();
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    if (specializationID !== "new") {
      const specialization = state.find(
        (s) => s.id === Number(specializationID)
      );
      if (specialization) {
        setNewCourses(specialization.courses);
        setIsUpdated(true);
      }
    }
  }, [specializationID]);

  function onCourses(course: Types.IEntity.Courses) {
    setNewCourses([...newCourses, course]);
  }

  function onRemCourses(courseID: number) {
    setNewCourses((prevCourses) =>
      prevCourses.filter((c) => c.id !== courseID)
    );
  }

  function onClearCourse() {
    setNewCourses([]);
  }

  return (
    <div className="flex w-full items-center">
      <NavItem />
      <Barmenu />
      <SearchBar />
      <div className="flex w-full items-center gap-[20px]">
        <Form
          Courses={newCourses}
          onDel={onRemCourses}
          name={name}
          description={description}
          setName={setName}
          setDescription={setDescription}
          onClear={onClearCourse}
        />
        <Courses onAddCourse={onCourses} onDelCourse={onRemCourses} />
      </div>
      <Footer values={{ name, description, courses: newCourses }} />
    </div>
  );
};

export default Single;
