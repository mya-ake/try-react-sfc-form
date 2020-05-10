import React, { ReactEventHandler } from 'react';

export interface BaseButtonProps {
  type?: 'button' | 'submit';
  onClick?: ReactEventHandler<HTMLButtonElement>;
}

export const BaseButton: React.FC<BaseButtonProps> = (props) => {
  return (
    <button
      type={props.type ?? 'button'}
      className="bg-blue-500 text-white rounded font-semibold px-3 py-1"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
