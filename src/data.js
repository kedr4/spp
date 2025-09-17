export const initialProjects = [
  {
    id: "proj-1",
    name: "Релиз мобильного приложения",
    tasks: [
      {
        id: "task-1",
        name: "Настроить CI/CD",
        description: "Использовать GitHub Actions",
        assignee: "Алексей",
        status: "Done",
      },
      {
        id: "task-2",
        name: "Реализовать экран входа",
        description: "Валидация, OAuth",
        assignee: "Мария",
        status: "In Progress",
      },
      {
        id: "task-3",
        name: "Написать UI-тесты",
        description: "Покрыть основные сценарии",
        assignee: "Алексей",
        status: "ToDo",
      },
    ],
  },
  {
    id: "proj-2",
    name: "Редизайн веб-сайта",
    tasks: [
      {
        id: "task-4",
        name: "Создать новый макет",
        description: "В Figma",
        assignee: "Анна",
        status: "Done",
      },
      {
        id: "task-5",
        name: "Перенести на React",
        description: "Использовать Next.js",
        assignee: "Иван",
        status: "ToDo",
      },
    ],
  },
];
