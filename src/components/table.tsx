import { Table } from "@mantine/core";
import { Types } from "../moduls/specialization";
import Options from "./options";

interface TableElmProps {
  elements: Types.IEntity.Specialization[];
  handleID: (id: number) => void;
}

function TableElm({ elements, handleID }: TableElmProps) {
  const rows = elements.map((element) => (
    <>
      <Table.Tr key={element.name + element.status}>
        <Table.Td>{element.id + 1}</Table.Td>
        <Table.Td>
          
            <button onClick={() => handleID(element.id)}>{element.name}</button>
           
        </Table.Td>
        <Table.Td>
          <span className={element.info === "DEGREE" ? "" : "text-[#777E90]"}>
            {element.info}
          </span>
        </Table.Td>
        <Table.Td>
          <span
            className={`w-[70px] p-2 bg-[${
              element.status === "Active" ? "#45B26B" : "#EF466F"
            }] text-[#FCFCFD] rounded-md`}
          >
            {element.status}
          </span>
        </Table.Td>
        <Table.Td>
          <Options id={element.id} />
        </Table.Td>
      </Table.Tr>
    </>
  ));

  return (
    <div
      className="w-[50%] h-full flex flex-col border overflow-y-auto rounded-[10px]"
      style={{ boxShadow: "0px 8px 16px -8px #0F0F0F33" }}
    >
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>#</Table.Th>
            <Table.Th>Specialization</Table.Th>
            <Table.Th>Info</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {elements.length !== 0 ? (
            rows
          ) : (
            <>
              <h1>No Data Found</h1>
            </>
          )}
        </Table.Tbody>
      </Table>
    </div>
  );
}

export default TableElm;
