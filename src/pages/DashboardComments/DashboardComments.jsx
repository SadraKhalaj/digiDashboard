import React from "react";
import "./DashboardComments.css";
import { NavLink } from "react-router-dom";
function DashboardComments() {
  return (
    <>
      <div className="all">
        <div className="comment">
          <h3>دیدگاه‌ها و پرسش‌ها</h3>
        </div>
        <div className="nav-comment">
          <NavLink>
            <h1>در انتظار دیدگاه</h1>
          </NavLink>
          <NavLink>
            <h1>دیدگاه‌های من</h1>
          </NavLink>
          <NavLink>
            <h1>پرسش‌های من</h1>
          </NavLink>
        </div>
        <div className="empty-comment">
          <img src="/src/assets/order-empty.svg" alt="" />
          <p>هنوز هیچ نظری ندارید</p>
        </div>
      </div>
    </>
  );
}

export default DashboardComments;
