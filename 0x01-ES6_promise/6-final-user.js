import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise.allSettled(promises).then((values) => {
    return values.map((item) => ({
      status: item.status,
      value: item.status === 'fulfilled' ? item.value : item.reason,
    }));
  });
}
