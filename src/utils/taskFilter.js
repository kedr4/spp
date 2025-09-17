export const filterTasksByStatus = (tasks, status) => {
  if (!status) {
    return tasks;
  }
  return tasks.filter((task) => task.status === status);
};
