import { InputContent, InputContainer, WarningP } from "./styled.tsx";
import { Resend } from "resend";

interface Props {
  emailInput: string,
  setEmailInput: React.Dispatch<React.SetStateAction<string>>,
  setUserIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Input = ({ emailInput, setEmailInput, setUserIn }: Props) => {
  const emailDomains = [
    "@gmail.com",
    "@outlook.com",
    "@hotmail.com",
    "@live.com",
    "@yahoo.com",
    "@icloud.com",
    "@protonmail.com",
    "@zoho.com",
    "@mail.com",
    "@gmx.com",
    "@gmx.net",
    "@aol.com",
    "@comcast.net",
    "@verizon.net",
    "@att.net"
  ];
  const resendKey = new Resend(import.meta.env.VITE_RESEND_API_KEY)

  async function sendEmail(email: string) {
    const { data, error } = await resendKey.emails.send({
      from: 'casaverde@resend.dev',
      to: [email],
      subject: 'Olá, seja bem vindo à casa verde',
      html: '<strong>Este é um email fictício do projeto "Casa Verde", confira mais projetos como este em meu <a href="https://portifolio-react-three.vercel.app/">Portifólio</a></strong>',
    });
  
    if (error) {
      return console.error({ error });
    }
  
    console.log({ data });
  };

  function verifyEmail(email: string | undefined) {
    if (email) {
      for (let domain of emailDomains) {
        if (email.endsWith(domain)) {
          if (email.replace(domain, '').length > 0) {
            return true;
          }
        }
      }
    }

    return false;
  }

  return (
    <>
      <InputContainer>
        <InputContent>
          <label htmlFor="newsletter-input">
            <img src="icons/mail.png" alt="ícone de email" />
          </label>
          <input
            type="email"
            id='newsletter-input'
            placeholder='Insira seu email'
            value={emailInput}
            onChange={(evt) => {
              setEmailInput(evt.target.value);
            }}
          />
        </InputContent>
        <button
          className={verifyEmail(emailInput) ? '' : 'disabled'}
          onClick={() => { 
            if (verifyEmail(emailInput)){
              sendEmail(emailInput)
              setUserIn(true)
            }else{
              alert('Insira um email')
            }
           }}
        >
          Assinar newsletter
        </button>
      </InputContainer>
      <WarningP>
        {emailInput != '' && verifyEmail(emailInput) == false ? 'Digite um email válido' : ''}
      </WarningP>
    </>
  );
}

export default Input;