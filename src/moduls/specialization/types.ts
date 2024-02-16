export namespace IEntity {
  export type Courses = {
    id: number;
    title: string;
  };

  export interface Specialization {
    id: number;
    name: string;
    description: string;
    courses: Courses[];
    info: "DEGREE" | "NO DEGREE";
    status: "Active" | "No Active";
  }
}

export namespace IDispatch {
  export interface ADD {
    type: "ADD";
    payload: {
      title: string;
      description: string;
      info: "DEGREE" | "NO DEGREE";
      status: "Active" | "No Active";
      course: IEntity.Courses[];
    };
  }

  export interface Edit {
    type: "EDIT";
    payload: {
      ID: number;
      title: string;
      description: string;
      info: "DEGREE" | "NO DEGREE";
      status: "Active" | "No Active";
      course: IEntity.Courses[];
    };
  }

  export interface Remove {
    type: "REMOVE";
    payload: {
      ID: number;
    };
  }

  export interface Reset {
    type: "RESET";
  }
}

export interface IContext {
  state: IEntity.Specialization[];
  dispatch: (
    action: IDispatch.ADD | IDispatch.Edit | IDispatch.Remove | IDispatch.Reset
  ) => void;
}
