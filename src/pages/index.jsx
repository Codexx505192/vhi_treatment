import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import Link from "next/link";


export default function Home() {
  return (
    <>
       <section id="home-page">
        <div className="container">
           
           <div className="sher_block">
            <Header/>
            
            <div className="banner_block">
                <div className="left_txt">
                  <h1 className="txt2">
                 - сервис для <br />
                  организации лечения  <br />
                   по ОМС в России
                </h1>

                <p className="txt3">
                  Помогаем пациентам и клиникам найти друг друга <br />
                   и знаем как на этом заработать
                </p>

                <button className="btn">
                  <Link href="#" className="lnk3">
                  Узнать больше
                  </Link>
                </button>
                </div>

                <div className="banner_right">
                  <img src="./img/bnr.png" alt="" />
                </div>
            </div>
           </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="bannr2">
            <div className="txt_block">
              <p className="txt4">
                ВАМ ЭТО ЗНАКОМО?
              </p>

              <p className="txt5">
                Каждый день Ваш прием посещают десятки пациентов,  <br />
                 которым требуется не только профессиональная   <br />
                 амбулаторная, но и стационарная помощь.
              </p>


              <p className="txt6">
                В тоже время:
              </p>

              <ul className="ul2">
                <li>
                  Нужной методики лечения или докторов нет в ближайших клиниках
                </li>
                <li>
                  Ожидание бесплатной помощи может затянуться на месяцы и годы
                </li>
                <li>
                  Не все пациенты могут позволить себе платную госпитализацию
                </li>
              </ul>
            </div>

           <div className="b_r">
            <img src="./img/b_r.png" alt="" />
           </div>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="bannr3">
           <div className="txt_left">
            <p className="txt7">
              Госпитализация - <br />
               это элементарно
            </p>

            <p className="txt8">
              Сервис  <img src="./img/mini_logo.png" alt="" />- это бот в Telegram и WhatsApp, который возьмет <br />
              на себя весь процесс согласования и переговоров о госпитализации, <br />
              Вам остается только найти пациента и заполнить заявку.
            </p>
            </div> 

          <div className="bnr_img3">
            <img src="./img/bnnr3.png" alt="" />
          </div>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="bannr4">
            <div className="txt_left2">
              <p className="txt9">
                ЧТО БУДЕТ ДАЛЬШЕ?
              </p>

              <p className="txt10">
                Как только клиники примут решение и ответят на  <br />
                заявку, пациент получит предложения с возможными   <br />
                датами госпитализации и сможет выбрать одно из   <br />
                учреждений.
              </p>

              <p className="txt10">
                После выбора клиники пациенту останется пройти  <br />
                обследование перед госпитализацией и получить    <br />
                направление формы 057/У-04 в поликлинике по месту   <br />
                прикрепления.
              </p>
            </div>

            <div className="bannr_right4">
              <img src="./img/bnnr4.png" alt="" />
            </div>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="bannr5">
            <div className="bnnr5_left">
              <img src="./img/bnnr5.png" alt="" />
            </div>

            <div className="bnnr5_txt">
              <p className="txt11">
                ЗАЧЕМ МНЕ ЭТО?
              </p>

              <p className="txt12">
                За каждую заполненную Вами заявку в сервисе  <img src="./img/mini_logo.png" alt="" />  <br />
                 по которой произошла госпитализация, Вы получаете    <br />
                 агентское вознаграждение от 1000 рублей.
              </p>
            </div>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="bannr6">
           <div className="txt_left3">
            <p className="txt13">
              КОГДА ЗАРПЛАТА,  <br />
              <img src="./img/lgs.png" alt="" /> ?
            </p>

            <p className="txt14">
              Выплата вознаграждений за состоявшиеся   <br />
              госпитализации в текущем месяце производится   <br />
              автоматически до 10 числа следующего месяца.
            </p>

            <p className="txt14">
              Количество успешных госпитализаций, сумма  <br />
               вознаграждения по каждой заявке, а также выплаты за   <br />
               приглашенных коллег всегда доступны в интерфейсе бота
            </p>
           </div>

           <div className="bannr6_right">
            <img src="./img/bannr6.png" alt="" />
           </div>
          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="bannr7">
            <p className="txt15">
              ВАШИ ПРЯМЫЕ <br />
               ВЫГОДЫ
            </p>

            <div className="bottom_img">
              <img src="./img/btm.png" alt="" />
            </div>

            <div className="inf_block">
              <div className="itm">
                <div className="itm_top">
                 <img src="./img/tm.png" alt="" />
                 <p className="txt16">
                  Без подводных камней
                 </p>
                </div>

                <p className="txt17">
                  Количество госпитализаций по Вашим  <br />
                  заявкам всегда можно посмотреть в  <br />
                  интерфейсе бота, все прозрачно
                </p>
              </div>
               
               <div className="itm">
                <div className="itm_top">
                 <img src="./img/tm.png" alt="" />
                 <p className="txt16">
                  Только медицина
                 </p>
                </div>

                <p className="txt17">
                  Просто лечите пациентов и получайте  <br />
                  дополнительный доход, ничего лишнего, <br />
                   никаких продаж
                </p>
              </div>

              <div className="itm">
                <div className="itm_top">
                 <img src="./img/tm.png" alt="" />
                 <p className="txt16">
                 Быстрее чем писать
                 </p>
                </div>

                <p className="txt17">
                 Вся информация о пациенте у Вас под   <br />
                 рукой, заполнение заявки с ботом займет не более 3 минут
                </p>
              </div>


              <div className="itm">
                <div className="itm_top">
                 <img src="./img/tm.png" alt="" />
                 <p className="txt16">
                  Без подводных камней
                 </p>
                </div>

                <p className="txt17">
                  Количество госпитализаций по Вашим  <br />
                  заявкам всегда можно посмотреть в  <br />
                  интерфейсе бота, все прозрачно
                </p>
              </div>

              <div className="itm">
                <div className="itm_top">
                 <img src="./img/tm.png" alt="" />
                 <p className="txt16">
                  Без подводных камней
                 </p>
                </div>

                <p className="txt17">
                  Количество госпитализаций по Вашим  <br />
                  заявкам всегда можно посмотреть в  <br />
                  интерфейсе бота, все прозрачно
                </p>
              </div>
            </div>

          </div>
        </div>
       </section>

       <section>
        <div className="container">
          <div className="bannr8">
            <p className="txt18">
              ОСТАЛИСЬ ВОПРОСЫ ИЛИ  <br />
              ГОТОВЫ ОБСУДИТЬ ДЕТАЛИ?
            </p>


            <div className="bottom_b8">
              <img src="./img/bnr8.png" alt="" />
            </div>
          </div>
        </div>
       </section>

      <section>
        <div className="container">
          <Footer/>
        </div>
      </section>
    </>
  );
}
