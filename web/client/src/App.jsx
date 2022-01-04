 import { Navbar, Footer, Services, Welcome, Transactions } from "./components"

const App = () => {
  return (
    <div className="min-h-screen">
      <div calssName = "gradient bg-welcome">
        <Navbar />
        <Welcome />

      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
