import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MainTemplate from '../../Template'
import './projects.css'
import apiURL from '../../../Services/api'
import Loading from '../../Loading'
import { Construction } from '../../../../public/assets/img'

const Projects = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [repositories, setRepositories] = useState([])
  const selectedRepos = [
    'AraujoStore',
    'Mochila-de-Viagem',
    'Weather-Forecast',
    'App-banco',
    'Numero-secreto',
  ]

  // const selectedReposImg = [
  //   {
  //     id: 0,
  //     name: 'App-banco',
  //     img: '../public/assets/img/banco.png',
  //   },
  //   {
  //     id: 1,
  //     name: 'AraujoStore',
  //     img: '../public/assets/img/store.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'Mochila-de-Viagem',
  //     img: '../public/assets/img/bag.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Numero-secreto',
  //     img: '../public/assets/img/numerosecreto.png',
  //   },
  //   {
  //     id: 4,
  //     name: 'Weather-Forecast',
  //     img: '../public/assets/img/previsao.png',
  //   },
  // ]

  const apiGIT = async () => {
    const allRepos = await apiURL.get('/users/AraujoDeev/repos')
    const reposArray = allRepos.data

    const filteredRepos = reposArray.filter((repository) =>
      selectedRepos.includes(repository.name)
    )
    setRepositories(filteredRepos)
    setIsLoading(false)
  }

  useEffect(() => {
    apiGIT()
  }, [])

  return (
    <MainTemplate>
      <div className="projects">
        <div className="left"></div>
        <div className="center center-projects">
          <h1>Projects</h1>
          {isLoading ? (
            <Loading />
          ) : (
            <div className="container">
              {repositories.map((repository) => (
                <Link
                  target="_blank"
                  to={repository.homepage}
                  key={repository.id}
                  className="card"
                >
                  <h2>{repository.name}</h2>
                </Link>
              ))}
              <div className="construction">
                <img className="img-construction" src={Construction} alt="" />
              </div>
            </div>
          )}
        </div>
        <div className="right"></div>
      </div>
    </MainTemplate>
  )
}

export default Projects
