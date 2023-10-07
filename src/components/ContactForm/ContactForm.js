import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operation';
import { Formik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import {
  Label,
  FormContainer,
  InputField,
  SubmitButton,
  StyleForm,
} from './ContactForm.styled';
import { getContacts } from 'redux/selectors';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
 
  const handleSubmitForm = (values, { resetForm }) => {
    const { name, number } = values;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase() 
      )
    ) {
      toast.error(`${name} already exists.`);
      resetForm();
      return;
    }
    dispatch(addContact({ name, number }));
    toast.success(`${name} added`);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmitForm}
    >
      {({ handleSubmit }) => (
        <FormContainer>
          <StyleForm onSubmit={handleSubmit}>
            <Label htmlFor="name">Name:</Label>
            <InputField
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
            <Label htmlFor="number">Number:</Label>
            <InputField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
            />
            <SubmitButton type="submit">Add Contact</SubmitButton>
            <Toaster />
          </StyleForm>
        </FormContainer>
      )}
    </Formik>
  );
}

export default ContactForm;
