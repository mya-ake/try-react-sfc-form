import React, { useState } from 'react';
import { BaseTextarea, BaseButton } from '~/components/base';
import type { ReactEventHandler } from 'react';
import type { BaseTextareaProps } from '~/components/base';

interface FormValeus {
  comment: string;
}

export type CommentFormProps = {
  disabled?: boolean;
  onSubmit?: (values: FormValeus) => Promise<void> | void;
};

export const CommentForm: React.FC<CommentFormProps> = (props) => {
  const [values, setValues] = useState<FormValeus>({ comment: '' });

  /** handlers */
  const handleChange: BaseTextareaProps['onChange'] = (event) => {
    const value = event.currentTarget.value;
    setValues({
      ...values,
      comment: value,
    });
  };

  const handleSubmit: ReactEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(values);
  };

  /** views */
  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={props.disabled}>
        <legend>Comment Form</legend>
        <BaseTextarea
          name="comment"
          value={values.comment}
          onChange={handleChange}
        ></BaseTextarea>
        <BaseButton type="submit">Submit</BaseButton>
      </fieldset>
    </form>
  );
};
