declare module 'react-quill-new' {
  import React from 'react';
  
  interface ReactQuillProps {
    value?: string;
    defaultValue?: string;
    readOnly?: boolean;
    theme?: string;
    modules?: any;
    formats?: string[];
    bounds?: string | HTMLElement;
    placeholder?: string;
    preserveWhitespace?: boolean;
    onChange?: (content: string, delta: any, source: string, editor: any) => void;
    onChangeSelection?: (selection: any, source: string, editor: any) => void;
    onFocus?: (selection: any, source: string, editor: any) => void;
    onBlur?: (previousSelection: any, source: string, editor: any) => void;
    onKeyDown?: React.KeyboardEventHandler<any>;
    onKeyPress?: React.KeyboardEventHandler<any>;
    onKeyUp?: React.KeyboardEventHandler<any>;
    className?: string;
  }

  export default class ReactQuill extends React.Component<ReactQuillProps> {}
}