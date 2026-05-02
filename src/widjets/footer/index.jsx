import Link from "next/link";

export default function Footer(){
    return(
           <footer>
              <div className="left_footer">
                <p className="txt19">
                  Пишите/Звоните
                </p>

                <div className="itm_ftr">
                <div className="ftr_icn">
                  <img src="./img/ftr_icon.png" alt="icon" />
                </div>

                  <p className="txt20">
                    +7-903-905-56-65
                  </p>
                </div>

                <div className="itm_ftr">
                <div className="ftr_icn">
                  <img src="./img/ftr_icon.png" alt="icon" />
                </div>

                  <p className="txt20">
                    +7-903-905-56-65
                  </p>
                </div>

                <div className="itm_ftr">
                <div className="ftr_icn">
                  <img src="./img/ftr_icon.png" alt="icon" />
                </div>

                  <p className="txt20">
                    +7-903-905-56-65
                  </p>
                </div>
              </div>

              <div className="left_center">
                <p className="txt21">Больше информации</p>

                <div className="button_block">
                  <button className="btn2">
                    <Link href="#" className="lnk4">
                    ВКонтакте
                    </Link>
                  </button>

                  <button className="btn2">
                    <Link href="#" className="lnk4">
                    Телеграм
                    </Link>
                  </button>
                </div>
              </div>

              <div className="footer_right">
                <p className="txt22">Реквизиты</p>

                <p className="txt23">
                  ООО “Шердок” <br />
                  630107 г. Новосибирск <br />
                  ул. Троллейная 144, кв. 116 <br />
                  ИНН: 5404319338  <br />
                  ОГРН: 1235400032944  <br />
                  КПП: 540401001
                </p>
              </div>
            </footer>
    )
}