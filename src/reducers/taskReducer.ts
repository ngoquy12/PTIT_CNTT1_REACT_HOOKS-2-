import type { Task } from "../interfaces/task.interface";

type Action =
  | {
      type: "ADD_TASK";
      payload: { id: number | string; name: string; isCompleted: boolean };
    }
  | {
      type: "UPDATE_TASK";
      payload: { id: number | string; name: string; isCompleted: boolean };
    }
  | { type: "DELETE_TASK"; payload: { id: number | string } }
  | { type: "TOGGLE_TASK"; payload: { id: number | string } };

export const taskReducer = (state: Task[], action: Action): Task[] => {
  return [];
};
