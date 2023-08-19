import { useState } from 'react'
import isEmail from 'validator/lib/isEmail'

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [isFormValid, setIsFormValid] = useState(false)

  const hadleChange = (evt) => {
    const input = evt.target

    if (input.name === 'name') {
      const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]*$/
      !nameRegex.test(input.value)
        ? evt.target.setCustomValidity(
            'Имя может содержать только кириллицу, латиницу, пробел или дефис.',
          )
        : evt.target.setCustomValidity('')
    } else if (input.name === 'email' && !isEmail(input.value)) {
      evt.target.setCustomValidity('Введите корректный email')
    } else {
      evt.target.setCustomValidity('')
    }

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
