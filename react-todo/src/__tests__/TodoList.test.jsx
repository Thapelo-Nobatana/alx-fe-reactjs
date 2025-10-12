/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";
import { describe, test, expect } from "@jest/globals";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("adds a new todo", async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter new todo");
    const addButton = screen.getByText("Add");

    await userEvent.type(input, "New Todo");
    await userEvent.click(addButton);

    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  test("toggles a todo completed status", async () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    // Initially not completed (no line-through)
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");

    // Click to toggle
    await userEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Click again to untoggle
    await userEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Build a Todo App");
    const deleteButton = todoItem.nextSibling; // the delete button

    await userEvent.click(deleteButton);
    expect(screen.queryByText("Build a Todo App")).not.toBeInTheDocument();
  });
});
