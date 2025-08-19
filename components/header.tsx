import Image from 'next/image'

export default function Header() {
    return (
        <div className="bg-white w-full flex flex-row p-2 lg:justify-around justify-center align-middle">
            <div className="relative w-full max-w-sm">
                <Image
                    src="/logo.jpeg"
                    alt="Criança escolhendo cor do lápis"
                    width={200}
                    height={100}
                    className="object-cover rounded"
                />
            </div>
            <div className='hidden self-center lg:flex flex-row gap-14 text-xl'>
                <a className='text-texto hover:text-destaque' href="#">O que é?</a>
                <a className='text-texto hover:text-destaque' href="#">Processo</a>
                <a className='text-texto hover:text-destaque' href="#">Contato</a>
            </div>
            <a href="https://wa.me/5531995356323" target="_blank" className='hidden lg:block rounded bg-botao h-1px self-center p-2 hover:bg-titulo cursor-pointer hover:animate-pulse text-white text-lg lg:text-xl'>Agende sua avaliação</a>
        </div>
    )
}