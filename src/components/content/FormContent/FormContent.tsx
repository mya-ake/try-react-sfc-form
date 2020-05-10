import React, { useState, useCallback } from 'react';
import { CommentForm, CoomentFormWithHookForm } from '~/components/form';
import type { CommentFormProps } from '~/components/form';

const waitUntil = (time: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

export const FormContent: React.FC = () => {
  /** hooks */
  const [disabled, setDisabled] = useState(false);

  /** handlers */
  const handleSubmit: CommentFormProps['onSubmit'] = useCallback(
    async (values) => {
      setDisabled(true);
      // setValues(values);
      console.log('submit', values);
      await waitUntil(1000);
      setDisabled(false);
    },
    [],
  );

  /** view */
  return (
    <>
      <section className="p-3">
        <h2 className="text-xl">My Form</h2>
        {/* {contextJsx} */}
        <CommentForm disabled={disabled} onSubmit={handleSubmit}></CommentForm>
      </section>

      <section className="p-3 mt-4">
        <h2 className="text-xl">Hook Form</h2>
        <CoomentFormWithHookForm
          disabled={disabled}
          onSubmit={handleSubmit}
        ></CoomentFormWithHookForm>
      </section>
    </>
  );
};
