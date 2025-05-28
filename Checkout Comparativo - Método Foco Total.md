# Checkout Comparativo - Método Foco Total

Esta é uma página de checkout comparativo profissional para o Método Foco Total, que apresenta as três ofertas de forma persuasiva:

1. **Básico (R$147)** - Acesso ao curso
2. **Intermediário (R$297)** - Curso + Comunidade (destacado como MAIS POPULAR)
3. **Premium (R$497)** - Curso + Comunidade + Coaching

## Características

- Design profissional otimizado para conversão
- Comparativo visual das ofertas com ícones e destaques
- Elementos de escassez e urgência (contador regressivo)
- Depoimentos e provas sociais
- Garantia destacada de 30 dias
- Botões que redirecionam diretamente para o checkout da Hotmart

## Como Publicar

### Opção 1: GitHub Pages (Gratuito)

1. Crie uma conta no GitHub (se ainda não tiver): https://github.com/signup
2. Crie um novo repositório chamado "metodofocototal"
3. Faça upload de todos os arquivos desta pasta
4. Vá para "Settings" > "Pages"
5. Em "Source", selecione "main" e clique em "Save"
6. Aguarde alguns minutos e seu site estará disponível em: `https://seuusuario.github.io/metodofocototal`

### Opção 2: Netlify (Gratuito)

1. Crie uma conta no Netlify: https://app.netlify.com/signup
2. Clique em "New site from Git"
3. Conecte sua conta GitHub e selecione o repositório
4. Clique em "Deploy site"
5. Seu site estará disponível em um domínio Netlify (ex: `metodofocototal.netlify.app`)

## Configuração dos Links da Hotmart

Antes de publicar, você precisa configurar os links corretos da Hotmart para cada oferta:

1. Abra o arquivo `src/App.tsx`
2. Localize a função `redirectToHotmart`
3. Substitua os links de exemplo pelos links reais das suas ofertas na Hotmart:
   - `basic`: Link para a oferta Básica (R$147)
   - `intermediate`: Link para a oferta Intermediária (R$297)
   - `premium`: Link para a oferta Premium (R$497)

## Integração com a Hotmart

Após publicar a página, você precisa configurá-la como página externa na Hotmart:

1. Acesse sua conta Hotmart
2. Vá em "Página do produto"
3. No campo "Insira o endereço (URL) da sua página", cole a URL da sua página publicada
4. Clique em "Salvar página externa"

## Personalização

Você pode personalizar facilmente:

- Cores: Edite as variáveis de cor no arquivo `src/App.css`
- Textos: Edite os textos no arquivo `src/App.tsx`
- Depoimentos: Adicione ou remova depoimentos no componente `testimonials`
- Contador: Ajuste o tempo inicial no estado `timeLeft`

## Suporte

Se precisar de ajuda com a implementação, entre em contato.
