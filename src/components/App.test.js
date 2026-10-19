import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

const tag = { title: "work", color: "#ff0000" };
const task = {
  id: "a1",
  title: "Write tests",
  description: "for the todo list",
  done: false,
  tags: [tag],
};

beforeEach(() => {
  localStorage.clear();
});

test("shows tasks saved in localStorage", () => {
  localStorage.setItem("tasks", JSON.stringify([task]));
  localStorage.setItem("tags", JSON.stringify([tag]));
  render(<App />);
  expect(screen.getByText("Write tests")).toBeInTheDocument();
});

test("marks a task as done and persists it", () => {
  localStorage.setItem("tasks", JSON.stringify([task]));
  localStorage.setItem("tags", JSON.stringify([tag]));
  render(<App />);
  fireEvent.click(screen.getByLabelText("Done"));
  expect(JSON.parse(localStorage.getItem("tasks"))[0].done).toBe(true);
});

test("deletes a task", () => {
  localStorage.setItem("tasks", JSON.stringify([task]));
  localStorage.setItem("tags", JSON.stringify([tag]));
  const { container } = render(<App />);
  fireEvent.click(container.querySelector(".delete-button"));
  expect(screen.queryByText("Write tests")).not.toBeInTheDocument();
  expect(JSON.parse(localStorage.getItem("tasks"))).toEqual([]);
});

test("removing a tag from one task keeps it on the other tasks", () => {
  const other = { ...task, id: "a2", title: "Other task", tags: [tag] };
  localStorage.setItem("tasks", JSON.stringify([task, other]));
  localStorage.setItem("tags", JSON.stringify([tag]));
  const { container } = render(<App />);
  const removeButtons = container.querySelectorAll(".task .delete-tag");
  expect(removeButtons.length).toBe(2);
  fireEvent.click(removeButtons[0]);
  const saved = JSON.parse(localStorage.getItem("tasks"));
  expect(saved[0].tags).toEqual([]);
  expect(saved[1].tags).toEqual([tag]);
});
