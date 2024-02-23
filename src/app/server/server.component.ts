import { Component } from "@angular/core";

@Component( {
 selector: 'app-server',
 templateUrl: './server.component.html',
 styleUrls : ['./server.component.css', './../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class AppServer {
    title: string = "happy birthday";

    showGreetings(event: Event) {
        console.log(event);
        this.title= "Im inside a function";
        return this.title;
    }

    textboxKeyPress(event: Event) {
        console.log(event);
    }
}