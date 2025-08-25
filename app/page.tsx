import Image from "next/image";

export default function Home() {
	return (
		<div className="font-sans bg-fundo justify-items-center min-h-screen pb-20">
			<div className="pt-10 lg:pt-2 bg-fundo flex flex-col justify-center">
				<div className="text-titulo flex flex-col gap-6 mb-5 mt-2 lg:p-30 pb-30 lg:w-300 place-self-center">
					<h1 className='lg:text-6xl px-10 text-3xl font-semibold text-center'>AVALIAR, COMPREENDER <br />E TRANSFORMAR</h1>
					<h2 className='lg:text-3xl px-10 text-center lg:w-full text-texto font-medium'>Aqui, cada mente é cuidada com ciência, empatia e respeito à sua singularidade.</h2>
					<a href="https://wa.me/5531995356323" target="_blank" className="bg-botao w-60 self-center text-center text-white lg:w-150 p-2 rounded lg:mt-8 lg:text-xl hover:animate-pulse cursor-pointer">Quero saber mais</a>
				</div>
			</div>
			<div className="bg-titulo w-full">
				<div className="lg:w-300 py-20 place-self-center flex flex-col gap-10 justify-self-center lg:text-center">
					<h1 className="lg:text-4xl hidden lg:block text-3xl text-center text-white">O que é <span className="font-semibold">Avaliação Neuropsicológica</span>?</h1>
					<div className="rounded border shadow-2xl border-titulo">
						<div className="p-15">
							<h1 className="lg:text-4xl mb-5 text-3xl text-center lg:hidden text-white">O que é <span className="font-semibold">Avaliação Neuropsicológica</span>?</h1>
							<p className="text-white lg:text-2xl text-lg ">Na NeuroEssência, acreditamos que cada mente é única e merece uma avaliação que vá além dos sintomas, alcançando a essência do indivíduo. Realizamos avaliações neuropsicológicas especializadas, fundamentadas na ciência e conduzidas com empatia e respeito. Nosso objetivo é mapear o funcionamento cognitivo, emocional e comportamental para orientar tratamentos, reabilitações, intervenções e apoiar o autoconhecimento.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-5 mt-10 items-center">
				<h1 className="text-4xl mt-10 mb-10 text-titulo font-semibold">Para quem é indicada?</h1>
				<div className="flex flex-col gap-8">
					<div className="flex lg:flex-row flex-col gap-8">
						<div className="relative w-full lg:w-300 self-center max-w-sm h-60">
							<Image
								src="/lapis.jpeg"
								alt="Criança escolhendo cor do lápis"
								fill
								className="object-cover rounded"
							/>
						</div>
						<div className="p-10 flex flex-col lg:w-100 border rounded border-gray-400 gap-5 shadow-xl">
							<h1 className="font-bold text-2xl text-titulo">CRIANÇAS</h1>
							<p className="text-xl text-texto">dificuldades escolares, atenção.</p>
						</div>
						<div className="relative w-full lg:w-300 self-center items-center max-w-sm h-60">
							<Image
								src="/teen.jpg"
								alt="Adolescente"
								fill
								className="object-cover rounded"
							/>
						</div>
						<div className="p-10 flex w-full flex-col lg:w-100 border rounded border-gray-400 gap-5 shadow-xl">
							<h1 className="font-bold text-2xl text-titulo">ADOLESCENTES</h1>
							<p className="text-xl text-texto">desempenho acadêmico, comportamento.</p>
						</div>
					</div>
					<div className="flex lg:flex-row flex-col gap-8">
						<div className="relative w-full lg:w-300 self-center max-w-sm h-60">
							<Image
								src="/adult.jpg"
								alt="adulto sofrendo de ansiedade"
								fill
								className="object-cover rounded"
							/>
						</div>
						<div className="p-10 flex flex-col lg:w-100 border rounded border-gray-400 gap-5 shadow-xl">
							<h1 className="font-bold text-2xl text-titulo">ADULTOS</h1>
							<p className="text-xl text-texto">memória, ansiedade, concentração.</p>
						</div>
						<div className="relative w-full lg:w-300 self-center max-w-sm h-60">
							<Image
								src="/senior.jpg"
								alt="Idoso descobrindo doença"
								fill
								className="object-cover rounded"
							/>
						</div>
						<div className="p-10 flex flex-col lg:w-100 border rounded border-gray-400 gap-5 shadow-xl">
							<h1 className="font-bold text-2xl text-titulo">IDOSOS</h1>
							<p className="text-xl text-texto">avaliação cognitiva, suspeita de demência.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex w-full flex-col items-center gap-5 mt-10 mb-10">
				<div>
					<h1 className="text-4xl mt-10 mb-10 text-titulo font-semibold text-center">O que investigamos?</h1>

					<ul className="list-disc list-inside lg:text-xl space-y-4">
						<li className="bg-titulo text-white p-4 rounded-xl shadow-xl w-90 lg:w-full font-semibold">
							Transtorno do neurodesenvolvimento: TEA, TDAH, TOD.
						</li>
						<li className="bg-titulo text-white p-4 rounded-xl shadow-xl w-90 lg:w-full font-semibold">
							Altas habilidades, Superdotação.
						</li>
						<li className="bg-titulo text-white p-4 rounded-xl shadow-xl w-90 lg:w-full font-semibold">
							Transtorno da aprendizagem: Dislexia, Discalculia e Disgrafia.
						</li>
						<li className="bg-titulo text-white p-4 rounded-xl shadow-xl w-90 lg:w-full font-semibold">
							Deficiência Intelectual, atraso global do desenvolvimento, declínio cognitivo.
						</li>
						<li className="bg-titulo text-white p-4 rounded-xl shadow-xl w-90 lg:w-full font-semibold">
							Alzheimer e outras demências.
						</li>
						<li className="bg-titulo text-white p-4 rounded-xl shadow-xl w-90 lg:w-full font-semibold">
							Ansiedade e Depressão.
						</li>
						<li className="bg-titulo text-white p-4 rounded-xl shadow-xl w-90 lg:w-full font-semibold">
							Entre outros transtornos psiquiátricos.
						</li>
					</ul>
				</div>
			</div>

			<div className="bg-titulo w-full flex flex-col">
				<div className="bg-white lg:w-3xl self-center mt-20 mb-20 p-15 shadow-2xl rounded">
					<h1 className="text-3xl font-extrabold text-titulo mb-10">COMO FUNCIONA O PROCESSO:</h1>
					<div className="flex flex-col gap-10 text-texto text-lg">
						<div className="flex flex-col gap-4">
							<p className="text-xl font-semibold"><strong className="rounded-full font-normal bg-amber-300 px-3.5 py-2 mr-2">1</strong> Agendamento simples e acolhedor:</p>
							<p className="text-texto">Ao entrar em contato com a nossa equipe de atendimento, você recebe todas as orientações sobre valores, prazos e como vai funcionar seu processo de avaliação, além de ter um espaço aberto para esclarecer suas dúvidas.</p>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-xl font-semibold"><strong className="rounded-full font-normal bg-blue-300 px-3.5 py-2 mr-2">2</strong> Entrevista inicial com a neuropsicóloga responsável:</p>
							<p className="text-texto">A avaliação clínica acontece a partir de uma conversa detalhada para compreender a demanda. Entendendo quais as principais queixas, a história clínica, educacional e comportamental do paciente. Essa etapa é fundamental para direcionar todo o processo.</p>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-xl font-semibold"><strong className="rounded-full font-normal bg-emerald-300 px-3.5 py-2 mr-2">3</strong> Processo de Testagem:</p>
							<p className="text-texto">As sessões de avaliação são presenciais e agendadas previamente. Os instrumentos utilizados variam de acordo com a faixa etária e a demanda apresentada, sempre baseados em métodos científicos validados, garantindo rigor e confiabilidade.</p>
						</div>
						<div className="flex flex-col gap-4">
							<p className="text-xl font-semibold"><strong className="rounded-full font-normal bg-orange-300 px-3.5 py-2 mr-2">4</strong> Devolutiva – apresentação dos resultados e orientações.</p>
							<p className="text-texto">Após coletar os dados, a neuropsicóloga realiza uma análise detalhada e elabora um laudo completo. Na devolutiva, o paciente (ou responsável) recebe uma explicação clara e acessível sobre os resultados, além de orientações práticas e personalizadas para os próximos passos.</p>
						</div>
						<p className="font-semibold italic">Formato: presencial (Contagem - MG) ou online.</p>
						<a href="https://wa.me/5531995356323" target="_blank" className="bg-botao text-center text-white lg:w-150 p-2 rounded mt-8 text-xl hover:animate-pulse cursor-pointer">Agendar agora</a>
					</div>
				</div>
			</div>
		</div >
	);
}
