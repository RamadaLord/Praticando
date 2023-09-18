import '../../css/footer.css'
import  img  from '../../img/burg.png'

export default function Footer(){
    return(
        <div className="footer">
            <h1>
                Lancheteria Da Lancha
            </h1>
            <h2>
                <p>Localização</p>
            </h2>
        <img className='img2' src={img} alt={img} />
        </div>
    )
}