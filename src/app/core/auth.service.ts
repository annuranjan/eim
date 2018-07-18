import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    token;
    private userType;

    constructor(private http: HttpClient, private router: Router) { }

    getUserType() {
        return this.userType;
    }
    login(username: string, password: string) {
        this.http.post('http://localhost:1122/login', { username: username, password: password }).subscribe((res) => {
            const response = JSON.parse(JSON.stringify(res));
            this.token = response.token;
            this.userType = response.usertype;
            console.log("Login is successful");
            console.log("User type: " + response.usertype);
            switch (response.usertype) {
                case ('admin'): {
                    console.log("navigating to /adminHome");
                    this.router.navigate(['/adminHome']);
                    break;
                }
                case ('manager'): {
                    console.log("navigating to /managerHome");
                    this.router.navigate(['/managerHome']);
                    break;
                }
                case ('employee'): {
                    console.log("navigating to /employeeHome");
                    this.router.navigate(['/employeeHome']);
                    break;
                }
            }
        });
    }

    addEmployee(employee: any) {
        this.http.post("http://localhost:1122/addemployee", employee).subscribe(result => { console.log(result); })
    }
}