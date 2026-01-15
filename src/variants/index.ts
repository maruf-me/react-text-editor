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

const COMMON_LAYOUT_BUTTONS = ["align", "list", "horizontalRule", "lineHeight"];
const COMMON_MEDIA_BUTTONS = ["link", "image", "video", "table"];
const COMMON_ADVANCED_BUTTONS = [
  "undo",
  "redo",
  "fullScreen",
  "preview",
  "print",
  "template",
  "save",
  "showBlocks",
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
    ["undo", "redo"],
    ["font", "fontSize", "formatBlock", "textStyle"],
    [...COMMON_LAYOUT_BUTTONS],
    [...COMMON_MEDIA_BUTTONS],
    [...COMMON_ADVANCED_BUTTONS, "math"],
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
