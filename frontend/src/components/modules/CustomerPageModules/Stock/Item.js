import './Item.css';
import { Link } from 'react-router-dom';


const Item = ({imageUrl,itemCode,unitPrice,description,itemId}) => {

    
    return (
        <div className="item">
            <img src={imageUrl} alt={itemCode}/>


            <div className="item__info">
            <p className="info__code">{itemCode}</p>
                
                <p className="info__description">
                    {description.substring(0,100)}...
                </p>
                <p className="info__price">Rs{unitPrice}</p>

                <button className="btn-grad">
                <Link to={`/item/${itemId}`} style={{textDecoration:'none',color:'white'}}>View
                </Link>
                </button>
            </div>
        </div>
    );
};

export default Item;
