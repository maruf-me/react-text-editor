interface PreviewEditorProps {
  children: string; // HTML string
  className?: string;
}

export const PreviewEditor: React.FC<PreviewEditorProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`sun-editor-preview sun-editor-editable bg-transparent p-2 rounded ${className}`}
      // ⚠️ Render HTML content from editor
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
};
