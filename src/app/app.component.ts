import { Component } from '@angular/core';
import { SERVER } from 'src/shared/Structure/Server';
import { servers } from 'src/shared/Data/serverData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Server:SERVER={id:0, name:"", active:true};
  Servers:SERVER[]=servers;
   
  changeSpecStatus(server):void{
    if (this.Servers[server.id].active==true){
      this.Servers[server.id].active=false;
    }else{
      this.Servers[server.id].active=true;
    }
  }

    changeStatus():void{
      if (this.Server.active==true){
        this.Server.active=false;
      }else{
        this.Server.active=true;
      }
     

  }
  clear():void{
    this.Server.id=this.Server.id+1;
    this.Server.name="";
    this.Server.active=false;
  }
  addServer():void{



    let server:SERVER={id:null,name:null,active:null};
    server.id=this.Server.id;
    server.name=this.Server.name;
    server.active=this.Server.active;
    servers.push(server);
    this.clear();
    

   



















  }

}
