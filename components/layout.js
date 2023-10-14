import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="h-full">{children}</main>
      <Footer />
    </>
  )
}

export default Layout