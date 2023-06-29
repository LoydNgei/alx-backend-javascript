import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const A = uploadPhoto();
  const B = createUser();
  return Promise.all([A, B])
    .then((data) => {
      console.log(`${data[0].body} ${data[1].firstName} ${data[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

// export default handleProfileSignup();
