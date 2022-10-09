import { useContext, useEffect, useRef } from 'react';
import { FormContext } from '../Form/Form';
import './_Input.scss';
import { log } from 'util';

type Type = 'text' | 'number' | 'password' | 'radio' | 'submit' | 'file';

interface Props {
  name: string;
  value?: any;
  type: Type;
  placeholder?: string;
  title?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
}

export function Input({
  name,
  value,
  type,
  title,
  maxLength,
  minLength,
  placeholder,
  disabled,
}: Props) {
  const formContext = useContext<any>(FormContext);
  const { form, handleFormChange } = formContext;
  // const inputRef = useRef<HTMLInputElement>(null);

  // useEffect(() => {
  //   if (inputRef.current != null) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  return (
    <div className={disabled ? 'component-Input disabled' : 'component-Input'}>
      <label>
        {title && <p>{title}</p>}
        <input
          type={type}
          value={type === 'radio' ? value : form[name]}
          name={name}
          placeholder={placeholder}
          onChange={handleFormChange}
          maxLength={maxLength}
          minLength={minLength}
          disabled={disabled ? disabled : false}
          checked={form[name] === value}
        />
      </label>
    </div>
  );
}
