import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const redirectToHotmart = (plan: string) => {
    let url = '';
    switch(plan) {
      case 'basic':
        url = 'https://pay.hotmart.com/XXXXXXXX?off=YYYYYYY'; // Substituir pelo link da oferta básica
        break;
      case 'intermediate':
        url = 'https://pay.hotmart.com/XXXXXXXX?off=YYYYYYY'; // Substituir pelo link da oferta intermediária
        break;
      case 'premium':
        url = 'https://pay.hotmart.com/XXXXXXXX?off=YYYYYYY'; // Substituir pelo link da oferta premium
        break;
      default:
        url = 'https://pay.hotmart.com/XXXXXXXX'; // Substituir pelo link padrão
    }
    window.location.href = url;
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>Método Foco Total</h1>
          <p className="subtitle">Transforme sua produtividade em apenas 21 dias</p>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Escolha o plano ideal para você</h2>
          <p className="offer-ends">Esta oferta especial termina em: <span className="countdown">{formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}</span></p>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="card-header">
                <h3>Básico</h3>
                <div className="price">
                  <span className="currency">R$</span>
                  <span className="amount">147</span>
                  <span className="period">/único</span>
                </div>
              </div>
              <div className="card-body">
                <ul className="features">
                  <li>✅ Acesso ao curso completo</li>
                  <li>✅ Garantia de 30 dias</li>
                  <li>✅ Acesso vitalício</li>
                  <li>❌ Comunidade exclusiva</li>
                  <li>❌ Sessões de perguntas e respostas</li>
                  <li>❌ Coaching personalizado</li>
                </ul>
                <button className="btn btn-primary" onClick={() => redirectToHotmart('basic')}>Quero Este Plano</button>
              </div>
            </div>

            <div className="pricing-card popular">
              <div className="popular-badge">MAIS POPULAR</div>
              <div className="card-header">
                <h3>Intermediário</h3>
                <div className="price">
                  <span className="currency">R$</span>
                  <span className="amount">297</span>
                  <span className="period">/único</span>
                </div>
              </div>
              <div className="card-body">
                <ul className="features">
                  <li>✅ Acesso ao curso completo</li>
                  <li>✅ Garantia de 30 dias</li>
                  <li>✅ Acesso vitalício</li>
                  <li>✅ Comunidade exclusiva</li>
                  <li>✅ Sessões semanais de perguntas e respostas</li>
                  <li>✅ Desafios mensais com feedback</li>
                  <li>❌ Coaching personalizado</li>
                </ul>
                <button className="btn btn-popular" onClick={() => redirectToHotmart('intermediate')}>Quero Este Plano</button>
              </div>
            </div>

            <div className="pricing-card">
              <div className="card-header">
                <h3>Premium</h3>
                <div className="price">
                  <span className="currency">R$</span>
                  <span className="amount">497</span>
                  <span className="period">/único</span>
                </div>
              </div>
              <div className="card-body">
                <ul className="features">
                  <li>✅ Acesso ao curso completo</li>
                  <li>✅ Garantia de 30 dias</li>
                  <li>✅ Acesso vitalício</li>
                  <li>✅ Comunidade exclusiva</li>
                  <li>✅ Sessões semanais de perguntas e respostas</li>
                  <li>✅ Desafios mensais com feedback</li>
                  <li>✅ Sessão mensal de coaching personalizado</li>
                  <li>✅ Acesso prioritário a novos conteúdos</li>
                </ul>
                <button className="btn btn-primary" onClick={() => redirectToHotmart('premium')}>Quero Este Plano</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2>O que nossos alunos dizem</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"O Método Foco Total transformou minha produtividade. Em apenas 3 semanas, consegui completar projetos que estavam parados há meses. Recomendo fortemente!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Carlos Silva</h4>
                  <p>Empresário</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Eu sempre lutei contra a procrastinação. Este método me deu ferramentas práticas que realmente funcionam. Minha produtividade aumentou em mais de 200%!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Ana Oliveira</h4>
                  <p>Profissional de Marketing</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"A comunidade exclusiva vale cada centavo. O suporte e as sessões de perguntas e respostas me ajudaram a implementar o método de forma personalizada para minha rotina."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Marcos Santos</h4>
                  <p>Desenvolvedor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="guarantee">
        <div className="container">
          <div className="guarantee-content">
            <h2>Garantia Incondicional de 30 Dias</h2>
            <p>Se em até 30 dias você não estiver completamente satisfeito com os resultados, basta solicitar reembolso e devolveremos 100% do seu investimento. Sem perguntas, sem burocracia.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Transforme sua produtividade hoje mesmo</h2>
          <p>Escolha o plano ideal para você e comece sua jornada para o foco absoluto</p>
          <div className="cta-buttons">
            <button className="btn btn-popular" onClick={() => redirectToHotmart('intermediate')}>Quero o Plano Intermediário</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Método Foco Total. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
