import React, { Fragment } from 'react';
import './style.css';
import { FormProvider, useForm, useFieldArray } from 'react-hook-form';
import { SocialContainer } from './components/SocialContainer';

export default function App() {
  const methods = useForm({
    defaultValues: {
      socials: [
        {
          social: 'Instagram',
          profiles: [
            {
              name: 'test 1'
            },
            {
              name: 'Test 2'
            },
            {
              name: 'Test 3'
            }
          ]
        },
        {
          social: 'TikTok',
          profiles: [
            {
              name: 'test 3'
            }
          ]
        },
        {
          social: 'Facebook',
          profiles: [
            {
              name: 'test 4'
            }
          ]
        }
      ]
    }
  });

  const { control } = methods;

  const { append, remove, fields } = useFieldArray({
    control,
    name: 'socials'
  });

  return (
    <FormProvider {...methods}>
      {fields.map((social, index) => (
        <SocialContainer socialIndex={index} key={social.id} />
      ))}
    </FormProvider>
  );
}
