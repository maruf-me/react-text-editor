import React, { useRef, useState } from "react";
// import AdvancedEditor, { AdvancedEditorRef } from "./AdvancedEditor";
import AdvancedEditor from "../../../src";

// ============================================
// Example 1: Basic Usage
// ============================================
export function BasicExample() {
  const [content, setContent] = useState("");

  return (
    <div>
      <h2>Basic Editor</h2>
      <AdvancedEditor
        height="400px"
        placeholder="Start typing..."
        defaultValue={content ?? ""}
        onChange={setContent}
      />
      {/* <TextEditor
        height="100"
        variant="simple"
        defaultValue={optionValue ?? ""}
        placeholder="Enter the option text"
        onChange={(value) => onOptionEdit(index, value)}
      /> */}
      {/* <AdvancedEditor
        height="400px"
        placeholder="Start typing..."
        onChange={setContent}
      /> */}
    </div>
  );
}

// ============================================
// Example 2: With Ref and Controls
// ============================================
export function ControlledExample() {
  const [content, setContent] = useState("<p>Initial content</p>");

  return (
    <div>
      <h2>Controlled Editor with Ref</h2>

      <AdvancedEditor
        height="400px"
        defaultValue={content}
        onChange={setContent}
      />
    </div>
  );
}

// ============================================
// Example 3: Custom Button List
// ============================================
export function CustomButtonsExample() {
  const customButtons = [
    ["undo", "redo"],
    ["font", "fontSize"],
    ["bold", "italic", "underline"],
    ["fontColor", "hiliteColor"],
    ["link", "image"],
  ];

  return (
    <div className="text-black">
      <h2>Custom Toolbar fdsafdsaf</h2>
      <AdvancedEditor
        buttonList={customButtons}
        height="300px"
        onChange={(value) => {
          console.log({ value });
        }}
        placeholder="Editor with custom toolbar..."
      />
    </div>
  );
}

// ============================================
// Example 4: With Image Upload Handler
// ============================================
export function ImageUploadExample() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (
    files: File[],
    info: any,
    uploadHandler: (response: any) => void,
  ) => {
    const file = files[0];

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be less than 5MB");
      return false;
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    if (!validTypes.includes(file.type)) {
      alert("Only JPEG, PNG, GIF, and WebP images allowed");
      return false;
    }

    // Convert to base64
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;

      uploadHandler({
        result: [
          {
            url: dataUrl,
            name: file.name,
            size: file.size,
          },
        ],
      });

      setUploadedImages((prev) => [...prev, dataUrl]);
    };
    reader.readAsDataURL(file);

    return false; // Prevent default
  };

  return (
    <div>
      <h2>Image Upload Example</h2>

      <AdvancedEditor height="400px" onImageUploadBefore={handleImageUpload} />

      {uploadedImages.length > 0 && (
        <div style={{ marginTop: "16px" }}>
          <h3>Uploaded Images:</h3>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {uploadedImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Upload ${i + 1}`}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// Example 5: With Callbacks
// ============================================
export function CallbacksExample() {
  const [focused, setFocused] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleChange = (content: string) => {
    // Remove HTML tags for character count
    const text = content.replace(/<[^>]*>/g, "");
    setCharCount(text.length);
  };

  const handleBlur = (event: FocusEvent, content: string) => {
    setFocused(false);
    console.log("Editor blurred with content:", content);
  };

  const handleFocus = (event: FocusEvent) => {
    setFocused(true);
    console.log("Editor focused");
  };

  return (
    <div>
      <h2>Editor with Callbacks</h2>

      <div
        style={{
          marginBottom: "8px",
          padding: "8px",
          background: focused ? "#e3f2fd" : "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <strong>Status:</strong> {focused ? "Focused ✓" : "Not focused"}
        {" | "}
        <strong>Characters:</strong> {charCount}
      </div>

      <AdvancedEditor
        height="400px"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
    </div>
  );
}

// ============================================
// Example 6: Disabled/ReadOnly States
// ============================================
export function StatesExample() {
  const [readOnly, setReadOnly] = useState(false);

  return (
    <div>
      <h2>Editor States</h2>

      <div style={{ marginBottom: "16px", display: "flex", gap: "12px" }}>
        <label>
          <input
            type="checkbox"
            checked={readOnly}
            onChange={(e) => setReadOnly(e.target.checked)}
          />{" "}
          Read Only
        </label>
      </div>

      <AdvancedEditor
        height="400px"
        readOnly={readOnly}
        defaultValue="<p>Try toggling the checkboxes above!</p>"
      />
    </div>
  );
}

// ============================================
// Example 7: Form Integration
// ============================================
export function FormExample() {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Check console for form data");
  };

  return (
    <div>
      <h2>Form Integration</h2>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "16px" }}
      >
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            required
          />
        </div>

        <div>
          <label>Content:</label>
          <AdvancedEditor
            height="300px"
            name="content"
            onChange={(content) => setFormData({ ...formData, content })}
            placeholder="Enter your content..."
          />
        </div>

        <button
          type="submit"
          style={{ padding: "12px 24px", cursor: "pointer" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

// ============================================
// All Examples Combined
// ============================================
export default function AllExamples() {
  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>Advanced Editor Examples</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        <BasicExample />
        <hr />

        <ControlledExample />
        <hr />

        <CustomButtonsExample />
        <hr />

        <ImageUploadExample />
        <hr />

        <CallbacksExample />
        <hr />

        <StatesExample />
        <hr />

        <FormExample />
        <hr />
      </div>
    </div>
  );
}
