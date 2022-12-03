import "./admintable.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 1,
    firstName: "sam",
    lastName: "hike",
    email: "email@hjsl",
    phoneNo: "23412313",
    location: "IND",
    favCategory: '["Technology","Sports","Business","Health","World"]',
    friends: null,
    followers: null,
    blocked: null,
    status: "Online",
  },
  {
    id: 2,
    firstName: "cam",
    lastName: "nemo",
    email: "email@hjsl",
    phoneNo: "23412313",
    location: "IND",
    favCategory: '["Technology","Sports","Business","Health","World"]',
    friends: "fi",
    followers: "fo",
    blocked: null,
    status: "Online",
  },
  {
    id: 3,
    firstName: "cam",
    lastName: "nemo",
    email: "email@hjsl",
    phoneNo: "23412313",
    location: "IND",
    favCategory: '["Technology","Sports","Business","Health","World"]',
    friends: null,
    followers: null,
    blocked: null,
    status: "Online",
  },
  {
    id: 4,
    firstName: "cam",
    lastName: "nemo",
    email: "email@hjsl",
    phoneNo: "23412313",
    location: "IND",
    favCategory: '["Technology","Sports","Business","Health","World"]',
    friends: null,
    followers: null,
    blocked: null,
    status: "Online",
  },
  {
    id: 5,
    firstName: "sam",
    lastName: "nemo",
    email: "email@hjsl",
    phoneNo: "23412313",
    location: "IND",
    favCategory: '["Technology","Sports","Business","Health","World"]',
    friends: null,
    followers: null,
    blocked: null,
    status: "Online",
  },
];

const AdminTable = () => {
  return (
    <TableContainer component={Paper} className="user-table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Users</TableCell>
            <TableCell className="tablecell">Email</TableCell>
            <TableCell className="tablecell">Location</TableCell>
            <TableCell className="tablecell">ContactNo</TableCell>
            <TableCell className="tablecell">FavCategory</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tablecell">{row.firstName}</TableCell>
              <TableCell className="tablecell">{row.email}</TableCell>
              <TableCell className="tablecell">{row.location}</TableCell>
              <TableCell className="tablecell">{row.phoneNo}</TableCell>
              <TableCell className="tablecell">{row.favCategory}</TableCell>
              <TableCell className="tablecell">
                <span className="userstatus">{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AdminTable;
