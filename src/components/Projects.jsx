import React from 'react'

function Projects() {
  return (
    <section>
      <div className="mx-auto w-full px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className='flex items-center'>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl pr-6">Proyectos</h2>
          <span className="h-px flex-1 bg-black"></span>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="/TarjetasCredito.pbix" className="group block overflow-hidden">
              <img
                src="/TarjetasDeCredito.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <div className='flex'>
                  <h3 className="text-sm px-3 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    #PowerBi
                  </h3>
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    #Excel
                  </h3>
                </div>
                

                <p className="mt-2">
                  <span className="text-gray-900 font-semibold"> Tarjetas de Credito </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/datos.pbix" className="group block overflow-hidden">
              <img
                src="/OrganizaciónDatosClientes.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <div className='flex'>
                  <h3 className="text-sm px-2 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    #PowerBi
                  </h3>
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    #Excel
                  </h3>
                </div>

                <p className="mt-2">
                  <span className="text-gray-900 font-semibold"> Organización Datos Clientes </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/Datos-Azure.pbix" className="group block overflow-hidden">
              <img
                src="/bicicletas-azure.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <div className='flex'>
                  <h3 className="text-sm px-2 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    #PowerBi
                  </h3>
                  <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    #Azure
                  </h3>
                </div>

                <p className="mt-2">
                  <span className="text-gray-900 font-semibold"> Informe de Bicicletas </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/Tenis de Coleccion.xlsx" className="group block overflow-hidden">
              <img
                src="/Tenis.png"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <div className='flex'>
                  <h3 className="text-sm px-2 text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    #Excel
                  </h3>
                </div>

                <p className="mt-2">
                  <span className="text-gray-900 font-semibold"> Tenis de Colección </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects
