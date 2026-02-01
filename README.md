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
      variant="simple"
      defaultValue={content}
      onChange={setContent}
      placeholder="Start typing your story..."
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

## ⚙️ Configuration & Props

The package comes bundled with professional HTML templates. Users can insert these via the "Template" button in the editor.

- **LMS**: Course Overview (English/Bangla), Lesson Content, Instructor Profile.
- **E-commerce**: Product Descriptions, Promotional Banners.
- **Internal**: Memos, Internal Notes.

## ⚙️ Configuration & Props

In addition to standard `SunEditor` props, we support:

| Prop | Type | Description |
| :--- | :--- | :--- |
| `variant` | `VariantType` | One of the pre-defined variant names (e.g., `detailed`, `full`). |
| `buttonList` | `any[]` | Custom button list if `variant="custom"`. |
| `setOptions` | `SunEditorOptions` | Deep configuration for the underlying SunEditor. |
| `getSunEditorInstance` | `(sunEditor: any) => void` | Callback to get the editor instance. |

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
