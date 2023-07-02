/* eslint-disable linebreak-style */
export default function uploadPhoto(filename) {
  return new Promise((reject) => {
    reject(
      console.log(new Error(`${filename} cannot be processed`)),
    );
  });
}
