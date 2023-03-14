import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

export const Qr = () => {
    const navigate = useNavigate();

    return (<>
        <Card style={{margin:'30px'}}>
            <Card.Img variant="top" src={`http://qrcoder.ru/code/?%CA%F0%EE%ED+-+%E8%ED%F2%E5%F0%ED%E5%F2+%EC%E0%E3%E0%E7%E8%ED+%EE%E4%E5%E6%E4%FB+%0D%0AQR+-+%EE%EF%EB%E0%F2%FB+%0D%0A%C0%E4%F0%E5%F1%3A+%C1%E0%F0%ED%E0%F3%EB%2C+%F3%EB.%D1%EE%E2%E5%F2%EE%E2+32%2C+RU%0D%0A%CF%EE%F7%F2%E0%3A+Example%40example.com%0D%0A%D2%E5%EB%E5%F4%EE%ED%3A+%2B7+988+888+88+88&4&0`} />

        </Card>
        <Button style={{ margin: '0' }} className="mb-1" variant="success" onClick={() => { navigate(`/basket`)}}>Назад</Button>

    </>
    )
}