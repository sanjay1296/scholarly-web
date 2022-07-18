import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./slices/user";
function UserList() {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(users);
  const onDelete = (uid) => dispatch(remove(uid));
  return (
    <div>
      {users.length > 0 ? (
        <div>
          Users list
          <ul>
            {users.map((user) => (
              <li>
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
