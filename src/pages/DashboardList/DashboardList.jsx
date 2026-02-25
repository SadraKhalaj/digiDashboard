import React from "react";
import "./DashboardList.css";
import { NavLink } from "react-router-dom";
function DashboardList() {
  return (
    <>
      <div className="point">
        <div className="list">
          <h3>لیست‌ها</h3>
        </div>
        <div className="list-like">
          <NavLink>
            <p>لیست علاقه‌مندی</p>
          </NavLink>
          <NavLink>
            <p>لیست‌های دیگر</p>
          </NavLink>
          <NavLink>
            <p>اطلاع‌رسانی‌ها</p>
          </NavLink>
        </div>
        <div className="empty-like">
          <img src="/src/assets/favorites-list-empty.svg" alt="" />
          <p>لیست علاقه مندی های شما خالی است.</p>
        </div>
      </div>
    </>
  );
}

export default DashboardList;
