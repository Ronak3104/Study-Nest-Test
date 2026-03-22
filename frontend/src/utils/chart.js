export const CHART_COLORS = [
  '#4f46e5',
  '#06b6d4',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#14b8a6'
];

export const toChartArray = (obj = {}) => {
  return Object.entries(obj).map(([name, value]) => ({
    name,
    value
  }));
};

export const getPieChartCells = (data = []) => {
  return data.map((_, index) => CHART_COLORS[index % CHART_COLORS.length]);
};