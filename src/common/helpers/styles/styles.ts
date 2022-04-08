export const important = (value?: string | number): string => {
  if (typeof value === undefined) {
    return '';
  }
  if (typeof value === 'number') {
    return value.toString() + 'px !important';
  }
  return value + ' !important';
};
