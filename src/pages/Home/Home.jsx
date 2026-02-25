import React from 'react'
import "./Home.css";

function Home() {
  return (
    <>
      <h1>
        «از اطمینان در خرید تا لذت از استفاده، دیجی‌کالا پلی‌ست بین نیاز
        <br /> و رضایت؛ با تنوعی بی‌پایان و خدماتی که همیشه کنار شماست.»
      </h1>
      <div className="homePage">
        <img className="home-image" src="/src/assets/home.gif" alt="" />
      </div>
      <div className="brands">
        <p>محبوب‌ترین برندها</p>
        <div className="brand-cards">
          <img
            src="https://dkstatics-public.digikala.com/digikala-brands/2c36ceb629598fa31b9b321fcd4e47773bd93ef7_1649498016.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
            alt=""
          />
          <img
            src="https://dkstatics-public.digikala.com/digikala-brands/7d615272ba7fc5dd708195ae858e2971de86a06f_1649498033.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
            alt=""
          />
          <img
            src="https://dkstatics-public.digikala.com/digikala-brands/9f5727fd7c13dc4b10c879a1865d77bc1fb333ce_1705308969.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
            alt=""
          />
          <img
            src="https://dkstatics-public.digikala.com/digikala-brands/d23e8875d5f7a9735e433f1fd86a1513902efc8b_1604470597.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
            alt=""
          />
          <img
            src="https://dkstatics-public.digikala.com/digikala-brands/699e393a8b4d1472d8ea2b4feb5e154837458a93_1665557207.jpg?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
            alt=""
          />
          <img
            src="https://dkstatics-public.digikala.com/digikala-brands/3aa3b23b69f8b1f562701129bc9b12a280ab7320_1697869714.png?x-oss-process=image/resize,m_lfit,h_160,w_160/quality,q_80"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Home