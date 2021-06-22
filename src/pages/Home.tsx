import illustrationImg from './assets/images/illustration.svg';
import logoImg from './assets/images/logo.svg';
import googleIconImg from './assets/images/google-icon.svg';

export function Home() {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração que simula caixas de perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="Letmeask logo"/>
        </div>
        <button>
          <img src={googleIconImg} alt="Logo da Google" />
          Crie sua sala com a Google
        </button>
        <div>
          <p>ou entre em um sala</p>
        </div>
        <form action="">
          <input 
            type=""
            placeholder="Digite o código da sala"
          />
          <button type="submit"> 
            Entrar na sala
          </button>
        </form>
      </main>
    </div>
  )
}