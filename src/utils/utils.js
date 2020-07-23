const create2dArray = (rows, cols, value) => {
  return [...Array(rows)].map(() => Array(cols).fill(value));
};

export { create2dArray };
