import React from 'react';

export interface BaseTextareaWithHookFormProps {
  name: string;
  defaultValue?: string;
  inputRef: (element: HTMLTextAreaElement | null) => void;
}

export const BaseTextareaWithHookForm: React.FC<BaseTextareaWithHookFormProps> = (
  props,
) => {
  return (
    <textarea
      name={props.name}
      defaultValue={props.defaultValue}
      className="w-full p-4 border rounded"
      ref={props.inputRef}
    ></textarea>
  );
};
