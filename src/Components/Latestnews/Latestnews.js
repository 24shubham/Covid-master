import {React,useState,useEffect} from 'react'
import axios from 'axios'
import styles from './Latestnews.module.css'
import Newscard from './Newscard/Newscard'
const my_api_key=process.env.REACT_APP_NEWS_API_KEY
const url=`https://gnews.io/api/v4/search?q="covid-19"&token=${my_api_key}&lang=en&max=9&country=in`
const Latestnews = () => {
    const [articles, setarticles] = useState([])
    useEffect(() => {
        const response=axios.get(url)
        response.then(response=>{
            setarticles(response.data.articles)
        })
    }, [])
    // console.log(articles);
    return (
        <div className={styles.Latestnews}>
        <h1 className={styles.Heading}>Latest News Regarding COVID</h1>
            <div className={styles.Newscards}>
                {articles.map((el,i)=>(
                <Newscard key={i} image_src={el.image} title={el.title} description={el.description} url={el.url}/>    
                )
                )}
            </div>
        </div>
    )
}
export default Latestnews
