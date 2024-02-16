import { IDispatch, IEntity } from "./types";

const specializations: IEntity.Specialization[] = [
  {
    id: 0,
    name: "Computer Science",
    description: "This is the description of Computer Science",
    courses: [
      {
        id: 0,
        title: "Java Development",
      },
      {
        id: 1,
        title: "Flutter",
      },
    ],
    info: "DEGREE",
    status: "Active",
  },
  {
    id: 1,
    name: "Foundation",
    description: "This is the description of Computer Science",
    courses: [
      {
        id: 0,
        title: "Java Development",
      },
      {
        id: 10,
        title: "React",
      },
    ],
    info: "DEGREE",
    status: "No Active",
  },
  {
    id: 2,
    name: "Foundation",
    description: "This is the description of Computer Science",
    courses: [
      {
        id: 0,
        title: "Java Development",
      },
      {
        id: 1,
        title: "Flutter",
      },
    ],
    info: "NO DEGREE",
    status: "Active",
  },
];

const courses: IEntity.Courses[] = [
  {
    id: 0,
    title: "Java Development",
  },
  {
    id: 1,
    title: "Flutter",
  },
  {
    id: 2,
    title: "iOS Development",
  },
  {
    id: 3,
    title: "Database",
  },
  {
    id: 4,
    title: "Java Backend",
  },
  {
    id: 5,
    title: "Android",
  },
  {
    id: 6,
    title: "Django",
  },
  {
    id: 7,
    title: "Python Development",
  },
  {
    id: 8,
    title: "FrontEnd",
  },
  {
    id: 9,
    title: "Angular",
  },
  {
    id: 10,
    title: "React",
  },
  {
    id: 11,
    title: "Vue",
  },
  {
    id: 12,
    title: "MERN Stack",
  },
  {
    id: 13,
    title: "NodeJs Backend",
  },
  {
    id: 14,
    title: "JS Full Stack",
  },
  {
    id: 15,
    title: "MERN Stack",
  },
  {
    id: 16,
    title: "NodeJs Backend",
  },
  {
    id: 17,
    title: "JS Full Stack",
  },
  {
    id: 18,
    title: "Android",
  },
  {
    id: 19,
    title: "Django",
  },
  {
    id: 20,
    title: "Python Development",
  },
];

const reducer = (
  state: IEntity.Specialization[],
  action: IDispatch.ADD | IDispatch.Edit | IDispatch.Remove | IDispatch.Reset
) => {
  switch (action.type) {
    case "ADD":
      const newItem: IEntity.Specialization = {
        id: state.length,
        name: action.payload.title,
        description: action.payload.description,
        info: action.payload.info,
        status: action.payload.status,
        courses: [...action.payload.course],
      };
      return [...state, newItem];
    

    case "EDIT":
      return state.map((specialization) => {
        if (specialization.id === action.payload.ID) {
          return {
            ...specialization,
            name: action.payload.title,
            description: action.payload.description,
            info: action.payload.info,
            status: action.payload.status,
            courses: [...specialization.courses, action.payload.course],
          };
        }
        console.log("updated specialization: ", specialization);
        return specialization;
      });

    case "REMOVE":
      return state.filter(
        (specialization) => specialization.id !== action.payload.ID
      );

    case "RESET":
      return state.map((specialization) => {
        const oldCourses = [...specialization.courses];

        return {
          ...specialization,
          courses: [...oldCourses],
        };
      });

    default:
      return state;
  }
};

export { courses, specializations, reducer };
