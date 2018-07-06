import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { EimComponent } from "./submenus/eim/eim.component";
import { AddEmployeeComponent } from "./submenus/eim/add-employee/add-employee.component";
// EIM', 'Reports', 'Leave', 'Track Employee'];
const adminRoutes: Routes = [
    {
        path: "admin", children: [
            {
                path: "eim", component: EimComponent, children: [
                    { path: "addemployee", component: AddEmployeeComponent }
                ]
            },
            { path: "reports", component: EimComponent },
            { path: "leave", component: EimComponent },
            { path: "trackemployee", component: EimComponent }
        ]
    },

];
@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})

export class AdminRoutingModule { }