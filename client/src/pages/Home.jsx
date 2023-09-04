import React, {useState, useEffect} from 'react'
import { Card } from '../components/Card'
import { FormField } from '../components/formField'


export const Home = () => {

  const [posts, setPosts] = useState(null)
  const [search, setSearch] = useState("second")

  const renderCards = ({data, title}) => {
    if(data?.length > 0) {
      return data.map((post) => 
      <Card key={post.id} {...post}/>)
    }

    return <h2>{title}</h2>
  }

  return (
    <div>
      <section className='max-w-7xl mx-auto'>
        <div>

          <h1>
            Les créations de notre communautée
          </h1>
          <p className='mt-2'>
            Parcourir les collections de l'imaginaire auxquelles DALL-E donne vie
          </p>

          <div className='mt-16'>
            <FormField />
          </div>

          <div>
            { search && (
              <h2>Montrer les résultats pour <span>{search}</span></h2>
            )}

            <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {search ? (
                <renderCards data={[]} title="Pas de résultats" />
              ): (
                <renderCards data={[]} title="Aucun post trouvé"/>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
