import { render, screen } from "@testing-library/react";
import { TextEditor } from "../src/index.js";

test("renders editor with default content", () => {
  render(<TextEditor defaultValue="Hello" name="editor" />);

  const editor = screen.getByTestId("editor");
  expect(editor).toBeInTheDocument();
  expect(editor.textContent).toContain("Hello");
});
