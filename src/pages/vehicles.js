import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
/* Recommended to fetch with isomorphic fetch both server side and client side */
import fetch from "isomorphic-unfetch";

export default function Vehicles({list}) {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Brand</TableCell>
                <TableCell align="right">Model</TableCell>
                <TableCell align="right">OwnerId</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="right">{item.brand}</TableCell>
                  <TableCell align="right">{item.model}</TableCell>
                  <TableCell align="right">{item.ownerId}</TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

Vehicles.getInitialProps = async () => {
    const resp = await fetch("http://localhost:3000/api/vehicles");
    const json = await resp.json()

    return {list: json}
}