/* eslint-disable no-undef */
const todoList = require("../todo");
// eslint-disable-next-line no-unused-vars
const {
  all,
  add,
  markAsComplete,
  overdue,
  dueToday,
  dueLater,
  toDisplayableList,
} = todoList();

describe("Testing my todo app:", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Should add new todo ", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(todoItemCount + 1);
  });

  test("Should mark todo  as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should retrieve today items", () => {
    expect(all.dueToday).toBe(all.dueDate);
  });
  test("Should retrieve overdue items.", () => {
    expect(all.dueDate).toBe(all.overdue);
  });
  test("Should check due later items", () => {
    expect(all.dueDate).toBe(all.dueLater);
  });
});
