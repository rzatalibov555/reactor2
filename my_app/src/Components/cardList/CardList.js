import Cards_list_item from '../cards_list_item/Cards_list_item';
import './CardList.css'



const CardList = ({data, onDelete}) => {
   
    
    const elements = data.map( (item, index) => {
        
            const {id, ...itemProps} = item;

            
            
        return (
            <Cards_list_item 
                    key={index} 
                    {...itemProps} 
                    onDelete={() => onDelete(id)}/>
        )
    })

    return (
        <div className="container">
            <div className="row">
                {elements}
                {/* <Cards_list_item name={data[0].name} img={data[0].img} category={data[0].category}/>
                <Cards_list_item name={data[1].name} img={data[1].img} category={data[1].category}/>
                <Cards_list_item name={data[2].name} img={data[2].img} category={data[2].category}/>
                <Cards_list_item name={data[3].name} img={data[3].img} category={data[3].category}/> */}
               
            </div>
        </div>
    )
}

export default CardList;