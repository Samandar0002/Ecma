import { Button } from "@mantine/core";
import React from "react";
import { useNavigate } from "react-router-dom";
import { OptionsIcon } from "../assets";
import { UseReduce } from "../hooks";
import toast from "react-hot-toast";

interface OptionsProps {
  id: number;
}

const Options: React.FC<OptionsProps> = ({ id }) => {
  const { dispatch } = UseReduce();
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  function handleDelete() {
    dispatch({
      type: "REMOVE",
      payload: {
        ID: id,
      },
    });
    setIsOpen((prev) => !prev);
    toast.success("Specialization deleted with id: " + id);
  }

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen((prev) => !prev)}>
        <OptionsIcon />
      </Button>
      {isOpen && (
        <div className="absolute grid place-items-start bg-white p-2 rounded-md z-10 shadow gap-2">
          <Button
            variant="outline"
            color="orange"
            onClick={() => {
              setIsOpen(false);
              navigate(`/edit/${id}`);
            }}
          >
            Edit
          </Button>
          <Button variant="light" color="red" onClick={handleDelete}>
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default Options;
