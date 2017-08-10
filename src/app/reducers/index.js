import { combineReducers } from 'redux';
import page from './page';
import contactForm from './contact-form';

export default combineReducers({
  page,
  contactForm
});
