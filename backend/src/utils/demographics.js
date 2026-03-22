const ageToGroup = (age) => {
  if (age === null || age === undefined) return 'unknown';
  if (age < 13) return '0-12';
  if (age <= 17) return '13-17';
  if (age <= 24) return '18-24';
  if (age <= 34) return '25-34';
  if (age <= 44) return '35-44';
  if (age <= 54) return '45-54';
  return '55+';
};

module.exports = { ageToGroup };