import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import leaderBoardUpdate, {assignRanking} from "./leaderBoardUpdate"

// Override regular table cells in material ui
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

// Override regular table rows in material ui
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(ranking, dorm, points) {
  return { ranking, dorm, points };
}

// Hard coded data for now, later will retrieve from Firebase
const rows = [
  createData(1, "Case", 500),
  createData(2, "Drinkward", 400),
  createData(3, "East", 350),
  createData(4, "West", 325),
  createData(5, "North", 300),
];

// Regular CSS styles
const useStyles = makeStyles({
  tableContainer: {
    maxWidth: 600,
  },
  table: {
    minWidth: 200,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ranking</StyledTableCell>
            <StyledTableCell align="left">Dorm</StyledTableCell>
            <StyledTableCell align="left">Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.dorm}>
              <StyledTableCell component="th" scope="row">
                {row.ranking}
              </StyledTableCell>
              <StyledTableCell align="left">{row.dorm}</StyledTableCell>
              <StyledTableCell align="left">{row.points}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export {leaderBoardUpdate, assignRanking}