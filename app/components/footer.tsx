import React from 'react'
import Image from 'next/image'

export default function Footer () {
  return (
    <div className="justify-evenly items-center mt-4">
      <div className="mb-5 lg:ml-5">
        <Image
          src="/img/icons8-forma-starburst-48.png"
          width={35}
          height={35}
          alt="logo do site"
        />
      </div>

      <div className="flex-col items-center flex 
                      sm:flex-row sm:flex-wrap sm:justify-center
                      lg:flex-nowrap lg:justify-evenly">
        <div className="w-1/2 mb-2 
                        sm:h-40 sm:w-5/12
                        lg:w-[200px]">

          <h2 className="text-xl mb-3">Sobre nós</h2>
          <ul className="ml-3">
            <li>O que é E-commerce Estrelar</li>
          </ul>
        </div>

        <div className="w-1/2 mb-2 
                        sm:h-40 sm:w-5/12
                         lg:w-[200px]">
          <h2 className="text-xl mb-3 mt-3">Contato</h2>
          <ul className="ml-3">
            <li className="mb-2">Por Telefone</li>
            <li className="mb-2">Por email</li>
            <li className="mb-2">Whatsapp</li>
            <li>E Mais</li>
          </ul>
        </div>

        <div className="w-1/2  mb-2
                        sm:h-40 sm:w-5/12
                         lg:w-[200px]">
          <h2 className="text-xl mb-3 mt-3">Termos e políticas</h2>
          <ul className="ml-3">
            <li className="mb-2">Termos de uso</li>
            <li className="mb-2">Polítca de privadicade</li>
            <li>Política de cookies</li>
          </ul>
        </div>

        <div className="w-1/2  mb-2
                        sm:h-40 sm:w-5/12
                         lg:w-[200px]">
          <h2 className="text-xl mb-3 mt-3">Direitos autorais</h2>
          <ul className="ml-3 mt-1">
            <li>Uso de imagens e icones</li>
          </ul>
        </div>
      </div>
      <div className="w-full text-center mt-2">
        <h3 className="text-lg">&copy; Desenvolvido por José Leandro</h3>
      </div>
    </div>
  )
}
