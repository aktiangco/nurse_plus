import React , { useState}from 'react';
import Post from './posts/Post';
// import Calendar from './MyCalendar'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Gallery = ({post}) => {
    const [date, setDate] = useState(new Date());
    
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    const cardStyle = {
        color: 'white',
        backgroundColor: 'cornflowerblue',
        border: '1px black solid',
        height: '100%'
    };

    const postMap = 
        <div className="col-sm-6 col-md-4 col-lg-3" >
                <Post />
            </ div>

    return (
        <div>
             <Card className="container" style={cardStyle}>
                <Card.Body style={{ display: 'center' , height: "100%" }}>
                    <Card.Title className="font-weight-bold"><h1>Lesson page</h1></Card.Title> 
                    <Card.Text >
                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Calendar value={date} onChange={handleDateChange} />
                        </div>
                    </Card.Text>
                    <Card.Text >
                       {postMap}
                    </Card.Text>
                </ Card.Body>
            </ Card>
            
            <Link to="/new-posts">New Lessons</Link>
        </div>
    );
  };
  
  export default Gallery;