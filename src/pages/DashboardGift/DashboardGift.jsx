import { Link, NavLink } from "react-router-dom";
import "./DashboardGift.css";
function DashboardGift() {
  return (
    <>
      <div className="gift-main">
        <h3>کارت‌های هدیه</h3>
        <div className="nav-gift">
          <NavLink>
            <p>هدیه گرفتم</p>
          </NavLink>
          <NavLink>
            <p>هدیه دادم</p>
          </NavLink>
        </div>
        <div className="empty-gift">
          <img src="/src/assets/empty-gift-card.webp" alt="" />
          <p>
            کسی به شما کارت هدیه داده‌؟ اینجا اضافه کنید تا بعدا دنبالش نگردید
          </p>
          <h1>اضافه کردن کارت هدیه</h1>
        </div>
      </div>
    </>
  );
}

export default DashboardGift;
