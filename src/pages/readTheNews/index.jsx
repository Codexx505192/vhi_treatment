import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import SearchInput from "@/widjets/search";
import Link from "next/link";

export default function Page(){
    return(
        <>
        <section id="ReadTheNews-page">
          <div className="container">
            <div className="read_the_block">
                <Header/>

                <div>
                    <p className="txt24">
                        Новости
                    </p>

                    <SearchInput/>
                </div>

                <div className="news_r">
                    <div className="news_link">
                       <p className="txt28">
                     Новости
                       </p>

                       <div className="arrow_n">
                        <img src="./nws/arrow_n.png" alt="" />
                       </div>

                       <p className="txt29">
                        В поликлиниках Москвы заработал ИИ-сервис для заключительного диагноза
                       </p>
                    </div>

                    <p className="txt30">
                        В поликлиниках Москвы заработал <br />
                        ИИ-сервис для заключительного  <br />
                        диагноза
                    </p>

                    <p className="txt31">
                        Дата статьи: 02.12.2024
                    </p>

                    <div className="clinic_banner">
                        <img src="./nws/clinic.png" alt="" />
                    </div>
                </div>
            </div>
          </div>
        </section>

        <section>
            <div className="container">
            <div className="info_news">
                <p className="txt32">
                    Во всех взрослых поликлиниках столицы заработал новый сервис на базе искусственного интеллекта (ИИ), он помогает столичным терапевтам  <br />
                    и врачам общей практики в постановке заключительного диагноза на основе данных электронной медкарты пациента за последние два года   <br />
                    сообщила заммэра столицы по вопросам социального развития Анастасия Ракова. Ее слова приводятся на <Link href="#" className="lnk7">сайте.</Link>
                </p>

                <p className="txt32">
                    "Во всех взрослых поликлиниках Москвы заработал новый модуль системы поддержки принятия врачебных решений. Это сервис на основе   <br />
                    искусственного интеллекта, который помогает медикам поставить заключительный диагноз, анализируя данные электронной медкарты   <br />
                    пациента за последние два года", - сказала Ракова, чьи слова приводятся на портале мэра и правительства Москвы.
                </p>

                <p className="txt32">
                    В сообщении подчеркнули, что искусственный интеллект не заменяет врача, а ассистирует ему, дает второе мнение, если есть подозрения на  <br />
                    одно из 95 серьезных заболеваний, требующих диспансерного наблюдения. Среди них - сахарный диабет, застойная сердечная   <br />
                    недостаточность и язва желудка
                </p>

                <p className="txt32">
                    При этом уточняется, что если поставленный ИИ диагноз отличается от того, который поставил врач, то система сигнализирует об этом и  <br />
                    отображает уведомление. С его помощью терапевт может ознакомиться с диагнозом, поставленным цифровым ассистентом, согласиться с ним  <br />
                    или же поставить собственный. При этом окончательное решение всегда принимает специалист
                </p>

                <div className="btn_block">
                    <button className="btn4">
                        <Link href="/news" className="lnk8">
                        К списку новостей
                        </Link>
                    </button>

                    <button className="btn5">
                        <Link href="#" className="lnk9">
                        Следующая новость
                        </Link>
                    </button>
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
    )
}