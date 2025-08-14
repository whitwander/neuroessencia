import Image from 'next/image'

export default function Header() {
    return (
        <div className="flex flex-row p-2 justify-around align-middle">
            <Image
                src="/logo.jpeg"
                width={300}
                height={300}
                alt="Logo Neuro Essência"
            />
            <div className='self-center flex flex-row gap-14 text-xl'>
                <a className='text-texto hover:text-destaque' href="#">O que é?</a>
                <a className='text-texto hover:text-destaque' href="#">Processo</a>
                <a className='text-texto hover:text-destaque' href="#">Contato</a>
            </div>
            <button className='rounded bg-botao h-1px p-4 self-center hover:bg-titulo cursor-pointer hover:animate-pulse text-white text-xl'>Agende sua avaliação</button>
        </div>
    )
}