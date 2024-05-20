export const boardSize = 3;

export const getBoxNo = (row, col) => (boardSize*row+col)

export const getPossibleWinningLines = () => {
  const rowPossib = {};
  const colPossib = {};
  const diagnolsPossib = {};

  // Possible wins for rows and
  for (let i=0; i<boardSize; i++){
    rowPossib[i] = [];
    for(let j=0; j<boardSize; j++){
      rowPossib[i].push(getBoxNo(i,j))

      if(!colPossib[i]) colPossib[i] = [];
      colPossib[i].push(getBoxNo(j,i));
    }
  }
  // for diagnols
  for(let dia = 0; dia <2 ; dia++){
    // 2 possible diagnols
    diagnolsPossib[dia] = [];
    let j = dia === 0? 0 : boardSize-1
    // we will go from col in descending first with each row
    // then col ascending with each row
    for (let r=0 ; r<boardSize&&(j<boardSize || j>boardSize) ; r++) {
      
      diagnolsPossib[dia].push(getBoxNo(r,j));
      if (dia === 0 ) j++;
      else j--;
    
    }
  }
  const possibleWinsBoxes = [...Object.values(rowPossib),...Object.values(colPossib),...Object.values(diagnolsPossib)];
  return possibleWinsBoxes;

};
