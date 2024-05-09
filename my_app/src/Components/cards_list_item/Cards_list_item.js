import { Component } from 'react'
import './Cards_list_item.css'


class Cards_list_item extends Component {

    constructor(props){
        super(props);

    }

    render() {

        const {date, name, img, category, onDelete} = this.props

        return (
            <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 py-2' >
                <div className="card " style={{ width: "18rem" }}>
                    <img style={{ width: "100%", height: "250px", objectFit: "cover" }} src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">{name}</p>
                        <p className="card-text">{category}</p>
                        <p className="card-text">{date}</p>
                        <button onClick={onDelete}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }

}

// const Cards_list_item = ({date, name, img, category}) => {

//     return (

//         <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 py-2' >
//             <div className="card " style={{ width: "18rem" }}>
//                 <img style={{ width: "100%" , height: "250px", objectFit: "cover" }} src={img} className="card-img-top" alt="..." />
//                 <div className="card-body">
//                     <p className="card-text">{name}</p>
//                     <p className="card-text">{category}</p>
//                     <p className="card-text">{date}</p>
//                     <button>Delete</button>
//                 </div>
//             </div>
//         </div>

//     )

// }

export default Cards_list_item