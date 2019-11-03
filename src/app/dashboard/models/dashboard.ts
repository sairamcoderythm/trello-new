
export interface Dashboard {
  id: number;
  name: string;
  taskList: TaskList[];
}

export interface TaskList {
  id: number;
  name: string;
  noteList: NoteList[];
}

export interface NoteList {
  id: number;
  name: string;
}


