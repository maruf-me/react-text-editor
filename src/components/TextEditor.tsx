"use client";

import React, { useRef } from "react";
import SunEditor from "suneditor-react";
// import SunEditorCore from "suneditor/src/lib/core.js";
import katex from "katex";
import "suneditor/dist/css/suneditor.min.css";
import "katex/dist/katex.min.css";
import { SunEditorReactProps } from "suneditor-react/dist/types/SunEditorReactProps.js";
import { COMMON_TEXT_BUTTONS, GLOBAL_VARIANTS, VariantType } from "../variants/index.js";
import { SunEditorOptions } from "suneditor/src/options.js";
import { templates } from "../templates/index.js";

type TextEditorProps = SunEditorReactProps & {
  variant?: VariantType;
  children?: React.ReactNode;
  buttonList?: any[];
  setOptions?: SunEditorOptions;
};

const TextEditor = ({
  onChange,
  variant = "simple",
  buttonList = COMMON_TEXT_BUTTONS,
  setOptions = {
    resizingBar: true,
    resizeEnable: true,
    imageResizing: true,
    katex,
    templates: templates,
    addTagsWhitelist: "math",
  },
  ...props
}: TextEditorProps) => {
  const editor = useRef<any>(null);

  const getSunEditorInstance = (sunEditor: any) => {
    editor.current = sunEditor;
  };

  const handleChange = (content: string) => {
    if (onChange) {
      onChange(content);
    }
  };

  // const handleImageUploadBefore = (
  //   files: File[],
  //   _info: object,
  //   uploadHandler: (response: {
  //     result: { url: any; name: string }[];
  //     errorMessage?: string;
  //   }) => void,
  // ): boolean => {
  //   (async () => {
  //     const file = files[0];

  //     console.log({ file });
  //     // const webpFile = await convertImageToWebP(file);

  //     // const formData = new FormData();
  //     // formData.append("file", webpFile, "image.webp");
  //     // formData.append("directory", "editor");

  //     // const response = await api.post("/admin-file/upload", formData);
  //     // if (response.success) {
  //     //   setSelectedImages((prev) => [...prev, response.data]);

  //     //   uploadHandler({
  //     //     result: [
  //     //       {
  //     //         url: response.data,
  //     //         name: "thumbnail",
  //     //       },
  //     //     ],
  //     //   });
  //     // }
  //   })();
  //   return true;
  // };

  const processButtonList =
    variant === "custom" ? buttonList : GLOBAL_VARIANTS[variant];

  const SunEditorComp = SunEditor as any;

  return (
    // <div className="sun-editor-wrapper relative z-10">
    <SunEditorComp
      {...props}
      setAllPlugins
      onChange={handleChange}
      // onImageUploadBefore={handleImageUploadBefore}
      getSunEditorInstance={getSunEditorInstance}
      setOptions={{
        ...setOptions,
        buttonList: processButtonList,
      }}
    />
    // </div>
  );
};

TextEditor.displayName = "TextEditor";

export default TextEditor;
