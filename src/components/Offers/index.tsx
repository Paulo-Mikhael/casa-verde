import { useEffect, useState } from 'react';
import https from '../../https/index.ts';
import './styled.tsx';
import { BackgroundSection, ButtonsContainer, OfferDescription, OffersContainer, OffersContent } from './styled.tsx';
import IProduct from '../../interfaces/IProduct.ts';

export default function Offers() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showedProducts, setShowedProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState('');

  function FilterProducts(filterRequest: string | null){
    const filteredProducts: IProduct[] = [...products];

    if (filterRequest === 'ascending'){
      setShowedProducts(filteredProducts.sort((a, b) => b.preco - a.preco));
      setFilter('ascending');
    }
    if (filterRequest === 'descending'){
      setShowedProducts(filteredProducts.sort((a, b) => a.preco - b.preco));
      setFilter('descending');
      }
      if (filterRequest === null){
        setShowedProducts(products);
        setFilter('');
    }

    console.log(filter);
  }

  function AddProduct(){
    https.post<IProduct>('plantas', {
      name: 'Planta Teste',
      preco: 40,
      img: 'images01/planta01-card.png',
      ordem: 51
    })
    .then(resposta => console.log(resposta))
    .catch(err => console.log(err));
  }

  useEffect(() => {
      https.get<IProduct[]>('plantas').then(resposta => setProducts(resposta.data)).catch(err => console.log(err));
    }, []);
    useEffect(() => {
      setShowedProducts(products);
  }, [products]);

  return (
    <BackgroundSection>
      <OffersContainer>
        <h2>
          Conheça<br /><b>nossas plantas</b>
        </h2>
        <ButtonsContainer>
          <button 
            onClick={() => {filter === 'ascending' ? FilterProducts(null) : FilterProducts('ascending')}}
            className={filter === 'ascending' ? 'activated' : ''}
          >
            R$ <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button 
            onClick={() => {filter === 'descending' ? FilterProducts(null) : FilterProducts('descending')}}
            className={filter === 'descending' ? 'activated' : ''}
          >
            R$ <i className="fa-solid fa-arrow-down"></i>
          </button>
          <button onClick={() => AddProduct()}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </ButtonsContainer>
        <OffersContent>
          {showedProducts.map((item, index) => (
            <OfferDescription key={index} $imgUrl={`images/${item.img}.png`}>
              <span></span>
              <div>
                <h3><b>{item.name}</b><br />R$ {item.preco.toFixed(2)}</h3>
                <h4>Comprar <i className="fa-solid fa-arrow-right"></i></h4>
              </div>
            </OfferDescription>
          ))}
        </OffersContent>
      </OffersContainer>
    </BackgroundSection>
  );
}