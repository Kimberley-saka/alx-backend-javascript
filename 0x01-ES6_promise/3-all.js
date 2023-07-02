/* eslint-disable linebreak-style */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((UserResult) => {
      const { body: { firstName, lastName } } = UserResult;
      console.log(`${firstName} ${lastName}`);
    })
    .catch((error) => {
      console.error('An error occurred:', error);
    });
}
