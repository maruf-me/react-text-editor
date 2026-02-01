import "suneditor/dist/css/suneditor.min.css";
import "katex/dist/katex.min.css";

interface PreviewEditorProps {
  children: string; // HTML string
  className?: string;
  [key: string]: any;
}

export const PreviewEditor: React.FC<PreviewEditorProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`sun-editor-preview sun-editor-editable bg-transparent ${className || ""}`}
      // ⚠️ Render HTML content from editor
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
