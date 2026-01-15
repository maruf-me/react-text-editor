export const buttonListVariants = {
  simple: [
    ['undo', 'redo'],
    ['font', 'fontSize'],
    ['bold', 'underline', 'italic', 'strike'],
    ['fontColor', 'hiliteColor'],
    ['align'],
    ['list', 'indent', 'outdent'],
    ['link'],
    ['removeFormat']
  ],

  detailedSimple: [
    ['undo', 'redo'],
    ['font', 'fontSize'],
    ['formatBlock'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor'],
    ['align', 'horizontalRule', 'list', 'indent', 'outdent'],
    ['table', 'link', 'image'],
    ['removeFormat']
  ],

  detailedAdvance: [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'lineHeight'],
    ['table', 'link', 'image', 'video'],
    ['fullScreen', 'showBlocks', 'codeView'],
    ['preview', 'print'],
    ['save', 'template']
  ],

  advanceFull: [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'lineHeight'],
    ['table', 'link', 'image', 'video', 'audio'],
    ['math'],
    ['fullScreen', 'showBlocks', 'codeView'],
    ['preview', 'print'],
    ['save', 'template'],
    ['dir_ltr', 'dir_rtl']
  ]
} as const

export type ButtonVariant = keyof typeof buttonListVariants