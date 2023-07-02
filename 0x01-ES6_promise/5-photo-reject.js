/* eslint-disable linebreak-style */
export default function uploadPhoto(fileName) {
  return new Promise((reject) => {
    reject(
      console.log(new Error(`${fileName} cannot be processed`)),
    );
  });
}
