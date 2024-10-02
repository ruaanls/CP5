import Image from "next/image";
"use client";
  import { ApodData } from '../type'; 
  import { useEffect, useState } from 'react';

  

export default function Home() {
  const [apod, setApod] = useState<ApodData>(); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApod = async () => {
      
        const res = await fetch('/api/nasaImage'); 
        const data = await res.json();
        setApod(data);
        setLoading(false);
      
    };

    fetchApod();
  }, []);

  
  return (
    <div>
      

      
      <img src={apod?.url} alt="Imagem do dia aleatória" /> 
      

      <h1>Immanuel Velikovsky, world a collision e sua relação com a astronomia</h1>
      <p>Entenda um pouco sobre quem é este grande escritor e quais são suas principais teorias</p>
      <h2>Afinal, quem é Velikovsky?</h2>
      <p>Immanuel Velikovsky foi um escritor e psicanalista nascido na Rússia em 1895, que mais tarde se estabeleceu nos Estados Unidos. Ele se tornou famoso por propor teorias bastante polêmicas, que desafiavam o entendimento científico tradicional sobre história, astronomia e catástrofes naturais. Ao contrário de seguir a linha convencional, Velikovsky sugeria que eventos descritos em textos antigos, como a Bíblia, eram, na verdade, relatos de grandes desastres causados por interações entre a Terra e outros planetas.</p>
      <h2>Como um psicanalista se interessou por astronomia?</h2>
      <p>Immanuel Velikovsky desenvolveu seu interesse por astronomia a partir de sua busca por respostas a questões históricas e mitológicas. Embora sua formação acadêmica fosse em medicina e psicanálise, ele sempre teve um fascínio por textos antigos e a ideia de que muitos dos mitos e lendas de diferentes culturas poderiam estar descrevendo eventos reais. Essa curiosidade o levou a explorar a astronomia de uma forma não convencional, buscando uma ponte entre os eventos celestes e os relatos históricos.

      Velikovsky começou a perceber que muitas histórias antigas, especialmente as que envolviam catástrofes naturais, tinham semelhanças em várias culturas ao redor do mundo. Ele começou a investigar se esses eventos poderiam ter sido causados por fenômenos astronômicos. Isso o levou a explorar a ideia de que os planetas não sempre seguiram suas órbitas estáveis, como a ciência moderna sugere. Em vez disso, ele propôs que, em tempos relativamente recentes, planetas como Vênus e Marte tiveram órbitas instáveis, o que causou perturbações no sistema solar e afetou diretamente a Terra.</p>
      <h2>Worlds in Collision (1950) - Sua grande obra literária</h2>
      <p>Worlds in Collision (Mundos em Colisão) é o livro mais famoso de Immanuel Velikovsky, publicado em 1950. Nele, Velikovsky apresenta uma teoria ousada, sugerindo que o sistema solar passou por uma série de eventos cataclísmicos que afetaram a Terra de forma dramática. Ele argumenta que, em tempos históricos recentes, Vênus teria sido ejetado de Júpiter como um cometa e, ao passar perto da Terra, causou uma série de desastres naturais, como terremotos, tsunamis e mudanças climáticas. Velikovsky acreditava que esses eventos catastróficos foram registrados em textos antigos, como a Bíblia e mitos de diversas culturas ao redor do mundo.</p>
    </div>
  );
  }

