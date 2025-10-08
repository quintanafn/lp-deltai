# Landing Page Delt.AI

Este projeto contém o código-fonte da landing page da Delt.AI, uma CommTech especializada em soluções de comunicação e tecnologia para processos comerciais mais eficientes.

## Estrutura do Projeto

```
lp-deltai/
├── assets/             # Imagens, ícones e arquivos SVG
├── css/                # Arquivos de estilo
├── js/                 # Scripts JavaScript
├── index.html          # Página principal
└── README.md           # Este arquivo
```

## Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS e flexbox)
- JavaScript puro (sem dependências externas)
- SVG para ilustrações e ícones

## Características

- Design moderno e limpo
- Totalmente responsivo para todos os dispositivos
- Otimizado para SEO
- Carregamento rápido e eficiente
- Animações leves para melhor experiência do usuário
- Paleta de cores conforme especificação: #212121, #F7F7F7, #39AFFF

## Como Executar

Basta abrir o arquivo `index.html` em qualquer navegador moderno para visualizar a landing page.

Para desenvolvimento, recomenda-se utilizar um servidor local como:

```bash
# Usando Python 3
python -m http.server

# Ou usando Node.js com http-server
npx http-server
```

## Otimizações

- Imagens SVG para melhor performance e escalabilidade
- Carregamento assíncrono de scripts
- Preload de fontes
- Minificação de CSS e JavaScript (em produção)
- Implementação de meta tags para SEO e compartilhamento em redes sociais

## SEO e Indexação

- Sitemap XML implementado para melhor indexação pelos motores de busca
- Arquivo robots.txt configurado para permitir rastreamento completo
- Meta tags otimizadas para SEO
- Estrutura de dados Schema.org para melhor compreensão pelos buscadores

## Implantação

### Vercel

Este site está configurado para implantação na Vercel, que oferece:

- Deploy automático a partir do GitHub
- Certificado SSL gratuito
- CDN global para carregamento rápido
- Integração contínua

Para implantar na Vercel:

1. Faça login em [vercel.com](https://vercel.com)
2. Importe o repositório do GitHub
3. Configure o domínio personalizado (grupodeltai.com.br)

## Próximos Passos

- Adicionar formulário de contato funcional
- Implementar análise de dados com Google Analytics ou similar
- Configurar o site no Google Search Console
- Criar o blog em WordPress (blog.grupodeltai.com.br)
- Realizar testes de velocidade e otimização adicional se necessário
