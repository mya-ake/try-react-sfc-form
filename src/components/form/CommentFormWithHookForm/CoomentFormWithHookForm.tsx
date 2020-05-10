import React from 'react';
import { useForm } from 'react-hook-form';
import { BaseButton } from '~/components/base';
import { BaseTextareaWithHookForm } from '~/components/hook-form-base';
// import type { OnSubmit } from 'react-hook-form';

interface FormValeus {
  comment: string;
}

export type CoomentFormWithHookFormProps = {
  disabled?: boolean;
  onSubmit?: (values: FormValeus) => Promise<void> | void;
};

export const CoomentFormWithHookForm: React.FC<CoomentFormWithHookFormProps> = (
  props,
) => {
  const { register, handleSubmit } = useForm<FormValeus>({
    defaultValues: { comment: '' },
  });
  const onSubmit = handleSubmit((data) => {
    props.onSubmit && props.onSubmit(data);
  });

  /** views */
  return (
    <form onSubmit={onSubmit}>
      <fieldset disabled={props.disabled}>
        <legend>Comment Form</legend>
        <BaseTextareaWithHookForm
          name="comment"
          inputRef={register({})}
        ></BaseTextareaWithHookForm>
        <BaseButton type="submit">Submit</BaseButton>
      </fieldset>
    </form>
  );
};
