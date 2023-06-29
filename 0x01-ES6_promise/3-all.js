import { uploadPhoto, createUser } from './utils.js';


export default function handleProfileSignup() {
return Promise.all([uploadPhoto(), createUser()])
    .then((data) => {
        const [Photo, User] = data;
        console.log(`${Photo.body} ${User.firstName} ${User.lastName}`);
    })
    .catch((error) => {
        console.error('Signup system offline');
    });
}

// export default handleProfileSignup();