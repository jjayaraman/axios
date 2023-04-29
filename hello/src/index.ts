import axios from 'axios'

export const getPrice = async (): Promise<any> => {
  const response = await axios.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json'
  )
  console.log(response?.data)
  return response?.data
}

void getPrice()
