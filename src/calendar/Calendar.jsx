import React from 'react'
import styled from 'styled-components'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';

// import 'main.css 파일이 위치한 경로'

const Calendar = () => {
    const reservationURL = "https://whattime.co.kr/leanoncompany/calendar21?date=2022-08-25&time_zone=Asia%2FSeoul"; // 구글 폼 url
 const events = {
    "calendarList":[
        { "title": "해피불금데이", 
            "date": "2022-09-02",
            "id":1
            
        },
        { 
            "title": "추석연휴", 
            "date": "2022-09-09",
            "id":3 
         },
         { 
            "title": "추석", 
            "date": "2022-09-10",
            "id":3 
         },
          { 
            "title": "추석연휴", 
            "date": "2022-09-11",
            "id":3 
         },
           { 
            "title": "추석연휴(대체 휴일)", 
            "date": "2022-09-12",
            "id":3 
        }
    ]
 }
    const apiKey = process.env.REACT_APP_GOOGLE_APIKEY;
    const ID = process.env.REACT_APP_GOOGLE_ID;
    return (
        <div className="App">
        <Wrap>
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, googleCalendarPlugin]}
                    // events={events.calendarList}
                    // eventColor='#ef3fae'
                    googleCalendarApiKey={apiKey}
                    events={{
                        googleCalendarId: {ID},
                    }}
                    eventDisplay={'block'}
                    eventTextColor={'#0d0101'}
                    eventColor={'#F2921D'}
                    height={'660px'}
                    Toolbar
                    
                />
                <Btn onClick={() => {window.open('https://whattime.co.kr/leanoncompany/calendar21?date=2022-08-25&time_zone=Asia%2FSeoul')}}>연동쓰</Btn>
        </Wrap>
      </div>
    );
}

const Wrap = styled.div`
    padding-top: 50px;
    margin: auto;
    width:600px;
    height: 589px; 
    /* border : 1px solid #eee; */
`
const Btn = styled.button`
    margin-top: 20px;
    background-color: #343a40;
    border-radius: 5px;
    border: none;
    color: #fff;
    height:40px;
    /* width:80%; */
`

export default Calendar