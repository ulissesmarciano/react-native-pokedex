export const calculateHeight = (heightInMeters) => {
  const meters = (heightInMeters / 10)?.toFixed(1);
  return meters;
};

export const calculateWeight = (weightInKg) => {
  const kg = (weightInKg / 10)?.toFixed(1);
  return kg;
};

export const formatId = (id) => `#${id?.toString().padStart(3, "0")}`;

export const calculateAverageBaseStats = (baseStat) => {
  const sumOfbaseStats = baseStat?.reduce((acc, num) => acc + num, 0)
  console.log(sumOfbaseStats);
  return sumOfbaseStats; 
}