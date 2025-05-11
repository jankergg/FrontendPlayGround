import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NestedCheckboxExample } from "./NestedCheckboxExample";

test("renders checkbox list", async () => {
  render(<NestedCheckboxExample />);

  expect(screen.getAllByRole("checkbox")).toHaveLength(11);
});

test("should check or uncheck all its parent checkbox", async () => {
  const user = userEvent.setup();
  render(<NestedCheckboxExample />);

  const checkboxs = screen.getAllByRole("checkbox");
  await user.click(checkboxs[0]);
  const list = screen.getAllByRole("listitem");

  expect(
    within(list[0]).getAllByRole("checkbox", { checked: true })
  ).toHaveLength(7);

  await user.click(checkboxs[0]);

  expect(
    within(list[0]).getAllByRole("checkbox", { checked: false })
  ).toHaveLength(7);
});

test("should render indeterminte checkbox when only part of its children checkbox checked", async () => {
  const user = userEvent.setup();
  render(<NestedCheckboxExample />);

  const checkboxs = screen.getAllByRole("checkbox") as HTMLInputElement[];
  await user.click(checkboxs[1]);
  const list = screen.getAllByRole("listitem");

  expect(
    within(list[0]).getAllByRole("checkbox", { checked: true })
  ).toHaveLength(3);

  expect(checkboxs[0].indeterminate).toBe(true);
});
