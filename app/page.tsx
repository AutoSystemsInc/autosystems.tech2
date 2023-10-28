import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "components/layout"
import Script from 'next/script'
import Works from 'components/works'
import Service from 'components/service'
import NewsCard from 'components/news-card'
import News from 'components/news'
import Top from 'components/top'
import AboutUs from 'components/about-us'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="w-[1440px] h-[4864px] bg-zinc-100 flex-col justify-start items-center inline-flex">
        <Top></Top>
        <Works></Works>
        <Service></Service>
        <AboutUs></AboutUs>
        <News></News>
        {//<!-- Contact-->
        }
        <section className="page-section" id="contact">
          <div className="container">
            <Script src="https://sdk.form.run/js/v2/embed.js"/>
            <div
              className="formrun-embed"
              data-formrun-form="@s-hara-1682018099"
              data-formrun-redirect="true">
            </div>                
          </div>
        </section>
      </div>
    </main>

    </Layout>
  )
}
