import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

export const About: FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Это приложение разработано с использованием TypeScript</p>
            <button className="btn" onClick={() => history.push('/')}>Главная</button>
        </>
    );
};
