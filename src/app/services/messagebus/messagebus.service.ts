import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MessageBusService {

    public event: EventEmitter<object> = new EventEmitter<object>(true);

    private pubSubProjectID = "AIzaSyBYJ1AzCP7z56Zqjacg4tfrsAVjM5ssURE";

    constructor() {
        this.event.emit({ "message": "Event Bus Started"});

     }

     private publishGoogleMessage(topicName, data) {      


      }     

}