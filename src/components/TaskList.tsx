import TaskItem from "./TaskItem";

export default function TaskList() {
  return (
    <>
      <ul className="list-group my-3">
        {/* Phần hiển thị các TaskItem */}
        <TaskItem />
      </ul>
    </>
  );
}
