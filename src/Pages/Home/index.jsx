import { useState, useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'

const Home = () => {

  const [items, setItems] = useState(null)

  try {
    // Se va a la API
    useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
  } catch (error) {
    console.log(error);
  }

  return (
    <Layout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          // Se cambian las llaves por parentesis para que haga un return
          items?.map((item) => (
            <Card 
              key={item.id}
              data={item}
            />
          )) 
        }
      </div>
    </Layout>
  )
}

export default Home
