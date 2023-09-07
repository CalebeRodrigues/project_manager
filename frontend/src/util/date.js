export const verificarPrazo = (data) => {
  // Verifica se a data está no formato 'dd/MM/yyyy'
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (regex.test(data)) {
    // Extrai os grupos da expressão regular
    const [, dia, mes, ano] = data.match(regex);

    // Formata a data no padrão 'yyyy-MM-dd'
    data = `${ano}-${mes}-${dia}`;
  }

  // Obtém a data atual
  const dataAtual = new Date();

  // Converte a data passada como parâmetro para um objeto Date
  const dataFornecida = new Date(data);

  // Remove as horas, minutos, segundos e milissegundos para fazer a comparação apenas por dia
  dataAtual.setHours(0, 0, 0, 0);
  dataFornecida.setHours(0, 0, 0, 0);

  // Calcula a diferença em milissegundos entre as datas
  const diferencaEmMilissegundos = dataFornecida - dataAtual;

  // Calcula a diferença em dias
  const diferencaEmDias = Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24)) + 1;
  console.log('Diferença:', diferencaEmDias);

  // Compara as datas
  if (diferencaEmDias === 0) {
    // Hoje é o prazo final
    console.log('Hoje é o prazo final');
    return 0;
  } else if (diferencaEmDias <= 2 && diferencaEmDias > 0) {
    // Próximo do vencimento
    console.log('Próximo do vencimento');
    return 0;
  } else if (diferencaEmDias > 2) {
    // Dentro do prazo
    console.log('Dentro do prazo');
    return 1;
  } else {
    // Atrasado
    console.log('Atrasado');
    return 2;
  }
};
