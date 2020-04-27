import {SHOW_ALL_DONE_TASKS, SHOW_ALL_IMPORTANT_TASKS} from "./actions/actions-description";

export const selectTasks = (state) => state.tasks;

export const selectFilter = state => state.filter;

export const selectFilteredTasks = state => {
    const tasks = selectTasks(state);
    const filter = selectFilter(state);
    if (!filter) return tasks;
    if (filter === SHOW_ALL_DONE_TASKS) return tasks.filter(task => task.done);
    if (filter === SHOW_ALL_IMPORTANT_TASKS) return tasks.filter(task => task.important)
}



