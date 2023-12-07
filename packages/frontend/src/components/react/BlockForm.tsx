import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { z } from 'zod';

const FormValuesSchema = z.object({
  formId: z.number(),
  email: z
    .string()
    .email({ message: 'Bitte geben Sie eine gültige E-Mail an' })
    .min(6, { message: 'Bitte geben Sie eine E-Mail an' }),
  name: z.string().min(2, { message: 'Bitte geben Sie einen Namen an' }),
  message: z.string().min(2, { message: 'Bitte geben Sie eine Nachricht an' }),
  checkbox: z.boolean().refine((val) => val === true, {
    message: 'Bitte akzeptieren Sie die Datenschutzerklärung'
  })
});

type FormValues = z.infer<typeof FormValuesSchema>;

type Props = {
  formId: number;
};

const BlockForm = ({ formId }: Props) => {
  // State.
  const [sent, setSent] = useState(false);

  // React Hook Form.
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm<FormValues>({
    defaultValues: {
      formId,
      email: '',
      name: '',
      checkbox: false
    },
    resolver: zodResolver(FormValuesSchema)
  });

  // Watchers.
  const checked = watch('checkbox');

  // Handlers.
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await fetch(
      'https://x.realexperts.de/flows/trigger/bc726ecd-18a2-434f-b231-6efc01a2a2af',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...data
        })
      }
    );

    reset();
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-8'>
      <input type='hidden' {...register('formId')} />
      <div className='col-span-2 md:col-span-1'>
        <input
          className='block w-full p-2.5 text-re-blue placeholder:text-re-blue'
          type='text'
          placeholder='Name'
          {...register('name')}
        />
        {errors.name && (
          <div className='mt-2 text-left text-sm text-re-red'>
            {errors.name.message}
          </div>
        )}
      </div>
      <div className='col-span-2 md:col-span-1'>
        <input
          className='block w-full p-2.5 text-re-blue placeholder:text-re-blue'
          type='email'
          placeholder='E-Mail'
          {...register('email')}
        />
        {errors.email && (
          <div className='mt-2 text-left text-sm text-re-red'>
            {errors.email.message}
          </div>
        )}
      </div>
      <div className='col-span-2'>
        <textarea
          placeholder='Nachricht'
          cols={30}
          rows={6}
          className='w-full p-2.5 text-re-blue placeholder:text-re-blue'
          {...register('message')}
        />
        {errors.message && (
          <div className='mt-2 text-left text-sm text-re-red'>
            {errors.message.message}
          </div>
        )}
      </div>
      <div className='col-span-2 text-sm text-re-blue'>
        <label className='flex cursor-pointer items-start gap-2'>
          <input
            type='checkbox'
            id='checkbox'
            className='hidden'
            {...register('checkbox')}
          />
          <span
            className={twMerge(
              'relative left-0 -mt-1 mr-2 inline-block h-6 w-6 flex-none cursor-pointer bg-white transition-all duration-300 ease-in-out',
              checked && 'bg-re-blue'
            )}
          >
            <div
              className={twMerge(
                'absolute left-2 top-1 h-3 w-2 rotate-45 border-4 border-l-0 border-t-0 border-white opacity-0 transition-all duration-300 ease-in-out',
                checked && 'opacity-100'
              )}
            ></div>
          </span>
          <span class='text-left'>
            Ja, ich habe die Datenschutzerklärung zur Kenntnis genommen.
          </span>
        </label>
        {errors.checkbox && (
          <div className='mt-2 text-left text-sm text-re-red'>
            {errors.checkbox.message}
          </div>
        )}
      </div>
      <div className='col-span-2 mt-12 flex justify-end'>
        <button
          type='submit'
          className='inline-block whitespace-nowrap bg-re-red px-12 py-3 text-lg font-bold uppercase tracking-wide text-white'
        >
          Absenden
        </button>
      </div>

      {sent && (
        <div className='col-span-2 mt-6 text-re-blue'>
          Vielen Dank für Ihre Nachricht. Wir werden uns schnellstmöglich bei
          Ihnen melden.
        </div>
      )}
    </form>
  );
};

export default BlockForm;
