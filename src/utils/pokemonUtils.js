export const calculateHeight = (heightInMeters) => {
  const meters = (heightInMeters / 10)?.toFixed(1);
  return meters;
};

export const calculateWeight = (weightInKg) => {
  const kg = weightInKg?.toFixed(1);
  return kg;
};