


import { Component } from 'react';
import CardList from '../cardList/CardList';
import Nav from '../nav/Nav';
import './App.css'


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, date: "12.12.2012", name: "Batman", category: "Fantasy", img: "https://www.soyuz.ru/public/uploads/files/2/7616665/2023013121285293ea4612a3.jpg" },
                { id: 2, date: "12.12.2014", name: "Spiderman", category: "Marvel", img: "https://upload.wikimedia.org/wikipedia/ru/d/dd/Spider_Man_PS4_cover.jpg" },
                { id: 3, date: "12.12.2013", name: "Ironman", category: "Marvel", img: "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg" },
                { id: 4, date: "12.12.2022", name: "Thanos", category: "MC", img: "https://media.licdn.com/dms/image/C4D12AQGCQc5_zY-QrQ/article-cover_image-shrink_600_2000/0/1531155657837?e=2147483647&v=beta&t=op-vgpFIZFhg0LIJYYyS2eqkw3xh_A5R4jTc20SQivM" },
                { id: 5, date: "12.12.2015", name: "Murad", category: "Crypto", img: "https://upload.wikimedia.org/wikipedia/en/7/7b/Josh_Brolin_as_Thanos.jpeg" },
            ]
        }
    }



    deleteItem = (id) => {
        
        this.setState(({data}) => {
            return{
                data: data.filter(item => item.id !== id)
            }
           
        })
        console.log(this.state.data)
    }


    render() {

        // const {data} = this.state

        return (
            <div className="App">
                <Nav />
                <CardList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
            </div>
        )
    }

}

// const App = () => {

//     const data = [
//         {id:1, date: "12.12.2012", name: "Batman", category: "Fantasy", img: "https://www.soyuz.ru/public/uploads/files/2/7616665/2023013121285293ea4612a3.jpg" },
//         {id:2, date: "12.12.2014", name: "Spiderman", category: "Marvel", img: "https://upload.wikimedia.org/wikipedia/ru/d/dd/Spider_Man_PS4_cover.jpg" },
//         {id:3, date: "12.12.2013", name: "Ironman", category: "Marvel", img: "https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg" },
//         {id:4, date: "12.12.2022", name: "Thanos", category: "MC", img: "https://media.licdn.com/dms/image/C4D12AQGCQc5_zY-QrQ/article-cover_image-shrink_600_2000/0/1531155657837?e=2147483647&v=beta&t=op-vgpFIZFhg0LIJYYyS2eqkw3xh_A5R4jTc20SQivM" },
//         {id:5, date: "12.12.2015", name: "Murad", category: "Crypto", img: "https://upload.wikimedia.org/wikipedia/en/7/7b/Josh_Brolin_as_Thanos.jpeg" },
//     ]

//     return (
//         <div className="App">
//             <Nav />
//             <CardList data={data}  />
//         </div>
//     )

// }

export default App;
