import React from 'react';
import type { Ref } from 'react';

export interface BaseTextareaWithHookFormProps {
  name: string;
  defaultValue?: string;
  inputRef: Ref<HTMLTextAreaElement>;
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
