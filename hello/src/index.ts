import axios from 'axios'
import Redis from 'ioredis'

const redis = new Redis()

export const getPrice = async (): Promise<any> => {
  const response = await axios.get(
    'https://api.coindesk.com/v1/bpi/currentprice.json'
  )
  console.log(response?.data)
  const key = 'currency:cache'
  await redis.set(key, JSON.stringify(response.data)) // cache the response
  const data = await redis.get(key)
  console.log('Data from Cache::: ', data)

  return response?.data
}

void getPrice()
