import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "components/layout"
import Script from 'next/script'
import Works from '../../components/works'
import Service from '../../components/service'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
    <div className="w-[1439px] h-[848px] px-[170px] py-[60px] bg-neutral-50 justify-center items-center gap-[60px] inline-flex">
      <div className="grow shrink basis-0 flex-col justify-start items-center gap-6 inline-flex">
        <div className="w-[799px] text-center text-black text-[40px] font-bold font-['Inter'] leading-[48px]">AutoSystemsの使命は、<br/>世界中のシステムを自動化し、<br/>世界中の人がアクセスできて<br/>使えるようにすることです。</div>
      </div>
    </div>


    <Works></Works>
    <Service></Service>
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
    </main>

    </Layout>
  )
}
