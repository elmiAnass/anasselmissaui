
import WaterDropGrid from "./Dropwater"
import Headericons from "./headericons";

const Section = () => {

 
  return (
    <main className=" overflow-hidden" >
      <Headericons/>
      <section className="sm:flex pt-16 sm:pt-28 pl-6 sm:pl-20 max-w-7xl">
        <div className="head5 absolute top-20 right-12   hidden sm:block">
          < WaterDropGrid className='' />
        </div>
        <div className=" px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md   lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none ">
            <div className=" self-center lg:col-span-4 space-y-8">
              <h1 className="head1 text-5xl font-primary text-white sm:text-7xl xl:text-[6rem] opacity-80">Salut ! Je suis Anass <span className="text-[#0aff9d]">.</span></h1>
              <p className="head2 mt-5 text-2xl  leading-7 text-white font-light opacity-80 " > <span className="text-[#0aff9d] font-face text-4xl "> Développeur Full Stack</span></p>
              <div className="head4 relative inline-flex mt-9 group ">
                <div className=" absolute transitiona-all duration-1000 opacity-90 inset-0 bg-gradient-to-r from-[#acc0b3] via-[#232d21] to-[#5a6a66] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-100"></div>
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-black transition-all duration-200 bg-[#0aff9d] border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  role="button"
                >
                  Contactez moi
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="middle">
          <div className="mouse ">
          </div>
        </div>
      </section>
    <div className="head3">
</div>  
</main>
  );
};
export default Section



