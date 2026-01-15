# React SunEditor Wrapper

A powerful and customizable rich text editor wrapper for React applications. Built with SunEditor and TypeScript for maximum flexibility and developer experience.

## Features

- 🎨 **Multiple Editor Variants** - From simple to full-featured editors
- 📝 **Rich Text Editing** - Full WYSIWYG capabilities
- 🧮 **Math Support** - KaTeX integration for mathematical expressions
- 📋 **Template System** - Pre-built templates for common use cases
- 🎯 **TypeScript Support** - Full type safety and IntelliSense
- 🔧 **Customizable** - Extensive configuration options
- 📱 **Responsive** - Works on all device sizes
- 🎭 **Ref API** - Imperative API for advanced use cases

## Installation

```bash
npm install react-suneditor-wrapper suneditor
# or
yarn add react-suneditor-wrapper suneditor
# or
pnpm add react-suneditor-wrapper suneditor
```

## Quick Start

```tsx
import React, { useState } from 'react'
import { TextEditor } from 'react-suneditor-wrapper'

function MyComponent() {
  const [content, setContent] = useState('')

  return (
    <TextEditor
      value={content}
      onChange={setContent}
      placeholder="Start typing..."
      variant="detailedAdvance"
    />
  )
}
```

## Editor Variants

### Simple
Basic formatting tools for simple text editing.

### Detailed Simple
Extended formatting with tables and media support.

### Detailed Advance (Default)
Full-featured editor with templates and advanced formatting.

### Advance Full
Complete editor with math support and all features.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Editor content |
| `onChange` | `(content: string) => void` | - | Content change handler |
| `placeholder` | `string` | `'Start typing...'` | Placeholder text |
| `height` | `string` | `'300px'` | Editor height |
| `variant` | `'simple' \| 'detailedSimple' \| 'detailedAdvance' \| 'advanceFull'` | `'detailedAdvance'` | Editor variant |
| `className` | `string` | `''` | Additional CSS classes |
| `disabled` | `boolean` | `false` | Disable editor |

## Ref API

Access editor methods using ref:

```tsx
import React, { useRef } from 'react'
import { TextEditor, TextEditorRef } from 'react-suneditor-wrapper'

function MyComponent() {
  const editorRef = useRef<TextEditorRef>(null)

  const insertHTML = () => {
    editorRef.current?.insertHTML('<p>Hello World!</p>')
  }

  const getContent = () => {
    const content = editorRef.current?.getContents()
    console.log(content)
  }

  return (
    <div>
      <TextEditor ref={editorRef} />
      <button onClick={insertHTML}>Insert HTML</button>
      <button onClick={getContent}>Get Content</button>
    </div>
  )
}
```

### Ref Methods

- `insertHTML(html: string)` - Insert HTML at cursor position
- `getContents()` - Get current editor content
- `setContents(contents: string)` - Set editor content
- `focus()` - Focus the editor
- `blur()` - Blur the editor

## Templates

The package includes pre-built templates:

- **Welcome Letter** - Professional welcome letter template
- **Product Description** - Comprehensive product description template
- **Meeting Minutes** - Structured meeting minutes template

## Configuration

### Button Variants

Customize editor buttons by importing button configurations:

```tsx
import { buttonListVariants } from 'react-suneditor-wrapper'

// Use custom button configuration
const customButtons = buttonListVariants.simple
```

### Templates

Access and customize templates:

```tsx
import { templatesList } from 'react-suneditor-wrapper'

// Use custom templates
const customTemplates = [
  ...templatesList,
  {
    name: 'Custom Template',
    html: '<div>Custom content</div>'
  }
]
```

## Advanced Usage

### Custom Styling

```tsx
<TextEditor
  className="my-custom-editor"
  style={{ border: '2px solid #blue' }}
/>
```

### Math Support

The editor includes KaTeX support for mathematical expressions:

```tsx
// Math will be rendered automatically
const mathContent = '$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$'
```

### Event Handling

```tsx
<TextEditor
  onChange={(content) => {
    console.log('Content changed:', content)
  }}
  onFocus={() => console.log('Editor focused')}
  onBlur={() => console.log('Editor blurred')}
/>
```

## Development

### Setup

```bash
git clone <repository-url>
cd react-suneditor-wrapper
pnpm install
```

### Build

```bash
pnpm build
```

### Test

```bash
pnpm test
```

### Demo

```bash
cd examples/next-demo
pnpm install
pnpm dev
```

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © [Your Name]

## Changelog

### 1.0.0
- Initial release
- Multiple editor variants
- TypeScript support
- Template system
- KaTeX integration
- Ref API
- Comprehensive documentation

## Support

If you encounter any issues or have questions, please:

1. Check the [documentation](#)
2. Search [existing issues](#)
3. Create a [new issue](#)

---

Made with ❤️ for the React community
