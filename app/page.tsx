export default function Home() {
  return (
    <div className="font-sans bg-fundo justify-items-center min-h-screen pb-20">
      <div className="pt-20 bg-fundo flex flex-col justify-center">
        <div className="text-titulo flex flex-col gap-6 mb-5 mt-2 p-30 pb-30 w-300 place-self-center">
          <h1 className='text-6xl font-semibold'>COMPREENDER PARA <br/>CUIDAR MELHOR</h1>
          <h2 className='text-3xl text-texto font-medium'>Avaliação neuropsicológica especializada, fundamentada <br />na ciência e conduzida com empatia.</h2>
          <button className="bg-botao text-white w-150 p-2 rounded mt-8 text-xl hover:animate-pulse cursor-pointer">Quero saber mais</button>
        </div>
      </div>
      <div className="bg-titulo p-40 w-full">
        <div className="w-400 place-self-center flex flex-col gap-10 justify-self-center">
          <h1 className="text-4xl text-white">O que é <span className="font-semibold">Avaliação Neuropsicológica</span>?</h1>
          <div className="bg-white rounded border">
            <p className="p-10 text-texto text-2xl">Na NeuroEssência, acreditamos que cada mente é única e merece uma avaliação que vá além dos sintomas, alcançando a essência do indivíduo. Realizamos avaliações neuropsicológicas especializadas, fundamentadas na ciência e conduzidas com empatia e respeito. Nosso objetivo é mapear o funcionamento cognitivo, emocional e comportamental para orientar tratamentos, reabilitações, intervenções e apoiar o autoconhecimento.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
