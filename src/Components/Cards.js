import cardsImg from '../Images/Katie.png'
import reviewImg from '../Images/Review.png'


const Card =  (props) => {
    
    console.log(props);

    return(
       
        <div className="card">
          <img src={props.img} className="cards-imgs"></img>
            <div className='card-review'>
              <img src={props.review_img} className="card-star"></img>
                <span >{props.rating}</span>&nbsp;
                <span className='gray'>{props.reviewPoint} .</span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>${props.price}</b> / person</p>
        </div>
    )
}

export default Card;
