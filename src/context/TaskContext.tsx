import React, { useState } from "react";
import TodoList from "../components/TodoList";
import type { Task } from "../interfaces/task.interface";

interface TaskContextType {
  tasks?: Task[];
  handleAddTask?: (task: Task) => void;
  handleUpdateTask?: (id: number | string, newTask: Task) => void;
  handleDeleteTask?: (id: number | string) => void;
  handleToggleTask?: (id: number | string) => void;
}

// Bước 1: Tạo context
const TaskContext = React.createContext<TaskContextType | undefined>(undefined);

export default function TaskContextProvider() {
  const [tasks] = useState<Task[]>([]);
  return (
    <TaskContext.Provider value={{ tasks }}>
      <TodoList />
    </TaskContext.Provider>
  );
}
