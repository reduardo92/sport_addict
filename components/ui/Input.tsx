import React, { ChangeEvent, useRef } from 'react';
import { FaCheck, FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

interface InputProps {
  label: string;
  name: string;
  value: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  aria_describedby?: string;
  minLength?: number;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  type,
  handleChange,
  placeholder,
  aria_describedby,
  minLength,
}) => {
  const ref = useRef<HTMLInputElement>(null);

  const inputValidation = (elem: HTMLInputElement) => {
    if (!elem) return;
    if (elem.value === '') return;
    if (elem.validity.valid) return 'is-success';
    return 'is-danger';
  };

  const checkType = () => {
    if (type === 'email')
      return <FaEnvelope className='icon is-small is-left' />;
    if (type === 'password')
      return <FaLock className='icon is-small is-left' />;
    return <FaUser className='icon is-small is-left' />;
  };
  return (
    <div className='field'>
      <label
        className='label'
        htmlFor={name}
        style={{ textTransform: 'capitalize' }}
      >
        {label}
      </label>
      <div className='control has-icons-left has-icons-right'>
        <input
          ref={ref}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={`input ${inputValidation(ref.current!)}`}
          type={type}
          placeholder={placeholder}
          aria-describedby={aria_describedby}
          minLength={minLength}
        />
        {checkType()}
        {inputValidation(ref.current!) === 'is-success' && (
          <FaCheck className='icon is-small is-right' />
        )}
      </div>
    </div>
  );
};

export default Input;
