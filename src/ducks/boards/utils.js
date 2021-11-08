export const findBoard = (boards, boardId) => boards.find(board => (
  parseInt(board.id, 10) === parseInt(boardId, 10)
));

export const updateBoard = (boards, updatedBoard) => [
  ...boards.map(board => {
    if(parseInt(board.id, 10) === parseInt(updatedBoard.id, 10)){
      return updatedBoard
    }
    else {
      return board
    }
  }),
]