import React, { ReactEventHandler } from 'react';

export interface BaseTextareaProps {
  name: string;
  value: string;
  onChange: ReactEventHandler<HTMLTextAreaElement>;
}

export const BaseTextarea: React.FC<BaseTextareaProps> = (props) => {
  return (
    <textarea
      name={props.name}
      value={props.value}
      className="w-full p-4 border rounded"
      onChange={props.onChange}
    ></textarea>
  );
};
