import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { EimComponent } from "./submenus/eim/eim.component";
import { AddEmployeeComponent } from "./submenus/eim/add-employee/add-employee.component";
import { ViewEmployeesComponent } from "./submenus/eim/view-employees/view-employees.component";
import { AdminProcessReportComponent } from "./submenus/reports/admin-process-report/admin-process-report.component";
import { ManagerProcessReportComponent } from "./submenus/reports/manager-process-report/manager-process-report.component";
import { EmployeeProcessReportComponent } from "./submenus/reports/employee-process-report/employee-process-report.component";
import { ReportsComponent } from "./submenus/reports/reports.component";
import { MiscDetailsComponent } from "./submenus/eim/misc-details/misc-details.component";
import { NotFoundComponent } from "../core/not-found/not-found.component";
// EIM', 'Reports', 'Leave', 'Track Employee'];

const adminRoutes: Routes = [
    {
        path: "adminHome", component: AdminComponent, children: [

            {
                path: "eim", component: EimComponent, children: [
                    { path: "addEmployee", component: AddEmployeeComponent },
                    { path: "viewEmployees", component: ViewEmployeesComponent },
                    { path: "editEmployee", component: AddEmployeeComponent },
                    { path: "domainName", component: MiscDetailsComponent },
                    { path: "languages", component: MiscDetailsComponent },
                    { path: "trainingDetails", component: MiscDetailsComponent },
                    { path: "salaryDetails", component: MiscDetailsComponent },
                    { path: "familyDetails", component: MiscDetailsComponent }
                ]
            },
            {
                path: "reports", component: ReportsComponent, children: [
                    { path: "adminProcessReport", component: AdminProcessReportComponent },
                    { path: "managerProcessReport", component: ManagerProcessReportComponent },
                    { path: "employeeProcessReport", component: EmployeeProcessReportComponent },
                ]
            },
            { path: "leave", component: EimComponent },
            { path: "trackemployee", component: EimComponent }
        ]
    }

];
@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }