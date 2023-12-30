import { calculateInvestmentResults, formatter } from '../util/investment.js';

export default function Results({ input }) {

  const resultsData = calculateInvestmentResults(input);

  const initialInvestment = resultsData[0].valueEndOfYear
                          - resultsData[0].interest
                          - resultsData[0].annualInvestment;

  return (
    <table id="results">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map(yearData => {
          // Total money earned via interest:
          const totalInterest = yearData.valueEndOfYear
                              - yearData.annualInvestment
                              * yearData.year
                              - initialInvestment;

          // Total value of invested capital:
          const totalInvestment = yearData.valueEndOfYear - totalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalInvestment)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  );
}
