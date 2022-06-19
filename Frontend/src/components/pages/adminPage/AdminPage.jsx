import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdminHeader from "./adminPageComponents/AdminHeader";

const Admin = () => {
  const [action, setAction] = useState(null);

  return (
    <>
      <main className="admin">
        <AdminHeader />
        {!action && (
          <div>
            {" "}
            <h4 className="admin-sub-title">Would you like to:</h4>
            <Link to="/admin/create">
              <button className="admin-button">Create new Dog?</button>
            </Link>
            <button
              className="admin-button"
              onClick={() => setAction("update")}
            >
              Update dog?
            </button>
          </div>
        )}
      </main>
    </>
  );
};

export default Admin;
