import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

    return(
        <header>
              <div className="left_header">
                <div className="logo">
                  <img src="./img/logo.png" alt="logo" />
                </div>

                <div className="app_b">
                  <div className="app_box">
                    <div className="tg">
                      <Link href="#" className="lnk1">
                      <img src="./img/telegram.png" alt="telegram" />
                      </Link>
                    </div>

                    <div className="tg">
                      <Link href="#" className="lnk1">
                      <img src="./img/whatsapp.png" alt="telegram" />
                      </Link>
                    </div>


                    <div className="tg">
                      <div className="iphone">
                      <img src="./img/iphone.png" alt="telegram" />
                      </div>
                    </div>
                  </div>

                  <p className="txt1">
                    +7-903-905-56-65
                  </p>
                </div>
              </div>

              <div className="right_header">
               <ul className="ul1">
                <li>
                   <Link href="/" className="lnk2">
                   Главная
                   </Link>
                </li>

                <li>
                   <Link href="/news" className="lnk2">
                   Новости
                   </Link>
                </li>

                <li>
                   <Link href="/diagnoses" className="lnk2">
                   Диагнозы
                   </Link>
                </li>

                <li>
                   <Link href="#" className="lnk2">
                   Услуги
                   </Link>
                </li>

                <li>
                   <Link href="#" className="lnk2">
                   Клиники
                   </Link>
                </li>

                <li className="li1">
                   <Link href="#" className="lnk2">
                   Войти
                   </Link>
                   <div className="ic">
                    <img src="./img/uil_signout.png" alt="" />
                   </div>
                </li>
               </ul>

               <div className="header_menu">
                <ul className={`header_list ${openMenu ? "active" : ""}`}>
                  <li className="header_itm">
                  <Link href="#" className="lnk5">
                   Главная
                  </Link>
                  </li>

                  <li className="header_itm">
                  <Link href="/news" className="lnk5">
                   Новости
                  </Link>
                  </li>

                  <li className="header_itm">
                  <Link href="/diagnoses" className="lnk5">
                   Диагнозы
                  </Link>
                  </li>

                  <li className="header_itm">
                  <Link href="#" className="lnk5">
                   Услуги
                  </Link>
                  </li>

                  <li className="header_itm">
                  <Link href="#" className="lnk5">
                   Клиники
                  </Link>
                  </li>

                  <li className="header_itm">
                  <Link href="#" className="lnk5">
                   Диагнозы
                  </Link>
                  </li>

                    <li className="header_itm">
                  <Link href="#" className="lnk5" onClick={() => setOpenMenu(false)}>
                   Выйти
                  </Link>
                  </li>
                </ul>
                <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
                <img src="./icons/menu.png" alt="menu" />
               </div>
               </div>
               
              </div>
            </header>
    )
}