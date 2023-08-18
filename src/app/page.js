import Header from "./layout/header"
import Section from "./layout/section"
import CardPortfolio from "./layout/CardPortfolio"
import CardProjects from "./layout/CardProject"
import Experiance from "./layout/Experiance"
import Contact from "./layout/Contact"
export default function Home() {
  return (
<div >
<main className="flex">
 <Header/>
<Section/>
</main>
<CardPortfolio/>
<CardProjects/>
<Experiance/>
<Contact/>
  </div>)
}
