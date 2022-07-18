import { useFormContext } from 'react-hook-form';
import React, { useContext } from 'react';
import { SocialContext } from './SocialContainer';

export const SocialProfile = props => {
  const { register } = useFormContext();
  const socialCtx = useContext(SocialContext);

  const deleteHandler = () => socialCtx.remove(props.profileIndex);

  return (
    <div>
      <input type="text" {...register(props.name)} />
      <button type="button" onClick={deleteHandler}>
        Delete
      </button>
    </div>
  );
};
