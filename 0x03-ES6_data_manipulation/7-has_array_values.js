/* eslint-disable linebreak-style */
/* eslint-disable array-callback-return */
/* eslint-disable no-plusplus */
export default function hasValuesFromArray(set, list) {
  let hasValue = true;
  list.map((value) => {
    if (!set.has(value)) {
      hasValue = false;
    }
  });

  return hasValue;
}
