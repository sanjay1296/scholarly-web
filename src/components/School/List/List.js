import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Table from "../../common/Table";

import { fetchAllSchools } from "./../schoolSlice";
const tableHead = [
  { id: "schoolName", label: "School Name", alignRight: false },
  { id: "createdAt", label: "Created At", alignRight: false },
  { id: "address", label: "Address", alignRight: false },
];
function UserList() {
  const { list } = useSelector((state) => state.schools);
  const dispatch = useDispatch();

  const rows = useMemo(() => {
    if (!list?.length) {
      return [];
    }
    const _rows = [];

    list.forEach((item) => {
      const row = [
        item.schoolName,
        moment(item.createdAt).format("lll"),
        `${item.address}, ${item.city} - ${item.pincode}`,
      ];
      _rows.push(row);
    });

    return _rows;
  }, [list]);
  // const theme = useTheme();

  useEffect(() => {
    dispatch(fetchAllSchools());
  }, []);
  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };
  //   const onDelete = (uid) => dispatch(remove(uid));
  return <Table columns={tableHead} rows={rows} />;
}

export default UserList;
