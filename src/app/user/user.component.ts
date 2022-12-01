import { Component } from '@angular/core';
import { User } from './user';

import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    users: any[] = [new User('test id','test email')]; 

    constructor (
        private userService_: UserService
    ){}

    ngOnInit(){
        this.get_users();
    }

    get_users(){
        this.userService_.get_users().subscribe((res: any) => this.users.push(res));
    }

    set_user(user: User){
        this.users.push(user);
    }
}

