export function getPercentage(
  array: any[],
  item: number,
  field: string,
  precision: number,
): string {
  let totalSum = 0;

  array.forEach((entry) => {
    totalSum += entry[field] || 0;
  });

  return ((item * 100) / totalSum).toFixed(precision) + '%';
}
