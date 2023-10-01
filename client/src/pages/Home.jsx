import React, {useState, useEffect} from 'react'
import { Card } from '../components/Card'
import { FormField } from '../components/formField'


export const renderCards = ({data, title}) => {
  if(data?.length > 0) {
    return data.map((post) => 
    <Card key={post.id} {...post}/>)
  }

  return <h2>{title}</h2>
}

export const Home = () => {

  const [posts, setPosts] = useState(null)
  const [search, setSearch] = useState("second")

  useEffect(()=> {
    const fetchPosts = async() => {
      try {
        const response = await fetch(`http://localhost:8080/api/post`, {
          method:"GET",
          headers: {
            "Content-type": "application/json"
          },
        })

        if (response.ok) {
          const result = await response.json()
          setPosts(result.data.reverse())
        }
      } catch (err) {
        window.alert(err)
      }
    }
    fetchPosts()
  }, [])

  const handleSearchChange = (e)=> {
    setSearch(e.target.value)

    setSearchTimeOut(
      setTimeout(()=> {
        const results = posts.filter((item)=> item.name.toLowerCase().includes(
          search.toLowerCase()) || item.prompt.toLowerCase().includes
          (search.toLowerCase()))
        setSearch(results)
      }, 500)
    )
    
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
        </div>

        <div className='mt-16'>
          <FormField labelName="Rechercher"
          type="text"
          name="text"
          placeholder="Rechercher"
          value={search}
          handleChange={handleSearchChange} />
        </div>

        <div>
          { search && (
            <h2>Montrer les résultats pour <span>{search}</span></h2>
          )}

           <div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
              {search ? (
                <renderCards data={[]} title="Pas de résultats" />
              ): (
                <renderCards data={posts} title="Aucun post trouvé"/>
              )}
            </div>
        </div>
      </section>
    </div>
  )
}
