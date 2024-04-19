import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({
        title: '',
        description: '',
        start: '',
        end: ''
    });

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/events');
            setEvents(response.data);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewEvent({ ...newEvent, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/events', newEvent);
            setNewEvent({
                title: '',
                description: '',
                start: '',
                end: ''
            });
            fetchEvents(); // Refresh the events list after adding new event
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <div>
            <h4>Calendar Events</h4>
            <form onSubmit={handleSubmit} className='add-member'>
                <input type="text" name="title" placeholder="Title" value={newEvent.title} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={newEvent.description} onChange={handleChange} />
                <input type="datetime-local" name="start" placeholder="Start" value={newEvent.start} onChange={handleChange} />
                <input type="datetime-local" name="end" placeholder="End" value={newEvent.end} onChange={handleChange} />
                <button type="submit">Add Event</button>
            </form>
            <ul>
                {Array.isArray(events) && events.map((event) => (
                <div className="Card">
                    <li key={event._id}>
                        <strong>{event.title}</strong> 
                         {event.description} 
                         {event.start} to {event.end}
                    </li>
                </div>
                )
                )}
            </ul>
        </div>
    );
};

export default Calendar;
