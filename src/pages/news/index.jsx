import Footer from "@/widjets/footer";
import Header from "@/widjets/header";
import SearchInput from "@/widjets/search";
import Link from "next/link";

export default function page(){
    return(
        <>
        <section id="news-page">
            <div className="container">
             
             <div className="news_block">
                <Header/>

                <div className="nws_box">
                    <p className="txt24">
                        Новости
                    </p>

                    <SearchInput/>

                    <div className="search_grid">
                        <div className="search_itm">
                           <div className="search_top">
                            <img src="./nws/news_top.png" alt="" />
                            </div> 

                            <div className="search_bottom">
                                <p className="txt25">
                                    В поликлиниках Москвы  <br />
                                    заработал ИИ-сервис для  <br />
                                     заключительного диагноза
                                </p>

                                <p className="txt26">
                                    Во всех взрослых поликлиниках  <br />
                                    столицы заработал новый сервис...
                                </p>

                                <p className="txt27">
                                    02.12.2024
                                </p>

                                <button className="btn3">
                                    <Link href="/readTheNews" className="lnk6">
                                    Читать
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="search_itm">
                           <div className="search_top">
                            <img src="./nws/news_top.png" alt="" />
                            </div> 

                            <div className="search_bottom">
                                <p className="txt25">
                                    В поликлиниках Москвы  <br />
                                    заработал ИИ-сервис для  <br />
                                     заключительного диагноза
                                </p>

                                <p className="txt26">
                                    Во всех взрослых поликлиниках  <br />
                                    столицы заработал новый сервис...
                                </p>

                                <p className="txt27">
                                    02.12.2024
                                </p>

                                <button className="btn3">
                                    <Link href="/readTheNews" className="lnk6">
                                    Читать
                                    </Link>
                                </button>
                            </div>
                        </div>


                        <div className="search_itm">
                           <div className="search_top">
                            <img src="./nws/news_top.png" alt="" />
                            </div> 

                            <div className="search_bottom">
                                <p className="txt25">
                                    В поликлиниках Москвы  <br />
                                    заработал ИИ-сервис для  <br />
                                     заключительного диагноза
                                </p>

                                <p className="txt26">
                                    Во всех взрослых поликлиниках  <br />
                                    столицы заработал новый сервис...
                                </p>

                                <p className="txt27">
                                    02.12.2024
                                </p>

                                <button className="btn3">
                                    <Link href="#" className="lnk6">
                                    Читать
                                    </Link>
                                </button>
                            </div>
                        </div>



                        <div className="search_itm">
                           <div className="search_top">
                            <img src="./nws/news_top.png" alt="" />
                            </div> 

                            <div className="search_bottom">
                                <p className="txt25">
                                    В поликлиниках Москвы  <br />
                                    заработал ИИ-сервис для  <br />
                                     заключительного диагноза
                                </p>

                                <p className="txt26">
                                    Во всех взрослых поликлиниках  <br />
                                    столицы заработал новый сервис...
                                </p>

                                <p className="txt27">
                                    02.12.2024
                                </p>

                                <button className="btn3">
                                    <Link href="#" className="lnk6">
                                    Читать
                                    </Link>
                                </button>
                            </div>
                        </div>

                        <div className="search_itm">
                           <div className="search_top">
                            <img src="./nws/news_top.png" alt="" />
                            </div> 

                            <div className="search_bottom">
                                <p className="txt25">
                                    В поликлиниках Москвы  <br />
                                    заработал ИИ-сервис для  <br />
                                     заключительного диагноза
                                </p>

                                <p className="txt26">
                                    Во всех взрослых поликлиниках  <br />
                                    столицы заработал новый сервис...
                                </p>

                                <p className="txt27">
                                    02.12.2024
                                </p>

                                <button className="btn3">
                                    <Link href="#" className="lnk6">
                                    Читать
                                    </Link>
                                </button>
                            </div>
                        </div>


                        <div className="search_itm">
                           <div className="search_top">
                            <img src="./nws/news_top.png" alt="" />
                            </div> 

                            <div className="search_bottom">
                                <p className="txt25">
                                    В поликлиниках Москвы  <br />
                                    заработал ИИ-сервис для  <br />
                                     заключительного диагноза
                                </p>

                                <p className="txt26">
                                    Во всех взрослых поликлиниках  <br />
                                    столицы заработал новый сервис...
                                </p>

                                <p className="txt27">
                                    02.12.2024
                                </p>

                                <button className="btn3">
                                    <Link href="#" className="lnk6">
                                    Читать
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

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