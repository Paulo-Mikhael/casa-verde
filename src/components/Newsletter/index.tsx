import { 
  BackgroundSection,
  BackgroundSpot,
  BackgroundPlant,
  NewsletterContainer,
  NewsletterContent,
  InputContainer,
  InputContent
} from './styled.tsx';

export default function Newsletter(){
  return (
    <>
      <BackgroundSection>
        <BackgroundSpot
          src="images/background-spot.png" 
          alt="mancha-background" 
        />
        <BackgroundPlant
          src="images/background-plant.png"
          alt="mancha-background" 
        />
        <NewsletterContainer>
          <NewsletterContent>
            <h1>
              Sua casa com as <br/>
              <b>melhores plantas</b>
            </h1>
            <h2>
              Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
            </h2>
            <InputContainer>
              <InputContent>
                <label htmlFor="newsletter-input">
                  <img src="icons/mail.png" alt="ícone de email" />
                </label>
                <input type="email" id='newsletter-input' placeholder='Insira seu email'/>
              </InputContent>
              <button>
                Assinar newsletter
              </button>
            </InputContainer>
          </NewsletterContent>
        </NewsletterContainer>
      </BackgroundSection>
    </>
  );
}