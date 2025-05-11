// Cannot find any solution, as to why this is not working

export const getImageUrl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
