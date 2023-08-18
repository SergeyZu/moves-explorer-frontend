import { useState } from 'react'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

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

    const isFormValid = evt.target.closest('form').checkValidity()
    setIsFormValid(isFormValid)
  }

  return { form, errors, hadleChange, isFormValid }
}

export default useForm
