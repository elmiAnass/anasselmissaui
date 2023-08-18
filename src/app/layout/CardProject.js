
const CardProjects =()=>{

    return(
<div>  

<div className=" mt-12">
 <h1 className="Project sm:ml-28 text-white font-boldout sm:text-5xl text-3xl  mb-16 ml-12 opacity-80 "> Projects <span className="text-[#0aff9d]">.</span> </h1>

  <div className="Project3 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 opacity-70 ml-6 sm:ml-16">
    <div className="bg-[#232323] max-w-sm  px-6 pt-6 pb-2 rounded-xl shadow-lg   transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold  text-white"> Site des cours en ligne</h3>
      <div className="relative">
        <img src="/images/Capture_Sites.jpeg"
        alt="My Image"
        className="w-full rounded-xl"/>
      </div>
      <h1 className="mt-4 text-white text-sm font-bold cursor-pointer">Project de stage</h1>
      <div className="my-4">
        <div className="flex space-x-1 items-center">
          <span>
            
          </span>
        </div> 
        <div className="flex space-x-1 items-center text-white">
        
          <p className="text-[#0aff9d]">Next.js  - Tailwaind Css - strapi.js - git </p>
        </div>
      
       
      </div>
    </div>
    <div className="bg-[#232323] max-w-sm  px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold  text-white">Site E-commerce des ordinateur</h3>
      <div className="relative">
      <img className="w-full h-72 rounded-xl object-cover" src="./images/Ordishop.png" alt="Colors" />
    
      </div>
      <h1 className="mt-4 text-white text-sm font-bold cursor-pointer">Projet de premiere annee dont la formation Ofppt</h1>
      <div className="my-4">
        
      
        <div className="flex space-x-1 items-center text-white">
        <div className="flex space-x-1 items-center text-white">
        
        <p className="text-[#0aff9d]">Html5 - Css3 - Bootstrap - Php - Javascript </p>
      </div>
   
        </div>  
      </div>
    </div>
    <div className="bg-[#232323] max-w-sm   px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
      <h3 className="mb-3 text-xl font-bold  text-white">site  gestion des rendez vous</h3>
      <div className="relative">
        <img className="w-full h-72 rounded-xl object-cover" src="./images/Doctor.png" alt="Colors" />
      </div>
      <h1 className="mt-4 text-white text-sm font-bold cursor-pointer">site doctor gestion des rendez vous (PFE)</h1>
      <div className="my-4">
        
    
        <div className="flex space-x-1 items-center text-white">
        <p className="text-[#0aff9d]"> React.js  - Tailwaind Css - Laravel  - git </p>

        </div>
      </div>
    </div>
  </div>
</div>
  </div>   )
}
export default CardProjects