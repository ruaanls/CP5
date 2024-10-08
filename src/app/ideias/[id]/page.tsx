"use client"; 
import { ApodData } from '@/type'; 
import React, { useEffect, useState } from 'react';

const dados = [
    { id: 1, Titulo: "Sua história na Ciência", descricao: "Immanuel Velikovsky, em suas obras como Mundos em Colisão (1950), propôs teorias controversas que confrontavam o conhecimento científico estabelecido em várias disciplinas, como astronomia, física, geologia e história antiga. Suas ideias foram amplamente rejeitadas pela comunidade científica." },
    { id: 2, Titulo: "Temas Comuns em Diferentes Culturas", descricao: "Dilúvios: O mito do Dilúvio Universal, presente em diversas religiões e mitologias., Colisões Cósmicas: Relatos de colisões entre corpos celestes, associadas a grandes cataclismos. Eclipses e Cometas: Interpretados como sinais de mau agouro e mudanças cósmicas." },
    { id: 3, Titulo: "Catástrofes Celestes na Cultura Popular e na Ciência", descricao: "Ficção Científica: Influência em obras como Guerra dos Mundos e filmes de desastre." }
];

export default function Ideia({ params }: { params: { id: string } }) {
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
    
    const id = parseInt(params.id, 10);
    const dado = dados.find(d => d.id === id);
    
    if (!dado) {
        return <div>Item não encontrado.</div>;
    }

    return (
        <div>
            {loading ? (
                <p>Carregando...</p>
            ) : (
                <img src={apod?.url} alt="Imagem da NASA" />
            )}
            <h1>{dado.Titulo}</h1>
            <p>{dado.descricao}</p>
        </div>
    );
}
