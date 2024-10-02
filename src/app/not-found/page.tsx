// app/not-found/page.js
import React from 'react';

const NotFoundPage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ fontSize: '48px' }}>404 - Página Não Encontrada</h1>
            <p style={{ fontSize: '24px' }}>Desculpe, mas a página que você está procurando não existe.</p>
            <a href="/" style={{ fontSize: '18px', color: 'blue' }}>Voltar para a página inicial</a>
        </div>
    );
};

export default NotFoundPage;