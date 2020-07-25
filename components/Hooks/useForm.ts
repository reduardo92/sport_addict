import { ChangeEvent, useState } from 'react';

const useForm = (initialState: any, callback: any) => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setForm((form: any) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (e.currentTarget.checkValidity() === false) {
      e.stopPropagation();
    }

    callback();
  };

  return { handleChange, handleSubmit, form, setForm };
};

export default useForm;
