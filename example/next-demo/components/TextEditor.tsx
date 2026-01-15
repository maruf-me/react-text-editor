'use client'

import React from 'react'
import { templatesList } from '../../../config/editor-templates'
import { buttonListVariants, ButtonVariant } from '../../../config/editor-buttons'
import SunEditor from 'suneditor'
import 'suneditor/dist/css/suneditor.min.css'
import { resolvePluginsFromButtons } from '../../../src/module/core/resolvePluginsFromButtons'
import { buildEditorOptions } from '../../../src/module/core/buildEditorOptions'
import type { TextEditorRef as EditorAPI } from '../../../src/module/types'
import { useSunEditor } from '../../../src/module/core/useSunEditor'

export interface TextEditorProps {
  value?: string
  onChange?: (content: string) => void
  placeholder?: string
  height?: string
  variant?: ButtonVariant
  className?: string
  disabled?: boolean
  onReady?: (api: TextEditorRef) => void
}

export interface TextEditorRef extends EditorAPI { }

function TextEditor({
  value = '',
  onChange,
  placeholder = 'Start typing...',
  height = '300px',
  variant = 'detailedAdvance',
  className = '',
  disabled = false,
  onReady
}: TextEditorProps) {
  const { editorContainerRef } = useSunEditor({
    value,
    placeholder,
    height,
    variant,
    disabled,
    onChange,
    onReady
  })

  return (
    <div className={`react-suneditor-wrapper ${className}`}>
      <div
        ref={editorContainerRef}
        style={{
          minHeight: height,
          border: '1px solid #d1d5db',
          borderRadius: '6px',
          overflow: 'hidden'
        }}
      />
    </div>
  )
}

export default TextEditor
