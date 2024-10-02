import { NextResponse } from 'next/server';


let baseDate = new Date('2015-06-19');

export async function GET() {
    let data; 
    let attempts = 0; 

    
    while (true) {
        
        baseDate.setDate(baseDate.getDate() + 1);
        
        
        const formattedDate = baseDate.toISOString().split('T')[0];
        
        
        const url = `https://api.nasa.gov/planetary/apod?api_key=2aRVsGBJmDKRNiUkj6loFRiZazV7n3oippVQ55Si&date=${formattedDate}`;

        
        const res = await fetch(url);
        data = await res.json();
        
        
        if (data.media_type === 'image') {
            break; 
        }

        
    }

    
    return NextResponse.json(data);
}