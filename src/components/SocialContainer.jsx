import React from 'react';
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form';
import { SocialProfile } from './SocialProfile';

export const SocialContext = React.createContext({
  remove: () => {},
  append: () => {}
});

export const SocialContainer = props => {
  const { control } = useFormContext();

  const socialName = useWatch({
    name: `socials.${props.socialIndex}.social`,
    control
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: `socials.${props.socialIndex}.profiles`
  });

  const addProfileHandler = () => {
    append({
      name: ''
    });
  };

  return (
    <div>
      <SocialContext.Provider value={{ remove }}>
        <h1>{socialName}</h1>
        {fields.map((field, index) => (
          <SocialProfile
            profileIndex={index}
            name={`socials.${props.socialIndex}.profiles.${index}.name`}
            key={field.id}
          />
        ))}
        <button type="button" onClick={addProfileHandler}>
          Add profile
        </button>
      </SocialContext.Provider>
    </div>
  );
};
