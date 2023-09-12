import '../../css/footer.css'
import  img  from '../../img/burg.png'

export default function Footer(){
    return(
        <div className="footer">
            <h1>
                Lancheteria Da Lancha
            </h1>
        <img className='img' src={img} alt={img} />
        </div>
    )
}