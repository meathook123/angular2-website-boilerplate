import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarComponent } from "ap-angular2-fullcalendar";

@Component({
  selector: 'app-marketing-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.scss']
})
export class CompetitionComponent implements OnInit {
  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
  private calendarOptions:Object = {
    // height: 'parent',
    fixedWeekCount : false,
    editable: false,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2017-09-01',
        description: 'this is a description'
      },
      {
        title: 'Long Event',
        start: '2017-09-07',
        end: '2017-09-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-09-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-09-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2017-09-11',
        end: '2017-09-13'
      },
      {
        title: 'Meeting',
        start: '2017-09-12T10:30:00',
        end: '2017-09-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2017-09-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2017-09-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2017-09-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2017-09-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2017-09-13T07:00:00'
      }
    ],
    eventClick: function(calEvent, jsEvent, view) {
      console.log(calEvent);
      console.log(jsEvent);
      console.log(view);
      let target = jsEvent.currentTarget;
      target.insertAdjacentHTML('beforebegin', '<div class="popover bs-popover-top"><h3></h3>two</div>');
    }
  };
  constructor() { }

  ngOnInit() {
  }

  onCalendarInit($event) {
    console.log($event)
  }
}
