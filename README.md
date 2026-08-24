# 70 Anos de Vida e Amor - Apresentacao

## Como usar:

### 1. Estrutura de pastas
As fotos estao organizadas por etapas da vida:
```
fotos/
â”œâ”€â”€ Infancia_1/        â† Fotos da infancia
â”œâ”€â”€ O inicio_2/        â† Formacao do lar
â”œâ”€â”€ Irmaos_3/          â† IrmÃ£os e familia de origem
â”œâ”€â”€ Saudades_4/        â† Momentos especiais
â”œâ”€â”€ Marido_5/          â† Companheiro de vida
â”œâ”€â”€ Filhos/            â† Filhos
â”œâ”€â”€ Netos/             â† Netos
â”œâ”€â”€ Sobrinhos/         â† Sobrinhos
â”œâ”€â”€ Amigos/            â† Amigos
â”œâ”€â”€ Familia/           â† Familia em geral
â””â”€â”€ Sozinha/           â† Momentos pessoais
```

### 2. Adicione suas musicas
Copie suas musicas para a pasta `musica/` e renomeie para:
- `01. Imagine.mp3` (primeira musica)
- `02 Bee Gees - How Deep Is Your Love.mp3` (segunda musica)

### 3. Execute a apresentacao
Basta abrir o arquivo `index.html` em qualquer navegador (Chrome, Firefox, Edge).

### 4. Controles durante a apresentacao

| Tecla | Acao |
|-------|------|
| `â†` `â†’` | Navegar entre slides |
| `Espaco` | Play/Pause |
| `F` | Tela cheia |
| Mouse | Controles aparecem ao mover |

### 5. Para projetar no datashow
1. Abra o navegador em tela cheia (pressione `F` ou botao de tela cheia)
2. Conecte o computador ao datashow
3. Use as setas do teclado ou deixe passar automatico

## Personalizacao

### Alterar ordem das fotos
Edite o array `secoes` no arquivo `script.js`. Cada secao contem:
- `titulo`: Nome da secao exibido na transicao
- `subtitulo`: Descricao complementar
- `pasta`: Caminho da pasta de fotos
- `fotos`: Lista dos arquivos de fotos

### Adicionar nova secao
Adicione um novo objeto no array `secoes`:
```javascript
{
    titulo: "Nova Secao",
    subtitulo: "Descricao",
    pasta: "fotos/NovaPasta",
    fotos: ["foto1.jpg", "foto2.jpg"]
}
```

### Formatos de audio suportados
- MP3 (recomendado)
- WAV
- OGG

## Dicas:
- Use fotos em alta resolucao para melhor qualidade no datashow
- Formatos recomendados: JPG ou PNG
- Para melhores resultados, mantenha as fotos com proporcao similar
- Teste antes da apresentacao!

Feito com amor para a mae!
