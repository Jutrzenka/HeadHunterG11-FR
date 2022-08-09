import {useContext} from "react";
import { FormContext } from "../Form/Form";
import './_Input.scss'


type Type = 'text' | 'number' | 'password' | 'radio' | 'submit' | 'file';

interface Props {
  name: string;
  value?: any;
  type: Type;
  placeholder?:string;
  title?: string;
  maxLength?: number;
  minLength?: number;
}

export function Input({
                            name,
                            type,
                            title,
                            maxLength,
                            minLength,
                            placeholder,
                          }:Props) {
  const formContext = useContext<any>(FormContext);
  const { form, handleFormChange } = formContext;
  return (
      <div className="component-Input">
        <label>
          {title && <p>{title}</p>}
          <input
              type={type}
              value={form[name]}
              name={name}
              placeholder={placeholder}
              onChange={handleFormChange}
              maxLength={maxLength}
              minLength={minLength}
          />
        </label>
      </div>
  )
}
