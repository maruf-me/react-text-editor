export const MORE_ADVANCE = [
  // default
  ["undo", "redo"],
  [
    ":p-More Paragraph-default.more_paragraph",
    "font",
    "fontSize",
    "formatBlock",
    "paragraphStyle",
    "blockquote",
  ],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["fontColor", "hiliteColor", "textStyle"],
  ["removeFormat"],
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "lineHeight"],
  [
    "-right",
    ":i-More Misc-default.more_vertical",
    "fullScreen",
    "showBlocks",
    "codeView",
    "preview",
    "print",
    "save",
    "template",
  ],
  ["-right", ":r-More Rich-default.more_plus", "table", "math", "imageGallery"],
  ["-right", "image", "video", "audio", "link"],
  // (min-width: 992)
  [
    "%992",
    [
      ["undo", "redo"],
      [
        ":p-More Paragraph-default.more_paragraph",
        "font",
        "fontSize",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
      ],
      ["bold", "underline", "italic", "strike"],
      [
        ":t-More Text-default.more_text",
        "subscript",
        "superscript",
        "fontColor",
        "hiliteColor",
        "textStyle",
      ],
      ["removeFormat"],
      ["outdent", "indent"],
      ["align", "horizontalRule", "list", "lineHeight"],
      [
        "-right",
        ":i-More Misc-default.more_vertical",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
        "print",
        "save",
        "template",
      ],
      [
        "-right",
        ":r-More Rich-default.more_plus",
        "table",
        "link",
        "image",
        "video",
        "audio",
        "math",
        "imageGallery",
      ],
    ],
  ],
  // (min-width: 767)
  [
    "%767",
    [
      ["undo", "redo"],
      [
        ":p-More Paragraph-default.more_paragraph",
        "font",
        "fontSize",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
      ],
      [
        ":t-More Text-default.more_text",
        "bold",
        "underline",
        "italic",
        "strike",
        "subscript",
        "superscript",
        "fontColor",
        "hiliteColor",
        "textStyle",
      ],
      ["removeFormat"],
      ["outdent", "indent"],
      [
        ":e-More Line-default.more_horizontal",
        "align",
        "horizontalRule",
        "list",
        "lineHeight",
      ],
      [
        ":r-More Rich-default.more_plus",
        "table",
        "link",
        "image",
        "video",
        "audio",
        "math",
        "imageGallery",
      ],
      [
        "-right",
        ":i-More Misc-default.more_vertical",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
        "print",
        "save",
        "template",
      ],
    ],
  ],
  // (min-width: 480)
  [
    "%480",
    [
      ["undo", "redo"],
      [
        ":p-More Paragraph-default.more_paragraph",
        "font",
        "fontSize",
        "formatBlock",
        "paragraphStyle",
        "blockquote",
      ],
      [
        ":t-More Text-default.more_text",
        "bold",
        "underline",
        "italic",
        "strike",
        "subscript",
        "superscript",
        "fontColor",
        "hiliteColor",
        "textStyle",
        "removeFormat",
      ],
      [
        ":e-More Line-default.more_horizontal",
        "outdent",
        "indent",
        "align",
        "horizontalRule",
        "list",
        "lineHeight",
      ],
      [
        ":r-More Rich-default.more_plus",
        "table",
        "link",
        "image",
        "video",
        "audio",
        "math",
        "imageGallery",
      ],
      [
        "-right",
        ":i-More Misc-default.more_vertical",
        "fullScreen",
        "showBlocks",
        "codeView",
        "preview",
        "print",
        "save",
        "template",
      ],
    ],
  ],
];

// ============================================
// Common Buttons
// ============================================
export const COMMON_TEXT_BUTTONS = [
  "bold",
  "italic",
  "underline",
  "strike",
  "subscript",
  "superscript",
  "removeFormat",
  "font",
  "fontSize",
  "formatBlock",
  "textStyle",
  "fontColor",
  "hiliteColor",
  "math",
];

const COMMON_LAYOUT_BUTTONS = [
  "outdent",
  "indent",
  "align",
  "list",
  "horizontalRule",
  "lineHeight",
];
const COMMON_MEDIA_BUTTONS = ["link", "image", "video", "audio", "table"];
const COMMON_ADVANCED_BUTTONS = [
  "showBlocks",
  "template",
  "preview",
  "print",
  "save",
  "undo",
  "redo",
  "fullScreen",
];

// ============================================
// Global Button List Variants
// ============================================
export const BLOG_VARIANTS = {
  // General / Simple Editor (for minimal blogs, comments, notes)
  simple: [[...COMMON_TEXT_BUTTONS, "link"]],

  simpleWithMedia: [
    [...COMMON_TEXT_BUTTONS, ...COMMON_LAYOUT_BUTTONS, ...COMMON_MEDIA_BUTTONS],
  ],

  minimal: [[...COMMON_TEXT_BUTTONS, "align", "list"]],

  // Detailed / Professional (for LMS, content creation, ERP notes)
  detailed: [
    [...COMMON_TEXT_BUTTONS, ...COMMON_LAYOUT_BUTTONS, ...COMMON_MEDIA_BUTTONS],
  ],

  detailedAdvanced: [
    [
      ...COMMON_TEXT_BUTTONS,
      ...COMMON_LAYOUT_BUTTONS,
      ...COMMON_MEDIA_BUTTONS,
      "math",
    ],
  ],

  // Full-featured Editor (enterprise, admin panels, ERP, LMS course editor)
  full: [
    ["font", "fontSize", "formatBlock"],
    [
      "bold",
      "italic",
      "underline",
      "strike",
      "subscript",
      "superscript",
      "blockquote",
    ],
    ["textStyle", "fontColor", "hiliteColor", "removeFormat", "paragraphStyle"],
    "/",
    [...COMMON_LAYOUT_BUTTONS],
    [...COMMON_MEDIA_BUTTONS],

    ["math", "showBlocks", "template", "preview", "codeView", "print"],
    ["save", "undo", "redo", "fullScreen"],
  ],
};

// ============================================
// LMS-Specific Variants
// ============================================
export const LMS_VARIANTS = {
  lessonBasic: [
    [...COMMON_TEXT_BUTTONS, "align", "list", "link", "image", "table"],
  ],

  lessonVideo: [
    [
      ...COMMON_TEXT_BUTTONS,
      "align",
      "list",
      "link",
      "image",
      "video",
      "blockquote",
    ],
  ],

  courseFull: [
    [
      ...COMMON_ADVANCED_BUTTONS,
      ...COMMON_TEXT_BUTTONS,
      ...COMMON_LAYOUT_BUTTONS,
      ...COMMON_MEDIA_BUTTONS,
      "math",
      "template",
    ],
  ],

  quizEditor: [
    [
      ...COMMON_TEXT_BUTTONS,
      "align",
      "list",
      "blockquote",
      "link",
      "table",
      "math",
    ],
  ],

  announcement: [
    [
      "bold",
      "italic",
      "underline",
      "fontColor",
      "align",
      "list",
      "link",
      "image",
      "video",
      "preview",
    ],
  ],

  certificateMinimal: [
    ["bold", "italic", "underline", "align", "list", "removeFormat", "link"],
  ],

  discussionReply: [
    [
      "bold",
      "italic",
      "underline",
      "strike",
      "fontColor",
      "align",
      "list",
      "blockquote",
      "link",
    ],
  ],

  adminNotes: [
    [
      ...COMMON_TEXT_BUTTONS,
      "align",
      "list",
      "blockquote",
      "link",
      "image",
      "preview",
    ],
  ],
};

// ============================================
// E-commerce Specific Variants
// ============================================
export const eCOMMERCE_VARIANTS = {
  productDescription: [
    [
      ...COMMON_TEXT_BUTTONS,
      ...COMMON_LAYOUT_BUTTONS,
      "link",
      "image",
      "table",
      "math",
    ],
  ],

  reviewEditor: [
    ["bold", "italic", "underline", "strike", "align", "list", "link"],
  ],

  adminProductNotes: [
    [
      ...COMMON_TEXT_BUTTONS,
      ...COMMON_LAYOUT_BUTTONS,
      ...COMMON_MEDIA_BUTTONS,
      "template",
    ],
  ],
};

// ============================================
// Merge all variants
// ============================================
export const GLOBAL_VARIANTS = {
  ...BLOG_VARIANTS,
  ...LMS_VARIANTS,
  ...eCOMMERCE_VARIANTS,
};

export type VariantType = keyof typeof GLOBAL_VARIANTS | "custom";
