
const baseURL = "https://jsonplaceholder.typicode.com"
const getUsers = async () => {
   const users = await fetch(`${baseURL}/users`)
   return users.json()
}
const getAriticle = async () => {
   const articles = await fetch(`${baseURL}/posts`)
   return articles.json()
}

export { getUsers, getAriticle }