import { BackgroundSection, StepsImageContainer, ImageContainer, StepsContainer, StepsInfo } from './styled.tsx';

export default function StepsImage(){
  return (
    <BackgroundSection>
      <StepsImageContainer>
        <ImageContainer />
        <StepsContainer>
          <h2>
            Como conseguir<br /><b>minha planta</b>
          </h2>
          <StepsInfo>
            <h3>
              Escolha suas plantas
            </h3>
          </StepsInfo>
          <StepsInfo>
            <h3>
              Faça o pedido
            </h3>
          </StepsInfo>
          <StepsInfo>
            <h3>
              Espere no conforto do seu lar!
            </h3>
          </StepsInfo>
        </StepsContainer>
      </StepsImageContainer>
    </BackgroundSection>
  );
}