import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const feedback = [];

  return Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result) => {
        const status = result.status;
        const value = status === 'fulfilled' ? result.value : result.reason.message;

        feedback.push({
          status,
          value,
        });
      });

      return feedback;
    })
    .catch((error) => {
      console.error('Error:', error);
      return feedback;
    });
}
