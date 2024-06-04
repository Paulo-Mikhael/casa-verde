import { InputContent, InputContainer, WarningP } from "./styled.tsx";

interface Props {
  emailInput: string,
  setEmailInput : React.Dispatch<React.SetStateAction<string>>,
  setUserIn: React.Dispatch<React.SetStateAction<boolean>>
}

const Input = ({ emailInput ,setEmailInput, setUserIn }: Props) => {
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
  function verifyEmail(email: string | undefined) {
    if (email) {
      for (let domain of emailDomains){
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
          onClick={() => {verifyEmail(emailInput) ? setUserIn(true) : alert('Insira um email')}}
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