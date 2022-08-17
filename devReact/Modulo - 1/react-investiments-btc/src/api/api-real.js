import axiosModule from 'axios'

const axios = axiosModule.create({ baseURL: 'http://localhost:3001' })

async function apiBackendReal() {
  //const { investments, reports } = hardcodeData
  const [{ data: investments }, { data: reports }] = await Promise.all([
    axios.get('/investments'),
    axios.get('/reports'),
  ])

  let backend = investments
    .sort((a, b) => a.description.localeCompare(b.description))
    .map(investment => {
      return {
        ...investment,
        reports: reports
          .filter(reportItem => {
            return reportItem.investmentId === investment.id
          })
          .sort((a, b) => a.month - b.month)
          .map((report, index, reports) => {
            if (index === 0) {
              return { ...report, percent: 0 }
            }

            const previousValue = reports[index - 1].value
            const currentValue = report.value
            const percent = (currentValue / previousValue - 1) * 100

            return { ...report, percent }
          }),
      }
    })

  backend = backend.map(item => {
    const { reports } = item
    const initialValue = reports[0].value
    const finalValue = reports[reports.length - 1].value
    const totalPercent = (finalValue / initialValue - 1) * 100
    const totalValue = finalValue - initialValue

    return { ...item, totalPercent, totalValue }
  })

  return backend
}

export { apiBackendReal }
