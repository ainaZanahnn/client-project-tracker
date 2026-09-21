export interface Task {
  id: number;
  title: string;
  status: string;
  assignee: string | null;
  dueDate: string | null;
}

export interface TaskPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface TaskResponse {
  data: Task[];
  pagination: TaskPagination;
}