import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBBtn,MDBCol,MDBIcon } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export const FooterComponent = () => {
    const navigate = useNavigate();

  return (
    <MDBFooter bgColor='dark' className='d-block w-100 text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Наши социальные сети:</span>
        </div>
        <div>
        
        <MDBIcon fab icon="vk" ></MDBIcon>
        </div>
        
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Крон
              </h6>
              <p>
              Разнообразный и богатый опыт рамки и место обучения кадров в значительной степени обуславливает создание позиций.
              </p>
            </MDBCol>

            

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Разделы</h6>
              <p>
                <a onClick={()=>navigate(`/`)} className='text-reset'>
                  Главная
                </a>
              </p>
              <p>
                <a onClick={()=>navigate(`/about`)} className='text-reset'>
                  О нас
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Контакты</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Барнаул, ул.Советов 32, RU
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                Example@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> +7 988 888 88 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> +7 999 999 99 99
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
           
        </a>
        <a> Крон.ru </a>
      </div>
    </MDBFooter>
  );
}