// Pega os elementos do HTML
const button = document.getElementById('button');   // botão Calcular
const botaoLimpar = document.getElementById('limpar'); // botão Limpar
const nome = document.getElementById('nome');       // campo nome
const peso = document.getElementById('peso');       // campo peso
const altura = document.getElementById('altura');   // campo altura
const mensagem = document.getElementById('mensagem'); // caixa de resultado

// Função que retorna o texto conforme o IMC calculado
const getText = (imc) => {
  if (imc > 40) return 'obesidade grau III';
  if (imc > 35) return 'Obesidade grau II';
  if (imc > 30) return 'Obesidade grau I';
  if (imc > 25) return 'Levemente acima do peso';
  if (imc > 18.5) return 'Peso ideal';
  return 'Abaixo do peso';
};

// Função principal que faz o cálculo do IMC
const imcCalc = () => {
  // Verifica se os campos estão preenchidos
  if (!peso.value || !altura.value || !nome.value) {
    mensagem.value = 'Preencha todos os campos antes de calcular!';
    return;
  }

  // Calcula o IMC = peso / (altura * altura)
  const valorImc = (+peso.value / (+altura.value * +altura.value)).toFixed(1);

  // Mostra o resultado dentro da caixa de mensagem
  mensagem.value = `${nome.value}, seu IMC é ${valorImc} — ${getText(valorImc)}.`;
};

// Função para limpar todos os campos
const limparCampos = () => {
  nome.value = '';
  altura.value = '';
  peso.value = '';
  mensagem.value = '';
};

// Adiciona as funções aos botões
button.addEventListener('click', imcCalc);
botaoLimpar.addEventListener('click', limparCampos);
