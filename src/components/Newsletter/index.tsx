import { useState } from 'react';
import { 
  BackgroundSection,
  BackgroundSpot,
  BackgroundPlant,
  NewsletterContainer,
  NewsletterContent,
  UserInText,
} from './styled.tsx';
import Input from './Input/index.tsx';

export default function Newsletter(){
  const [userIn, setUserIn] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');

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
            {userIn === false ? <Input setUserIn={setUserIn} setEmailInput={setEmailInput} emailInput={emailInput}/> : <UserInText>
                Obrigado pela assinatura! Você receberá as novidades no email: <b>{emailInput}</b>
              </UserInText>}
          </NewsletterContent>
        </NewsletterContainer>
      </BackgroundSection>
    </>
  );
}