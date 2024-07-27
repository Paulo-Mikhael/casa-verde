import { useEffect, useState } from 'react';
import { http } from '../../https';
import './styled.tsx';
import { BackgroundSection, ButtonsContainer, OfferDescription, OffersContainer, OffersContent } from './styled.tsx';
import IProduct from '../../interfaces/IProduct.ts';

export default function Offers() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [showedProducts, setShowedProducts] = useState<IProduct[]>([]);
  const [filter, setFilter] = useState<string | null>(null);
  const [maxNumberFilter, setMaxNumberFilter] = useState<string>('0');
  const [minNumberFilter, setMinNumberFilter] = useState<string>('0');
  
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
    if (filterRequest === 'filtering'){
      setFilter('filtering');
    }else{
      setMaxNumberFilter('');
      setMinNumberFilter('');
    }
    if (filterRequest === null){
      setShowedProducts(products);
      setFilter('');
    }
  }

  useEffect(() => {
    if (Number(minNumberFilter) <= 0 || Number(maxNumberFilter) <= 0 || Number(maxNumberFilter) < Number(minNumberFilter)){
      setShowedProducts(products);
      setFilter(null);
    }
    else{
      setShowedProducts(products.filter(product => 
        product.preco <= Number(maxNumberFilter) && 
        product.preco >= Number(minNumberFilter)
      ));
      setFilter('filtering');
    }
  }, [maxNumberFilter, minNumberFilter]);

  useEffect(() => {
      http.get<IProduct[]>('').then(resposta => setProducts(resposta.data)).catch(err => console.log(err));
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
            Maior R$ <i className="fa-solid fa-arrow-up"></i>
          </button>
          <button 
            onClick={() => {filter === 'descending' ? FilterProducts(null) : FilterProducts('descending')}}
            className={filter === 'descending' ? 'activated' : ''}
          >
            Menor R$ <i className="fa-solid fa-arrow-down"></i>
          </button>
          <button 
            className={filter === 'filtering' ? 'activated' : ''}  
          >
            <i className="fa-solid fa-filter"></i>
            <input 
              value={minNumberFilter}
              onChange={(evt) => {
                setMinNumberFilter(evt.target.value);
              }} 
              placeholder='De' 
              type="number" 
              name="minNumber" 
              id="minNumber" 
            />
            <input 
              value={maxNumberFilter}
              onChange={(evt) => {
                setMaxNumberFilter(evt.target.value);
              }} 
              placeholder='Até' 
              type="number" 
              name="maxNumber" 
              id="maxNumber" 
            />
          </button>
          <div className={`x ${filter === 'filtering' ? '' : 'hidden'}`} onClick={() => FilterProducts(null)}></div>
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