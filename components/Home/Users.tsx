import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@/slices/userSlice";
import { AppDispatch, RootState } from "@/store/store";

const Users = () => {
  const userRef = useRef(false);
  const { entities, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  console.log("loading: ", loading);

  useEffect(() => {
    if (userRef.current === false) dispatch(fetchUsers());
    return () => {
      userRef.current = true;
    };
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading....</h1>
      ) : (
        entities?.map((user: any) => <h3 key={user.id}>{user.name}</h3>)
      )}
    </div>
  );
};

export default Users;
