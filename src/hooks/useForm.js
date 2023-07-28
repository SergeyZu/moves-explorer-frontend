import { useState } from 'react'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})

  const hadleChange = (evt) => {
    const input = evt.target

    setForm({
      ...form,
      [input.name]: input.value,
    })

    setErrors({
      ...errors,
      [input.name]: input.validationMessage,
    })
  }

  return { form, errors, hadleChange }
}

export default useForm
