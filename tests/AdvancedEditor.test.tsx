import { render, screen } from "@testing-library/react";
import { AdvancedEditor } from "../src";

test("renders editor with default content", () => {
  render(<AdvancedEditor defaultValue="Hello" name="editor" />);

  const editor = screen.getByTestId("editor");
  expect(editor).toBeInTheDocument();
  expect(editor.textContent).toContain("Hello");
});
