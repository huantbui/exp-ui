import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Deployments from "./Deployments";

describe("Page: Deployments", () => {
  it("should not delete an item if canceled", () => {
    render(<Deployments />);

    const totalItemsInitialLoad = screen.getByTestId("page.deployments.total");
    expect(totalItemsInitialLoad.textContent).toContain(5);

    const actionButton = screen.getByTestId("action.d-123");
    fireEvent.click(actionButton);

    const deleteButton = screen.getByTestId("delete.d-123");
    fireEvent.click(deleteButton);

    const cancelButton = screen.getByTestId("delete.cancel.d-123");
    fireEvent.click(cancelButton);

    const totalItemsAfter = screen.getByTestId("page.deployments.total");
    expect(totalItemsAfter.textContent).toContain(5);
  });

  it("should delete an item once confirmed", () => {
    render(<Deployments />);

    const totalItems = screen.getByTestId("page.deployments.total");
    expect(totalItems.textContent).toContain(5);

    const actionButton = screen.getByTestId("action.d-123");
    fireEvent.click(actionButton);

    const deleteButton = screen.getByTestId("delete.d-123");
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByTestId("delete.confirm.d-123");
    fireEvent.click(confirmButton);

    const totalItemsAfter = screen.getByTestId("page.deployments.total");
    expect(totalItemsAfter.textContent).toContain(4);
  });
});
