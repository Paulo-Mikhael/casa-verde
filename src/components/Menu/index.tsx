import { 
  HeaderBar,
  HeaderContent,
  HeaderImage,
  NavText
} from './styled.tsx';

export default function Menu() {
  return (
    <>
      <HeaderBar>
        <HeaderContent>
          <div>
            <HeaderImage src="icons/logo.png" alt="logo da empresa" />
          </div>
          <nav>
            <NavText>
              Como fazer   /   Ofertas   /   Depoimentos   /   Vídeos   /   Meu Carrinho
            </NavText>
          </nav>
        </HeaderContent>
      </HeaderBar>
    </>
  );
}