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
npm install @marufme/react-text-editor suneditor katex

# Using pnpm
pnpm add @marufme/react-text-editor suneditor katex

# Using yarn
yarn add @marufme/react-text-editor suneditor katex
```

## 📖 Quick Start

```tsx
import React, { useState } from 'react';
import { TextEditor } from '@marufme/react-text-editor';

// Import styles (Required)
import 'suneditor/dist/css/suneditor.min.css';
import 'katex/dist/katex.min.css';

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

We provide massive variants out of the box. You can pass these to the `variant` prop.

| Variant | Best For |
| :--- | :--- |
| `simple` | Comments, quick notes, basic posts |
| `detailedAdvanced` | Deep content creation with Math support |
| `full` | Enterprise admin panels, advanced CMS |
| `courseFull` | LMS course builders & lesson editors |
| `quizEditor` | Educational quizzes and assessments |
| `productDescription` | E-commerce product details |

### Usage with Specialist Variant

```tsx
<TextEditor variant="detailedAdvanced" height="500px" />
```

## 📄 Templates

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
