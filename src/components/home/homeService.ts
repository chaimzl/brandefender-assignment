import { DcRate } from "../marketChart/marketChart.types"

export default {
   
        getDaelyRates:()=>{
            return fetch('/assets/demo.json')
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
        }
    

}