export default function Hero() {
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-lg font-semibold text-sky-500">👋Hola, soy Amaury García</p>
            <h1 className="mt-4 text-3xl font-bold underline decoration-wavy decoration-sky-500 tracking-tight text-gray-900 sm:text-5xl">Analista de Datos</h1>
            <p className="w-2/3 m-auto mt-6 text-lg leading-7 text-gray-600">Experto en el uso de herramientas de visualizacion de datos como Power BI para el diseño de informes interactivos que mejoran la toma de decisiones estratégicas.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a 
                href="mailto:amaurygp9@gmail.com"
                // className="flex p-2 border-solid rounded border-2 border-sky-500 hover:bg-sky-100"
                className="transition-background inline-flex h-12 items-center justify-center rounded-md border border-gray-800 bg-gradient-to-r from-sky-100 via-[#fff] to-[#0ea5e9] bg-[length:200%_200%] bg-[0%_0%] px-6 font-medium text-gray-950 duration-500 hover:bg-[100%_200%] focus:outline-none focus:ring-2 focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span className="pr-1">Conctato</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a
                href="/CV-Amaury-Garcia.pdf"
                title="CV"
                className="rounded-md bg-sky-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-user"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  