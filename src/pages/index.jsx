import Login from '@/pages/login/Login'
import NavBarLogin from '@/components/NavBarLogin'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <>
      <NavBarLogin />
      <Login />
      <Footer />
    </>
  )
}