import { fetchContacts } from 'redux/operation';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactsList/ContactsList';
import Filter from './Filters/Filters';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getError, getIsLoading } from 'redux/selectors';
import RoundSpinner from './Loading/Loading';
import Error from './Error/Error';

function App() {
  const isLoading = useSelector(getIsLoading);
  const isError=useSelector(getError)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <center>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !isError &&<RoundSpinner/>}
        {isError && !isLoading && <Error/>}
        {!isLoading && !isError && <ContactList />}
      </center>
    </div>
  );
}

export default App;
