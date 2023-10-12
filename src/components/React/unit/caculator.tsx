type listType = Array<number>; //[111.23,1223.23,24654.23]

const calculator = (amtList: listType): string => {
  const allDetailAmt = amtList.map((item) => Number(item));
  const totalAmt = allDetailAmt
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);
  return totalAmt;
};

export default calculator;
