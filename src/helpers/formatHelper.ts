const moneyFormat = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatMoney(value: number){
  return moneyFormat.format(value);
}

export default formatMoney;