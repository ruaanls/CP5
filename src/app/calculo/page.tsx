import { ApodData } from "@/type";
import React, { useEffect, useState } from "react";

export default function Calculo() {


  const [apod, setApod] = useState<ApodData>(); // Ajustando o estado inicial para null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApod = async () => {
      
        const res = await fetch('/api/nasaImage'); // Chamando a nova API
        const data = await res.json();
        setApod(data);
        setLoading(false);
      
    };

    fetchApod(); // Busca inicial
  }, []);
  return (
    <div>
      <img src={apod?.url} alt="" />
      <section className="introducao">
        <h2>O Tempo de Aproximação de Vênus</h2>
        <p>
          Uma das teorias mais controversas de Immanuel Velikovsky, apresentada
          em seu livro Mundos em Colisão (1950), é a ideia de que o planeta
          Vênus não sempre ocupou sua órbita atual. Velikovsky sugeriu que,
          cerca de 3.500 anos atrás, Vênus teria sido ejetado de Júpiter como um
          cometa e passado perto da Terra em várias ocasiões, causando enormes
          catástrofes naturais.
        </p>
        <p>
          Segundo Velikovsky, esses encontros entre a Terra e Vênus ocorreram no
          que ele chamou de "Tempo de Aproximação". Durante esse período, ele
          argumenta que o novo cometa, Vênus, passou perigosamente perto da
          Terra, desencadeando eventos descritos em mitos e textos religiosos ao
          redor do mundo, como pragas, inundações, e a separação do Mar Vermelho
          durante o Êxodo bíblico.
        </p>
      </section>

      <section className="catastrofes-associadas">
        <h2>Catástrofes Associadas</h2>
        <p>
          Velikovsky associou uma série de eventos descritos em textos antigos à
          passagem de Vênus. Ele sugeriu que a aproximação do cometa teria
          alterado o campo magnético da Terra, gerado tremores de terra e
          erupções vulcânicas, e até mudado o eixo de rotação do planeta, o que
          explicaria relatos de fenômenos incomuns, como o "sol parado"
          mencionado na Bíblia. Segundo ele, o impacto gravitacional e
          eletromagnético entre os dois corpos celestes foi suficiente para
          causar mudanças dramáticas no clima e na geografia terrestre.
        </p>
      </section>

      <section className="venus-como-cometa">
        <h2>Vênus como um Cometa</h2>
        <p>
          Uma das ideias centrais dessa teoria é que Vênus, originalmente, não
          era um planeta estável em sua órbita atual, mas sim um cometa errante
          que teria circulado pelo sistema solar. Após esses encontros com a
          Terra, o cometa Vênus gradualmente estabilizou sua órbita atual,
          tornando-se o planeta que conhecemos hoje. Essa hipótese contraria
          completamente o entendimento da astronomia moderna, que sustenta que
          os planetas do sistema solar, incluindo Vênus, se formaram há bilhões
          de anos e que suas órbitas são o resultado de processos gravitacionais
          estáveis.
        </p>
      </section>
      <section>
        <h2>Termodinâmica e temperatura de Vênus</h2>
        <p>
          Termodinâmica e temperatura de Vênus: Velikovsky sugeriu que a alta
          temperatura de Vênus era resultado de seu passado recente como um
          cometa e de eventos cataclísmicos. No entanto, ele não fez cálculos
          termodinâmicos para explicar por quanto tempo Vênus teria que esfriar
          desde que foi ejetado de Júpiter até alcançar suas condições atuais. A
          ciência moderna explica a temperatura de Vênus pelo efeito estufa,
          causado pela densa atmosfera de dióxido de carbono, algo que pode ser
          modelado matematicamente com a termodinâmica e a ciência atmosférica,
          áreas que Velikovsky não abordou quantitativamente.
        </p>
      </section>
    </div>
  );
}
