export const findColumn = (columns, columnId) => columns.find(column => (
  parseInt(column.id, 10) === parseInt(columnId, 10)
));

export const findBoardColumns = (columns, boardId) => columns.filter(column =>
  parseInt(column.boardId, 10) === parseInt(boardId, 10)
);

export const updateColumn = (columns, updatedColumn) => [
  ...columns.map(column => {
    if (parseInt(column.id, 10) === parseInt(updatedColumn.id, 10)) {
      return updatedColumn
    } else {
      return column
    }
  }),
]