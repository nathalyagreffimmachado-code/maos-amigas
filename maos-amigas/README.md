# Mãos Amigas

Protótipo de aplicativo que ajuda pessoas idosas a encontrar voluntários e vizinhos para ajudá-las no dia a dia. O idoso pode oferecer um valor pelo serviço, e o voluntário informa o mínimo que cobra (0 = sem custo).

## Telas
- `index.html`: **Preciso de ajuda** (escolher categoria, oferecer valor, ver pessoas disponíveis e tocar em "Ajudar")
- `voluntario.html`: **Quero ajudar** (cadastro de voluntário)

## Estrutura
```
maos-amigas/
├── index.html
├── voluntario.html
├── css/estilo.css
└── js/
    ├── dados.js        dados de exemplo e funções compartilhadas
    ├── ajuda.js        lógica da tela "Preciso de ajuda"
    └── voluntario.js   lógica da tela "Quero ajudar"
```

## Como rodar
Abra `index.html` no navegador. Não precisa instalar nada.
Os voluntários cadastrados ficam salvos no navegador (localStorage).

## Próximos passos
- Login e verificação de identidade dos voluntários
- Backend e banco de dados reais
- Pagamento pelo app (Pix) com liberação após confirmação do serviço
- Avaliações depois de cada atendimento
