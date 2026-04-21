import React, { useEffect, useState } from "react";
import "./LoginPage.css";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();

    const [isUserLoggedIn , setIsUserLoggedIn] = useState(false);
    useEffect(()=> {
        setTimeout(()=> {
            setIsUserLoggedIn(true);
        }, 3000)
    }, [])





  return (
    <>
      <div className="loginPage">
        <div class="login-card">
          <div class="header">
            <h1>ثبت‌نام</h1>
          </div>

          <div class="input-group">
            <input type="text" placeholder="نام کامل" />
          </div>

          <div class="input-group">
            <input type="email" placeholder="ایمیل" />
          </div>

          <div class="input-group">
            <input type="text" placeholder="نام کاربری" />
          </div>

          <div class="input-group">
            <input type="password" placeholder="رمز عبور" />
          </div>

          <div class="input-group">
            <input type="password" placeholder="تأیید رمز عبور" />
          </div>

          <button>ایجاد حساب</button>

          <div class="footer">قبلاً ثبت‌نام کرده‌اید؟ ورود</div>
          {isUserLoggedIn ? <Navigate to="/dashboard" replace={true} /> : null}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
