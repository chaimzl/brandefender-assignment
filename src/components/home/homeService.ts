import { DcRate } from "../marketChart/marketChart.types"

export default {

  getDaelyRates: (day:Date): Promise<{ rates: DcRate[] }> => {
    let dayParam= day.toISOString().split('T')[0];
    return fetch(`http://localhost:3005/api/getDayRates/${dayParam}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json() as Promise<{ rates: DcRate[] }>
      })
  }


}