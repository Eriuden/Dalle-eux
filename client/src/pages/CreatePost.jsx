import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { preview} from "../assets"
import {getRandomPrompt} from "../utils"
import { FormField } from '../components/formField'

export const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({name:"", prompt:"", photo:""})

  const generateImage = async() => {
    if(form.prompt) {
      try {
        const response = await fetch(`http:localhost:8000/api/dalle`, {
          method:"POST",
          headers: {
            "Content-type": "application.json"
          },
          body: JSON.stringify({prompt: form.prompt}),
        })

        const data = await response.json()

        setForm[{...form, photo: `data:image/jpeg;base64, ${data.photo}`}]
      } catch (err) {
        alert(err)
      }
    } else {
      alert("Veuillez entrer une prompt")
    }
  }

  const handleSubmit = async(e) => {
    e.preventDefaut()

    if(form.prompt && form.photo) {
      try {
        const response = await fetch(`http:localhost:8080/api/post`, {
          method:"POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form)
        })

        await response.json()
        navigate("/")
      } catch (err) {
        console.log(err)
      }
    } else {
      alert("Veuillez entrer une prompt")
    }
  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleRandomPrompt =() => {
    const RandomPrompt= getRandomPrompt(form.prompt)
    setForm({...form, prompt: RandomPrompt})
  }

  return (
    <section>
      <div>
          <h1>
            Créer
          </h1>
          <p className='mt-2'>
            Grâce à DALL-E, partagez des chefs d'oeuvres
          </p>
      </div>

      <form className='mt-16 maw-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <FormField
            LabelName="Votre nom"
            type="text"
            name="name"
            placeholder="mr toulmhond"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            LabelName="Prompt"
            type="text"
            name="prompt"
            placeholder="un magicien tout de noir vétu"
            value={form.prompt}
            handleChange={handleChange}
            isRandomPrompt
            handleRandomPrompt={handleRandomPrompt}
          />

          <div className='relative bg-gray-500'>
            {form.photo ? (
              <img 
                src={form.photo}
                alt={form.prompt}
              />
            ): (
              <img
                src={preview}
                alt="preview"
              />
            )}

          </div>
        </div>

        <div>
          <button
            type='button'
            onClick={generateImage}
          >
            Générer
          </button>
        </div>

        <div>
          <p>Une fois cette image crée, vous pouvez la partager 
          avec la communautée</p>
          <button
            type='submit'
          >
            Partager
          </button>
        </div>
      </form>
    </section>
    
  )
}
