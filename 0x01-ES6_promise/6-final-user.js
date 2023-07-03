import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  const feedback = [];

  try {
    const results = await Promise.allSettled(promises);
    results.forEach((result) => {
      const { status } = result;
      const value = status === 'fulfilled' ? result.value : result.reason.message;

      feedback.push({
        status,
        value,
      });
    });
    return feedback;
  } catch (error) {
    console.error('Error:', error);
    return feedback;
  }
}
