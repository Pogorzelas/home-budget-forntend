export const validateObject = (object: object, shouldHaveLength: number): boolean => {
  const objectToValidate = Object.values(object);
  return objectToValidate.length !== shouldHaveLength;
};
