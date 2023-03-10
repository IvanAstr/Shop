import React from 'react';

import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';

export const NotFound = () => {
    const navigate = useNavigate();

    return (<>

        <div class="container">

            <Figure>
                <Figure.Image
                    width={600}
                    height={600}
                    alt="171x180"
                    src="img/notFound.png"
                    style={{marginBottom:"-20px"}}
                />
                <Figure.Caption>
                    <h3 >Страница не найдена</h3>
                <Button style={{marginTop:"30px"}} variant="primary" onClick={() => navigate(`/`)}>На главную</Button>

                </Figure.Caption>
            </Figure>

        </div>
    </>)
}

