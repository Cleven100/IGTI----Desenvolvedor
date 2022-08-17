const MONTHS = [
  '',
  'jan',
  'fev',
  'mar',
  'abr',
  'mai',
  'jun',
  'jul',
  'ago',
  'set',
  'out',
  'nov',
  'dez',
]

const moneyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function helperFormatMonthYear(month, year) {
  return `${MONTHS[month]}/${year}`
}

function helperFormatMoney(value) {
  return moneyFormatter.format(value)
}

function helperFormatPercent(value) {
  const formattedValue = value.toFixed(2).replace('.', ',') + '%'

  return value > 0 ? '+' + formattedValue : formattedValue
}

export { helperFormatMonthYear, helperFormatMoney, helperFormatPercent }
