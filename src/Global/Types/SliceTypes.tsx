export interface ThemeState {
    value: boolean;
}

export interface State {
    themes: ThemeState
    task: Tasks
}

export interface Tasks {
    tasks: TaskItem[]
}

export interface TaskItem {
    id: string
    title: string
    state: string
    date: TaskState
}

export enum TaskState {
    normal = "TASK_INBOX",
    pinned = "TASK_PINNED"
}