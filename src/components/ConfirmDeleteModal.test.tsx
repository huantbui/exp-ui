import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConfirmDeleteModal } from "./ConfirmDeleteModal";

const handleDelete = vi.fn();

describe("Component: ConfirmDeleteModal", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });
  it("should have correct dynamic data displayed", () => {
    const NAME = "test-name";
    render(
      <ConfirmDeleteModal
        title="Flow"
        id={"id-123"}
        name={NAME}
        handleDelete={handleDelete}
      />
    );
    const deleteButton = screen.getByTestId("delete.id-123");
    fireEvent.click(deleteButton);

    const description = screen.getByTestId("delete.description");
    expect(description.textContent).toBe(
      `Are you sure you want to delete ${NAME}?`
    );
  });

  it("should trigger handleDelete when confirm", () => {
    const NAME = "test-name";
    render(
      <ConfirmDeleteModal
        title="Flow"
        id={"id-123"}
        name={NAME}
        handleDelete={handleDelete}
      />
    );
    const deleteButton = screen.getByTestId("delete.id-123");
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByTestId("delete.confirm.id-123");
    fireEvent.click(confirmButton);

    expect(handleDelete).toBeCalled();
    expect(handleDelete).toBeCalledTimes(1);
  });

  it("should not trigger handleDelete when cancel", () => {
    const NAME = "test-name";
    render(
      <ConfirmDeleteModal
        title="Flow"
        id={"id-123"}
        name={NAME}
        handleDelete={handleDelete}
      />
    );
    const deleteButton = screen.getByTestId("delete.id-123");
    fireEvent.click(deleteButton);

    const cancelButton = screen.getByTestId("delete.cancel.id-123");
    fireEvent.click(cancelButton);

    expect(handleDelete).not.toHaveBeenCalled();
  });
});
