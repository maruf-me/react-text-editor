// Usage Examples for AdvancedEditor

import React, { useRef, useState } from "react";
// import AdvancedEditor, { AdvancedEditorRef } from "./AdvancedEditor";
import AdvancedEditor, { AdvancedEditorRef } from "../../../src";

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
  const editorRef = useRef<AdvancedEditorRef>(null);
  const [content, setContent] = useState("<p>Initial content</p>");

  const handleInsert = () => {
    editorRef.current?.insertHTML(
      '<h2 style="color: #2196F3;">Inserted Heading</h2><p>New paragraph!</p>'
    );
  };

  const handleClear = () => {
    editorRef.current?.setContents("");
  };

  const handleGetText = () => {
    const text = editorRef.current?.getText();
    alert(`Plain text: ${text}`);
  };

  const handleDisable = () => {
    editorRef.current?.disable();
  };

  const handleEnable = () => {
    editorRef.current?.enable();
  };

  return (
    <div>
      <h2>Controlled Editor with Ref</h2>

      <div style={{ marginBottom: "16px", display: "flex", gap: "8px" }}>
        <button onClick={handleInsert}>Insert HTML</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleGetText}>Get Text</button>
        <button onClick={handleDisable}>Disable</button>
        <button onClick={handleEnable}>Enable</button>
      </div>

      <AdvancedEditor
        ref={editorRef}
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
        onImageUploadBefore={(value) => {
          console.log({ value });
        }}
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
    uploadHandler: (response: any) => void
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
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  return (
    <div>
      <h2>Editor States</h2>

      <div style={{ marginBottom: "16px", display: "flex", gap: "12px" }}>
        <label>
          <input
            type="checkbox"
            checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />{" "}
          Disabled
        </label>

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
        disabled={disabled}
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
// Example 8: TypeScript Usage
// ============================================
export function TypeScriptExample() {
  const editorRef = useRef<AdvancedEditorRef>(null);
  const [content, setContent] = useState<string>("");

  // Type-safe ref methods
  const handleGetContents = (): void => {
    if (editorRef.current) {
      const html: string = editorRef.current.getContents();
      const text: string = editorRef.current.getContents(true);
      console.log({ html, text });
    }
  };

  // Type-safe onChange
  const handleChange = (newContent: string): void => {
    setContent(newContent);
  };

  // Type-safe callbacks
  const handleBlur = (event: FocusEvent, content: string): void => {
    console.log("Blurred:", { event, content });
  };

  const handleFocus = (event: FocusEvent): void => {
    console.log("Focused:", event);
  };

  return (
    <div>
      <h2>TypeScript Usage</h2>

      <button onClick={handleGetContents}>Get Contents (Type Safe)</button>

      <AdvancedEditor
        ref={editorRef}
        height="400px"
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
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

        <TypeScriptExample />
      </div>
    </div>
  );
}

// // examples/basic-usage.tsx

// import React, { useRef, useState } from "react";
// // import AdvancedEditor, {
// //   AdvancedEditorRef,
// // } from "@your-org/advanced-suneditor";
// import AdvancedEditor, { AdvancedEditorRef } from "../../../src";

// // examples/basic-usage.tsx

// // import React, { useRef, useState } from 'react';
// // import AdvancedEditor, { AdvancedEditorRef } from '@your-org/advanced-suneditor';

// // ============================================
// // Example 1: Basic Usage
// // ============================================

// export function BasicExample() {
//   const [content, setContent] = useState("");

//   return (
//     <div>
//       <h2>Basic Editor</h2>
//       <AdvancedEditor
//         height="300px"
//         placeholder="Type something..."
//         onChange={setContent}
//       />
//       <div>
//         <h3>Output:</h3>
//         <div dangerouslySetInnerHTML={{ __html: content }} />
//       </div>
//     </div>
//   );
// }

// // ============================================
// // Example 2: With All Controls
// // ============================================

// export function ControlledExample() {
//   const editorRef = useRef<AdvancedEditorRef>(null);
//   const [content, setContent] = useState("<p>Initial content</p>");

//   const handleInsert = () => {
//     editorRef.current?.insertHTML(
//       "<h2>Inserted Heading</h2><p>Inserted paragraph</p>"
//     );
//   };

//   const handleClear = () => {
//     editorRef.current?.setContents("");
//   };

//   const handleGetText = () => {
//     const text = editorRef.current?.getText();
//     alert(`Plain text: ${text}`);
//   };

//   const handleDisable = () => {
//     editorRef.current?.disable();
//   };

//   const handleEnable = () => {
//     editorRef.current?.enable();
//   };

//   const handleFocus = () => {
//     editorRef.current?.focus();
//   };

//   return (
//     <div>
//       <h2>Controlled Editor</h2>

//       <div
//         style={{
//           marginBottom: "16px",
//           display: "flex",
//           gap: "8px",
//           flexWrap: "wrap",
//         }}
//       >
//         <button onClick={handleInsert}>Insert HTML</button>
//         <button onClick={handleClear}>Clear</button>
//         <button onClick={handleGetText}>Get Plain Text</button>
//         <button onClick={handleDisable}>Disable</button>
//         <button onClick={handleEnable}>Enable</button>
//         <button onClick={handleFocus}>Focus</button>
//       </div>

//       <AdvancedEditor
//         ref={editorRef}
//         height="400px"
//         defaultValue={content}
//         onChange={setContent}
//         variant="standard"
//       />
//     </div>
//   );
// }

// // ============================================
// // Example 3: Different Variants
// // ============================================

// export function VariantsExample() {
//   return (
//     <div style={{ display: "grid", gap: "24px" }}>
//       <div>
//         <h3>Minimal Variant</h3>
//         <AdvancedEditor
//           variant="minimal"
//           height="200px"
//           placeholder="Minimal toolbar..."
//         />
//       </div>

//       <div>
//         <h3>Basic Variant</h3>
//         <AdvancedEditor
//           variant="basic"
//           height="200px"
//           placeholder="Basic toolbar..."
//         />
//       </div>

//       <div>
//         <h3>Standard Variant</h3>
//         <AdvancedEditor
//           variant="standard"
//           height="200px"
//           placeholder="Standard toolbar..."
//         />
//       </div>

//       <div>
//         <h3>Full Variant</h3>
//         <AdvancedEditor
//           variant="full"
//           height="200px"
//           placeholder="Full featured toolbar..."
//         />
//       </div>
//     </div>
//   );
// }

// // ============================================
// // Example 4: Custom Theme
// // ============================================

// export function ThemedExample() {
//   const [isDark, setIsDark] = useState(false);

//   const lightTheme = {
//     variables: {
//       primary: "#6366f1",
//       "bg-toolbar": "#f8fafc",
//       "bg-hover": "#e0e7ff",
//       "border-color": "#e2e8f0",
//       "border-radius": "8px",
//     },
//     toolbar: `
//       background: linear-gradient(to bottom, #ffffff, #f8fafc);
//       border-bottom: 2px solid #e2e8f0;
//       padding: 12px;
//       box-shadow: 0 1px 3px rgba(0,0,0,0.1);
//     `,
//     editor: `
//       border: 2px solid #e2e8f0;
//       border-radius: 8px;
//     `,
//     content: `
//       font-family: 'Inter', -apple-system, sans-serif;
//       font-size: 16px;
//       line-height: 1.7;
//       color: #1e293b;
//     `,
//   };

//   return (
//     <div>
//       <div style={{ marginBottom: "16px" }}>
//         <button onClick={() => setIsDark(!isDark)}>
//           Toggle {isDark ? "Light" : "Dark"} Mode
//         </button>
//       </div>

//       <div className={isDark ? "dark" : ""}>
//         <AdvancedEditor
//           theme={!isDark ? lightTheme : undefined}
//           height="400px"
//           placeholder="Custom themed editor..."
//         />
//       </div>
//     </div>
//   );
// }

// // ============================================
// // Example 5: Image Upload with Validation
// // ============================================

// export function ImageUploadExample() {
//   const [images, setImages] = useState<string[]>([]);

//   const handleImageUploadBefore = (
//     files: File[],
//     info: any,
//     uploadHandler: Function
//   ) => {
//     const file = files[0];

//     // Validate file size (5MB)
//     if (file.size > 5 * 1024 * 1024) {
//       alert("Image size must be less than 5MB");
//       return false;
//     }

//     // Validate file type
//     const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
//     if (!validTypes.includes(file.type)) {
//       alert("Only JPEG, PNG, GIF, and WebP images are allowed");
//       return false;
//     }

//     // Simulate upload to server
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const dataUrl = e.target?.result as string;

//       // In real app, upload to server and get URL
//       uploadHandler({
//         result: [
//           {
//             url: dataUrl,
//             name: file.name,
//             size: file.size,
//           },
//         ],
//       });

//       setImages((prev) => [...prev, dataUrl]);
//     };
//     reader.readAsDataURL(file);

//     return false; // Prevent default upload
//   };

//   return (
//     <div>
//       <h2>Image Upload Example</h2>

//       <AdvancedEditor
//         height="400px"
//         onImageUploadBefore={handleImageUploadBefore}
//         imageUploadSizeLimit={5 * 1024 * 1024}
//         imageAccept=".jpg,.jpeg,.png,.gif,.webp"
//       />

//       {images.length > 0 && (
//         <div style={{ marginTop: "16px" }}>
//           <h3>Uploaded Images:</h3>
//           <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
//             {images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 alt={`Upload ${i + 1}`}
//                 style={{ width: "100px", height: "100px", objectFit: "cover" }}
//               />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // ============================================
// // Example 6: Form Integration with React Hook Form
// // ============================================

// import { useForm, Controller } from "react-hook-form";

// interface FormData {
//   title: string;
//   content: string;
// }

// export function FormIntegrationExample() {
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     defaultValues: {
//       title: "",
//       content: "",
//     },
//   });

//   const onSubmit = (data: FormData) => {
//     console.log("Form submitted:", data);
//     alert("Check console for form data");
//   };

//   return (
//     <div>
//       <h2>Form Integration Example</h2>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         style={{ display: "flex", flexDirection: "column", gap: "16px" }}
//       >
//         <div>
//           <label htmlFor="title">Title:</label>
//           <Controller
//             name="title"
//             control={control}
//             rules={{ required: "Title is required" }}
//             render={({ field }) => (
//               <input
//                 {...field}
//                 type="text"
//                 id="title"
//                 style={{ width: "100%", padding: "8px", marginTop: "4px" }}
//               />
//             )}
//           />
//           {errors.title && (
//             <span style={{ color: "red" }}>{errors.title.message}</span>
//           )}
//         </div>

//         <div>
//           <label htmlFor="content">Content:</label>
//           <Controller
//             name="content"
//             control={control}
//             rules={{ required: "Content is required" }}
//             render={({ field }) => (
//               <AdvancedEditor
//                 {...field}
//                 height="300px"
//                 onChange={field.onChange}
//                 defaultValue={field.value}
//                 variant="standard"
//               />
//             )}
//           />
//           {errors.content && (
//             <span style={{ color: "red" }}>{errors.content.message}</span>
//           )}
//         </div>

//         <button
//           type="submit"
//           style={{ padding: "12px 24px", cursor: "pointer" }}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// // ============================================
// // Example 7: Custom Headers and Templates
// // ============================================

// export function CustomStylesExample() {
//   return (
//     <div>
//       <h2>Custom Headers & Templates</h2>

//       <AdvancedEditor
//         height="400px"
//         headerStyles={[
//           {
//             tag: "h1",
//             style:
//               "font-size: 2.5rem; font-weight: 800; color: #1e40af; border-bottom: 3px solid #3b82f6; padding-bottom: 8px;",
//             display: "Main Title",
//           },
//           {
//             tag: "h2",
//             style:
//               "font-size: 2rem; font-weight: 700; color: #1e3a8a; border-left: 4px solid #3b82f6; padding-left: 12px;",
//             display: "Section Heading",
//           },
//           {
//             tag: "h3",
//             style: "font-size: 1.5rem; font-weight: 600; color: #1e40af;",
//             display: "Subsection",
//           },
//         ]}
//         templates={[
//           {
//             name: "Meeting Minutes",
//             html: `
//               <h1>Meeting Minutes</h1>
//               <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
//               <p><strong>Attendees:</strong> </p>
//               <h2>Agenda</h2>
//               <ol>
//                 <li>Topic 1</li>
//                 <li>Topic 2</li>
//               </ol>
//               <h2>Discussion</h2>
//               <p></p>
//               <h2>Action Items</h2>
//               <ul>
//                 <li><strong>Assignee:</strong> Task description</li>
//               </ul>
//             `,
//           },
//           {
//             name: "Blog Post",
//             html: `
//               <h1>Blog Post Title</h1>
//               <p><em>Brief introduction or summary...</em></p>
//               <h2>Section 1</h2>
//               <p>Content here...</p>
//               <h2>Section 2</h2>
//               <p>Content here...</p>
//               <h2>Conclusion</h2>
//               <p>Final thoughts...</p>
//             `,
//           },
//         ]}
//       />
//     </div>
//   );
// }

// // ============================================
// // Example 8: Character Counter & Limits
// // ============================================

// export function CharCounterExample() {
//   const [charCount, setCharCount] = useState(0);
//   const editorRef = useRef<AdvancedEditorRef>(null);

//   const handleChange = (content: string) => {
//     const count = editorRef.current?.getCharCount() || 0;
//     setCharCount(count);
//   };

//   const maxChars = 500;
//   const remaining = maxChars - charCount;
//   const isOverLimit = remaining < 0;

//   return (
//     <div>
//       <h2>Character Counter Example</h2>

//       <AdvancedEditor
//         ref={editorRef}
//         height="300px"
//         onChange={handleChange}
//         charCounter={true}
//         maxCharCount={maxChars}
//       />

//       <div
//         style={{
//           marginTop: "8px",
//           padding: "8px",
//           background: isOverLimit ? "#fee" : "#efe",
//           border: `1px solid ${isOverLimit ? "#c00" : "#0c0"}`,
//           borderRadius: "4px",
//         }}
//       >
//         <strong>Characters:</strong> {charCount} / {maxChars}
//         {remaining < 50 && remaining >= 0 && (
//           <span style={{ marginLeft: "8px", color: "#f90" }}>
//             ⚠️ Only {remaining} characters remaining
//           </span>
//         )}
//         {isOverLimit && (
//           <span style={{ marginLeft: "8px", color: "#c00" }}>
//             ❌ {Math.abs(remaining)} characters over limit
//           </span>
//         )}
//       </div>
//     </div>
//   );
// }

// // ============================================
// // Example 9: Read-Only Mode
// // ============================================

// export function ReadOnlyExample() {
//   const [isReadOnly, setIsReadOnly] = useState(true);
//   const content = `
//     <h1>Document Preview</h1>
//     <p>This is a <strong>read-only</strong> document. Toggle the switch below to enable editing.</p>
//     <ul>
//       <li>Feature 1</li>
//       <li>Feature 2</li>
//       <li>Feature 3</li>
//     </ul>
//   `;

//   return (
//     <div>
//       <h2>Read-Only Mode Example</h2>

//       <div style={{ marginBottom: "16px" }}>
//         <label>
//           <input
//             type="checkbox"
//             checked={isReadOnly}
//             onChange={(e) => setIsReadOnly(e.target.checked)}
//           />{" "}
//           Read-Only Mode
//         </label>
//       </div>

//       <AdvancedEditor
//         height="300px"
//         defaultValue={content}
//         readOnly={isReadOnly}
//       />
//     </div>
//   );
// }

// // ============================================
// // Main Demo Component
// // ============================================

// export function AllExamples() {
//   return (
//     <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
//       <h1>Advanced SunEditor Examples</h1>

//       <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
//         <BasicExample />
//         <hr />

//         <ControlledExample />
//         <hr />

//         <VariantsExample />
//         <hr />

//         <ThemedExample />
//         <hr />

//         <ImageUploadExample />
//         <hr />

//         <FormIntegrationExample />
//         <hr />

//         <CustomStylesExample />
//         <hr />

//         <CharCounterExample />
//         <hr />

//         <ReadOnlyExample />
//       </div>
//     </div>
//   );
// }
