import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./slices/user";
// import { useTheme } from "@mui/material/styles";
// import {
//   Grid,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
// } from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";

const tableHead = [
  { id: "userName", label: "User Name", alignRight: false },
  { id: "email", label: "Username", alignRight: false },
  { id: "phoneNumber", label: "Phone Number", alignRight: false },
  { id: "school", label: "School", alignRight: false },
  { id: "assignedTo", label: "ASsigned To", alignRight: false },
];
function UserList({ isTableLoading }) {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  // const theme = useTheme();

  // useEffect(() => {
  //   if (response) {
  //     console.log(response);
  //     const { data, totalRecords } = response;
  //     setUsers(data);
  //     setTotalRecords(totalRecords);
  //   }
  // }, [response]);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  const onDelete = (uid) => dispatch(remove(uid));
  return (
    <div>
      {users.length > 0 ? (
        <div>
          Users list
          <ul>
            {users.map((user) => (
              <li key={user.uid}>
                <span>UID: {user.uid}</span>{" "}
                <span>First Name: {user.firstName}</span>
                <button onClick={() => onDelete(user.uid)}> Delete </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        "No Users found"
      )}
    </div>
  );
}

export default UserList;
