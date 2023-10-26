import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from "components/layout"
import Script from 'next/script'
import Works from '../../components/works'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >


    <Works></Works>
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
