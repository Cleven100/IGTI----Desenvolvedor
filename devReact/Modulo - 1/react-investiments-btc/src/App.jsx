import { useEffect, useState } from 'react'
import { apiBackend } from './api/api'
import { apiBackendReal } from './api/api-real'

import { Header, ColoredValue, Main, Title1, Title2 } from './components'

import {
  helperFormatMoney,
  helperFormatMonthYear,
  helperFormatPercent,
} from './helpers'

function Container({ children }) {
  return <div className="container mx-auto p-4">{children}</div>
}

function Investments({ children }) {
  return <ul>{children}</ul>
}

function Investment({ children }) {
  return <li className="border p-4 my-2">{children}</li>
}

function Reports({ children }) {
  return <ul className="mt-8">{children}</ul>
}

function Report({ children }) {
  return (
    <li className="flex flex-row items-center justify-between w-full">
      {children}
    </li>
  )
}

export default function App() {
  // Hardcoded
  //const investments = apiBackend()

  // Real
  const [investments, setInvestments] = useState([])

  useEffect(() => {
    async function getBackend() {
      const backend = await apiBackendReal()
      setInvestments(backend)
    }

    getBackend()
  }, [])

  if (investments.length === 0) {
    return <p>Nada a ser renderizado</p>
  }

  return (
    <>
      <Header>react-investments</Header>

      <Main>
        <Container>
          <Investments>
            {investments.map(investment => {
              const { id, description, reports, totalValue, totalPercent } =
                investment

              return (
                <Investment key={id}>
                  <Title1>{description}</Title1>

                  <Title2>
                    Rendimento total:{' '}
                    <ColoredValue value={totalValue}>
                      {helperFormatMoney(totalValue)} (
                      {helperFormatPercent(totalPercent)})
                    </ColoredValue>
                  </Title2>

                  <Reports>
                    {reports.map(report => {
                      const { id, month, year, value, percent } = report

                      return (
                        <Report key={id}>
                          <span className="font-mono">
                            {helperFormatMonthYear(month, year)}
                          </span>

                          <span className="flex-1 ml-4">
                            <ColoredValue value={percent}>
                              {helperFormatMoney(value)}
                            </ColoredValue>
                          </span>

                          <span>
                            <ColoredValue value={percent}>
                              {helperFormatPercent(percent)}
                            </ColoredValue>
                          </span>
                        </Report>
                      )
                    })}
                  </Reports>
                </Investment>
              )
            })}
          </Investments>
        </Container>
      </Main>
    </>
  )
}
