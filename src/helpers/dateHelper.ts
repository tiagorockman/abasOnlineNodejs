function getfirstdayOfWeek(){
  const dt = new Date();
  const today = dt.getDay();
  const diffDays = today === 0 ? 6 : today -1;
  const firstDayDate = new Date(new Date(new Date(dt).setDate(dt.getDate() - diffDays)).setHours(0,0,0));
  const todayDate = new Date(new Date(dt).setHours(23,59,59));
  return [firstDayDate, todayDate, today === 0 ? 7: today ] 
  // se o dia de acesso for domingo divide retorna 7 para pegar referencia da semana toda
}

export { getfirstdayOfWeek };