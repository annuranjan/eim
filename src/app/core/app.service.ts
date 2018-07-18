import { Subject, Observable } from "rxjs";

export class AppService {

    private navMenuSub = new Subject<string>();
    private subMenuSub = new Subject<string>();

    public adminRoutes = {
        "EIM Links": {
            "Add Employee": "addEmployee",
            "View Employees": "viewEmployees",
            "Edit Employee": "editEmployee",
        },
        "Add more details": {
            "Domain Name": "domainName",
            "Languages": "languages",
            "Training Details": "trainingDetails",
            "Salary Details": "salaryDetails",
            "Family Details": "familyDetails"
        },
        "View Admin Reports": {
            "Process Reports": "adminProcessReport",
        },
        "View Manager Reports": {
            "Process Reports": "managerProcessReport",
        },
        "View Employee Reports": {
            "Process Reports": "employeeProcessReport"
        }

    }

    public managerRoutes = {
        "Personal Details": "personalDetails"
    }

    public employeeRoutes = {

    }

    sendNavMenuSub(navItem: string) {
        this.navMenuSub.next(navItem);
    }
    getNavMenuSub(): Observable<string> {
        return this.navMenuSub.asObservable();
    }

    sendSubMenuSub(subMenuItem: string) {
        this.subMenuSub.next(subMenuItem);
    }
    getSubMenuSub(): Observable<string> {
        return this.subMenuSub.asObservable();
    }
}