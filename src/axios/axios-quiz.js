import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-df3ce.firebaseio.com/'
})