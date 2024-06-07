import { useEffect, useState } from 'react';
import https from '../../https/index.ts';
import './styled.tsx';
import { BackgroundSection, OfferDescription, OffersContainer, OffersContent } from './styled.tsx';
import IProduct from '../../interfaces/IProduct.ts';

export default function Offers() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    https.get<IProduct[]>('').then(resposta => setProducts(resposta.data)).catch(err => console.log(err));
  }, []);

  return (
    <BackgroundSection>
      <OffersContainer>
        <h2>
          Conheça nossas<br /><b>ofertas</b>
        </h2>
        <OffersContent>
          {products.map(item => (
            <OfferDescription key={item.ordem} imgUrl={`images/${item.img}.png`}>
              <span></span>
              <div>
                <h3><b>{item.name}</b><br />R$ {item.preco},00</h3>
                <h4>Comprar <i className="fa-solid fa-arrow-right"></i></h4>
              </div>
            </OfferDescription>
          ))}
        </OffersContent>
      </OffersContainer>
    </BackgroundSection>
  );
}