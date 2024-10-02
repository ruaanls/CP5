import { NextResponse } from 'next/server';

// Data base inicial
let baseDate = new Date('2015-06-19');

export async function GET() {
    let data; // Variável para armazenar os dados da API
    let attempts = 0; // Contador para evitar loops infinitos

    // Loop para buscar até encontrar uma imagem
    while (true) {
        // Adiciona um dia à baseDate
        baseDate.setDate(baseDate.getDate() + 1);
        
        // Formata a data para YYYY-MM-DD
        const formattedDate = baseDate.toISOString().split('T')[0];
        
        // Constrói a URL da API com a data formatada
        const url = `https://api.nasa.gov/planetary/apod?api_key=2aRVsGBJmDKRNiUkj6loFRiZazV7n3oippVQ55Si&date=${formattedDate}`;

        // Faz a requisição para a API da NASA
        const res = await fetch(url);
        data = await res.json();
        
        // Verifica se o tipo de mídia é uma imagem
        if (data.media_type === 'image') {
            break; // Sai do loop se for uma imagem
        }

        
    }

    // Retorna a resposta da API da NASA com a imagem encontrada
    return NextResponse.json(data);
}