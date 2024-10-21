import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Flows from "./Flows";

describe("Page: Flows", () => {
  it("should not delete an item if canceled", () => {
    render(<Flows />);

    const totalItemsInitialLoad = screen.getByTestId("page.flows.total");
    expect(totalItemsInitialLoad.textContent).toContain(3);

    const actionButton = screen.getByTestId("action.f-123");
    fireEvent.click(actionButton);

    const deleteButton = screen.getByTestId("delete.f-123");
    fireEvent.click(deleteButton);

    const cancelButton = screen.getByTestId("delete.cancel.f-123");
    fireEvent.click(cancelButton);

    const totalItemsAfter = screen.getByTestId("page.flows.total");
    expect(totalItemsAfter.textContent).toContain(3);
  });

  it("should delete an item once confirmed", () => {
    render(<Flows />);

    const totalItemsInitialLoad = screen.getByTestId("page.flows.total");
    expect(totalItemsInitialLoad.textContent).toContain(3);

    const actionButton = screen.getByTestId("action.f-123");
    fireEvent.click(actionButton);

    const deleteButton = screen.getByTestId("delete.f-123");
    fireEvent.click(deleteButton);

    const confirmButton = screen.getByTestId("delete.confirm.f-123");
    fireEvent.click(confirmButton);

    const totalItemsAfter = screen.getByTestId("page.flows.total");
    expect(totalItemsAfter.textContent).toContain(2);
  });
});
