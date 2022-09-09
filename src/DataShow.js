import React from "react";
import { useQuery } from "@apollo/client";
import { GET_USER_LIST } from "./Queries";

const DataShow = () => {
  const { error, data, loading } = useQuery(GET_USER_LIST, {
    onError: () => {
      console.log("error");
    },

    onCompleted: (data) => {},
    fetchPolicy: "no-cache",
  });

  console.log({ data, error });
  console.log(data);
  console.log(error);

  if (loading) return "Loading...";

  return (
    <>
      <div className="container mt-2">
        <table className="table table-striped">
          <tbody>
            <tr className="fs-5 table-dark">
              <td>User Name</td>
              <td>User Email Id</td>
              <td>User Role</td>
            </tr>
            {data.User.map((launch) => (
              <tr key={launch.id}>
                <td>{launch.UserName}</td>
                <td>{launch.Email}</td>

                <td>{launch.Role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default DataShow;
