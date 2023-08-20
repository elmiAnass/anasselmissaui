import Header from "./layout/header"
import Section from "./layout/section"
import CardPortfolio from "./layout/CardPortfolio"
import CardProjects from "./layout/CardProject"
import Experiance from "./layout/Experiance"
import Contact from "./layout/Contact"
export default function Home() {
  return (
<div className=" section">
<main className="flex ml-12  sm:ml-24">
 <Header/>
<Section/>
</main>
<div className="ml-16 sm:ml-40 ">
<CardPortfolio/>
<CardProjects/>
<Experiance/>
<Contact/>
</div>
  </div>)
}

