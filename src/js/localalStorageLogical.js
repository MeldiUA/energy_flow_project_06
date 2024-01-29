export const LS_FAV = 'favourite';

export const setFav = arr => {
  localStorage.setItem(LS_FAV, JSON.stringify(arr));
};

export const getFav = key => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.log(err.message);
    //   add notification here in future instead of log
  }
};

export const removeFromFav = id => {
  const filteredArr = getFav(LS_FAV).filter(obj => obj._id !== id);
  localStorage.removeItem(LS_FAV);
  localStorage.setItem(LS_FAV, JSON.stringify(filteredArr));
};
