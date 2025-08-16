import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans bg-fundo justify-items-center min-h-screen pb-20">
      <div className="pt-20 bg-fundo flex flex-col justify-center">
        <div className="text-titulo flex flex-col gap-6 mb-5 mt-2 p-30 pb-30 w-300 place-self-center">
          <h1 className='text-6xl font-semibold'>COMPREENDER PARA <br />CUIDAR MELHOR</h1>
          <h2 className='text-3xl text-texto font-medium'>Avaliação neuropsicológica especializada, fundamentada <br />na ciência e conduzida com empatia.</h2>
          <button className="bg-botao text-white w-150 p-2 rounded mt-8 text-xl hover:animate-pulse cursor-pointer">Quero saber mais</button>
        </div>
      </div>
      <div className="bg-titulo w-full">
        <div className="w-300 py-20 place-self-center flex flex-col gap-10 justify-self-center text-center">
          <h1 className="text-4xl text-white">O que é <span className="font-semibold">Avaliação Neuropsicológica</span>?</h1>
          <div className="rounded border shadow-2xl border-titulo">
            <p className="p-15 text-white text-2xl">Na NeuroEssência, acreditamos que cada mente é única e merece uma avaliação que vá além dos sintomas, alcançando a essência do indivíduo. Realizamos avaliações neuropsicológicas especializadas, fundamentadas na ciência e conduzidas com empatia e respeito. Nosso objetivo é mapear o funcionamento cognitivo, emocional e comportamental para orientar tratamentos, reabilitações, intervenções e apoiar o autoconhecimento.</p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-4xl mt-10 mb-10">Pra quem é indicada?</h1>
        <div className="flex flex-col gap-8">
          <div className="flex flex-row gap-8">
            <Image
              src={"/lapis.jpeg"}
              alt="Criança escolhendo cor do lápis"
              width={300}
              height={200}
            />
            <div className="bg- p-10 flex flex-col w-100 border rounded border-gray-400 gap-5 shadow-xl">
              <h1 className="font-semibold text-2xl text-titulo">Crianças</h1>
              <p className="text-xl text-texto">dificuldades escolares, atenção.</p>
            </div>
            <Image
              src={"/lapis.jpeg"}
              alt="Criança escolhendo cor do lápis"
              width={300}
              height={200}
            />
            <div className="bg- p-10 flex flex-col w-100 border rounded border-gray-400 gap-5 shadow-xl">
              <h1 className="font-semibold text-2xl text-titulo">Adolescentes</h1>
              <p className="text-xl text-texto">desempenho acadêmico, comportamento.</p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <Image
              src={"/lapis.jpeg"}
              alt="Criança escolhendo cor do lápis"
              width={300}
              height={200}
            />
            <div className="bg- p-10 flex flex-col w-100 border rounded border-gray-400 gap-5 shadow-xl">
              <h1 className="font-semibold text-2xl text-titulo">Adultos</h1>
              <p className="text-xl text-texto">memória, ansiedade, concentração.</p>
            </div>
            <Image
              src={"/lapis.jpeg"}
              alt="Criança escolhendo cor do lápis"
              width={300}
              height={200}
            />
            <div className="bg- p-10 flex flex-col w-100 border rounded border-gray-400 gap-5 shadow-xl">
              <h1 className="font-semibold text-2xl text-titulo">Idosos</h1>
              <p className="text-xl text-texto">avaliação cognitiva, suspeita de demência.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 mt-10 mb-10">
        <h1 className="text-4xl mb-10">O que investigamos?</h1>
        <div className="bg-titulo text-white p-4 rounded-xl shadow-xl">
          <p className="text-xl">- TEA, TDAH, TOD, Transtornos de aprendizagem (Dislexia, Discalculia, Disgrafia).</p>
        </div>
        <div className="bg-titulo text-white p-4 rounded-xl shadow-xl">
          <p className="text-xl">- Deficiência Intelectual / Atraso Global do Desenvolvimento, Declínios Cognitivos.</p>
        </div>
        <div className="bg-titulo text-white p-4 rounded-xl shadow-xl">
          <p className="text-xl">- Demências (ex.: Alzheimer), Depressão, Ansiedade, Altas habilidades / Superdotação.</p>
        </div>
      </div>
      <div className="bg-titulo w-full h-screen flex flex-col">
        <div className="bg-white w-3xl self-center mt-20 p-15 shadow-2xl rounded">
          <h1 className="text-2xl font-extrabold text-titulo mb-8">COMO FUNCIONA O PROCESSO:</h1>
          <div className="flex flex-col gap-2 text-texto text-lg">
            <p><strong>Etapa 1:</strong> Entrevista inicial – levantamento de história, queixas e objetivos.</p>
            <p><strong>Etapa 2:</strong> Aplicação de testes – 1 a 3 sessões presenciais ou online.</p>
            <p><strong>Etapa 3:</strong> Análise técnica – integração dos dados.</p>
            <p><strong>Etapa 4:</strong> Devolutiva – apresentação dos resultados e orientações.</p>
            <p className="mb-4"><strong>Etapa 5:</strong> Laudo final – documento técnico com recomendações.</p>
            <p>Duração média: 4 a 5 encontros.</p>
            <p>Formato: presencial (cidade) ou online.</p>
            <button className="bg-botao text-white w-150 p-2 rounded mt-8 text-xl hover:animate-pulse cursor-pointer">Agendar agora</button>
          </div>
        </div>
      </div>
    </div>
  );
}
