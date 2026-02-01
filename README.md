# @marufme/react-text-editor

![Editor Preview](docs/assets/editor-preview.png)

A professional, modular, and enterprise-ready React wrapper for **SunEditor**. Built with a TypeScript-first approach, it provides pre-configured variants and templates optimized for LMS, E-commerce, and Blog platforms.

[![npm version](https://img.shields.io/npm/v/@marufme/react-text-editor.svg)](https://www.npmjs.com/package/@marufme/react-text-editor)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- 🛠 **Modular Configurations**: Choose from pre-defined variants (Simple, Detailed, Full, etc.).
- 📝 **Niche-Specific Variants**: Specialized presets for LMS, E-commerce, and Blog content.
- 🧮 **Math & Science**: Built-in support for **KaTeX** for complex mathematical expressions.
- � **Template System**: Ready-to-use HTML templates for courses, memos, and product descriptions.
- � **Imperative API**: Full access to the underlying SunEditor core via React refs.
- � **Modern Bundle**: Shipping as ESM and CJS with full tree-shaking support.
- � **Themeable**: Easy to customize styles using CSS variables.

## 🚀 Installation

```bash
# Using npm
npm install @marufme/react-text-editor

# Using pnpm
pnpm add @marufme/react-text-editor

# Using yarn
yarn add @marufme/react-text-editor
```

## 📖 Quick Start

```tsx
import React, { useState } from 'react';
import { TextEditor } from '@marufme/react-text-editor';

function App() {
  const [content, setContent] = useState('<p>Hello World!</p>');

  return (
    <TextEditor
      variant="moreAdvance"
      defaultValue={content}
      onChange={setContent}
      placeholder="Start typing your story..."
      height="400px"
    />
  );
}
```

## 🎨 Editor Variants

We provide a wide range of pre-configured variants categorized by use case. Pass these to the `variant` prop.

### Common Variants
| Variant | Ideal For |
| :--- | :--- |
| `simple` | Comments, quick notes, basic social posts |
| `minimal` | Ultra-clean interfaces with basic formatting |
| `detailed` | Standard blog posts with media support |
| `detailedAdvanced` | content creation with Math/KaTeX support |
| `full` | Enterprise-grade CMS and deep editing |
| `moreAdvance` | Power users requiring every single plugin |

### LMS (Learning Management System)
| Variant | Ideal For |
| :--- | :--- |
| `lessonBasic` | Standard lesson descriptions |
| `lessonVideo` | Lessons focused on video embedding |
| `courseFull` | Comprehensive course builder |
| `quizEditor` | Educational assessments and quizzes |
| `discussionReply` | Simplified forum and discussion replies |

### E-commerce
| Variant | Ideal For |
| :--- | :--- |
| `productDescription`| Detailed product spec sheets |
| `reviewEditor` | Customer product reviews |

---

## 🛠 Custom Variants

If none of the presets fit your needs, you can define your own toolbar using the `custom` variant.

```tsx
import React from 'react';
import { TextEditor } from '@marufme/react-text-editor';

function CustomEditor() {
  const myCustomToolbar = [
    ['undo', 'redo'],
    ['bold', 'italic', 'underline'],
    ['fontColor', 'hiliteColor'],
    ['link', 'image']
  ];

  return (
    <TextEditor
      variant="custom"
      buttonList={myCustomToolbar}
      placeholder="Type here with your custom toolbar..."
    />
  );
}
```

---

## 🖼️ Handling Media Uploads

Intercept image and video uploads to handle them with your custom backend API. This is essential for production applications where you need to control file storage, validation, and processing.

### Basic Upload Handler

```tsx
import React from 'react';
import { TextEditor } from '@marufme/react-text-editor';

function EditorWithUpload() {
  const handleImageUploadBefore = (
    files: File[],
    info: object,
    uploadHandler: (response: {
      result: { url: string; name: string }[];
      errorMessage?: string;
    }) => void
  ) => {
    (async () => {
      const file = files[0];
      
      // Create FormData for API upload
      const formData = new FormData();
      formData.append("file", file);
      formData.append("directory", "editor");

      try {
        // Replace with your actual API endpoint
        const response = await fetch("/fetch-file-upload", {
          method: "POST",
          body: formData
        });
        
        const data = await response.json();
        
        if (data.success) {
          // Pass the uploaded URL back to the editor
          uploadHandler({
            result: [{
              url: data.url,
              name: file.name
            }]
          });
        } else {
          uploadHandler({ errorMessage: "Upload failed" });
        }
      } catch (error) {
        console.error("Upload error:", error);
        uploadHandler({ errorMessage: "Network error" });
      }
    })();
    
    return false; // Prevent default upload behavior
  };

  const handleVideoUploadBefore = (
    files: File[],
    info: object,
    uploadHandler: any
  ) => {
    // Same logic as image upload, but for videos
    return handleImageUploadBefore(files, info, uploadHandler);
  };

  return (
    <TextEditor
      variant="courseFull"
      onImageUploadBefore={handleImageUploadBefore}
      onVideoUploadBefore={handleVideoUploadBefore}
      placeholder="Upload images and videos to your custom backend..."
      height="500px"
    />
  );
}
```

### Advanced: With Image Conversion

```tsx
const handleImageUploadBefore = (files, info, uploadHandler) => {
  (async () => {
    const file = files[0];
    
    // Optional: Convert to WebP for better compression
    // const webpFile = await convertImageToWebP(file);
    
    const formData = new FormData();
    formData.append("file", file); // or webpFile
    formData.append("directory", "editor");

    const response = await api.post("/fetch-file-upload", formData);
    
    if (response.success) {
      uploadHandler({
        result: [{
          url: response.data.url,
          name: "image"
        }]
      });
    }
  })();
  
  return false;
};
```

---

---

## ⚙️ Configuration & Props

### Built-in Templates

The package comes bundled with professional HTML templates. Users can insert these via the "Template" button in the editor.

- **LMS**: Course Overview (English/Bangla), Lesson Content, Instructor Profile.
- **E-commerce**: Product Descriptions, Promotional Banners.
- **Internal**: Memos, Internal Notes.

### Available Props

The `TextEditor` component accepts all [SunEditor options](http://suneditor.com/sample/html/options.html) plus:

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `variant` | `VariantType` | `"simple"` | Pre-configured toolbar variant |
| `buttonList` | `array` | `COMMON_TEXT_BUTTONS` | Custom button list (when `variant="custom"`) |
| `setOptions` | `SunEditorOptions` | `{}` | Additional SunEditor configuration |
| `height` | `string` | - | Editor height (e.g., `"400px"`) |
| `placeholder` | `string` | - | Placeholder text |
| `defaultValue` | `string` | - | Initial HTML content |
| `onChange` | `function` | - | Callback when content changes |
| `onImageUploadBefore` | `function` | - | Custom image upload handler |
| `onVideoUploadBefore` | `function` | - | Custom video upload handler |
| `getSunEditorInstance` | `function` | - | Callback to get the editor instance |

## 🛠 Contributing

We welcome contributions! To get started:

1. **Clone the repo**:
   ```bash
   git clone https://github.com/maruf-me/react-text-editor.git
   ```
2. **Install dependencies**:
   ```bash
   pnpm install
   ```
3. **Run local dev server**:
   ```bash
   pnpm dev
   ```
4. **Run tests**:
   ```bash
   pnpm test
   ```

### Project Structure
- `src/components`: React components and core wrapper.
- `src/variants`: Button configuration presets.
- `src/templates`: HTML template library.

## 👨‍💻 Author

**MD Maruf Hossain**
- Website: [marufme.com](https://marufme.com)
- Email: [marufme.dev@gmail.com](mailto:marufme.dev@gmail.com)

## 📄 License

Licensed under the [MIT License](LICENSE).
