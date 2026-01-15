"use client";

import React, { useRef } from "react";
import SunEditor from "suneditor-react";
import SunEditorCore from "suneditor/src/lib/core";
import katex from "katex";
import "suneditor/dist/css/suneditor.min.css";
import "katex/dist/katex.min.css";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps";
import { COMMON_TEXT_BUTTONS, GLOBAL_VARIANTS, VariantType } from "../variants";
import { SunEditorOptions } from "suneditor/src/options";
import { templatesList } from "../templates";

type TextEditorProps = SunEditorReactProps & {
  variant?: VariantType;
  children?: React.ReactNode;
  buttonList?: any[];
  setOptions?: SunEditorOptions;
};

const AdvancedEditor = ({
  onChange,
  variant = "simple",
  buttonList = COMMON_TEXT_BUTTONS,
  setOptions = {
    resizingBar: true,
    resizeEnable: true,
    imageResizing: true,
    katex,
    templates: templatesList,
    addTagsWhitelist: "math",
  },
  ...props
}: TextEditorProps) => {
  const editor = useRef<SunEditorCore | null>(null);

  const getSunEditorInstance = (sunEditor: SunEditorCore) => {
    editor.current = sunEditor;
  };

  const handleChange = (content: string) => {
    if (onChange) {
      onChange(content);
    }
  };

  const handleImageUploadBefore = (
    files: File[],
    _info: object,
    uploadHandler: (response: {
      result: { url: any; name: string }[];
      errorMessage?: string;
    }) => void
  ): boolean => {
    (async () => {
      const file = files[0];

      console.log({ file });
      // const webpFile = await convertImageToWebP(file);

      // const formData = new FormData();
      // formData.append("file", webpFile, "image.webp");
      // formData.append("directory", "editor");

      // const response = await api.post("/admin-file/upload", formData);
      // if (response.success) {
      //   setSelectedImages((prev) => [...prev, response.data]);

      //   uploadHandler({
      //     result: [
      //       {
      //         url: response.data,
      //         name: "thumbnail",
      //       },
      //     ],
      //   });
      // }
    })();
    return true;
  };

  const processButtonList =
    variant === "custom" ? buttonList : GLOBAL_VARIANTS[variant];

  return (
    // <div className="sun-editor-wrapper relative z-10">
    <SunEditor
      {...props}
      setAllPlugins
      onChange={handleChange}
      onImageUploadBefore={handleImageUploadBefore}
      getSunEditorInstance={getSunEditorInstance}
      setOptions={{
        ...setOptions,
        buttonList: processButtonList,
      }}
    />
    // </div>
  );
};

AdvancedEditor.displayName = "AdvancedEditor";

export default AdvancedEditor;

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
