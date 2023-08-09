const registerUser = ({ name, email, password }) => {
  setIsLoading(true)
  auth
    .register(name, email, password)
    .then((res) => {
      console.log(res)
      loginUser({ email, password })
      setIsLoggedIn(true)
      // navigate('/movies', { replace: true })
    })
    .catch((err) => {
      console.log(err)
      setRegistrationError('Ошибка регистрации')
    })
    .finally(() => {
      setIsLoading(false)
    })
}

const handleCreateCard = 





let fruits = ["Яблоко", "Апельсин"];

fruits.push("Груша");

alert( fruits ); // Яблоко, Апельсин, Груша


