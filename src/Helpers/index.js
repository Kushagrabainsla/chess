const diagonalDictionaryTLBR = require('../Paths/diagonalTopLeftBottomRight.json');
const diagonalDictionaryTRBL = require('../Paths/diagonalTopRightBottomLeft.json');
const rowDictionary = require('../Paths/row.json');
const columnDictionary = require('../Paths/column.json');

const isSameRow = (src, dest) => {
  return !!(rowDictionary[src] && rowDictionary[src][dest]);
}

const isSameColumn = (src, dest) => {
  return !!(columnDictionary[src] && columnDictionary[src][dest]);
}

const isSameDiagonal = (src, dest) => {
  return !!((diagonalDictionaryTLBR[src] && diagonalDictionaryTLBR[src][dest]) ||
    (diagonalDictionaryTRBL[src] && diagonalDictionaryTRBL[src][dest]))
}

const isPathClean = (srcToDestPath, squares) => srcToDestPath.reduce((acc, curr) => !squares[curr] && acc, true)


module.exports = {
  isSameRow,
  isSameColumn,
  isSameDiagonal,
  isPathClean
}