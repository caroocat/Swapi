export const helper = (param) => JSON.parse(localStorage.getItem(`${param}`));

export const setData = (item, name) => {
  let data = helper(item);
  let newData = data.filter((item) => item.name !== name);

  localStorage.setItem(item, JSON.stringify(newData));
  return newData;
};
