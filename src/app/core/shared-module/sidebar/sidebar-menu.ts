export class SidebarMenus {
    //Note: All the Sidebar Menus should be in lower case. Like "eim" and "reports" and not "EIM" and "Reports" 

    //Admin Submenus
    admin = {
        eim: [
            {
                title: "EIM Links",
                subMenu: ["View Employees", "Add Employee", "Edit Employee"]
            },
            {
                title: "Add more details",
                subMenu: ["Domain Name",
                    "Languages", "Family Details", "Education Details", "Experience Details", "Training Details", "Nominee Details", "Salary Details"]
            },
            {
                title: "Update Profile",
                subMenu: ["Sub 1 List Item 3", "Sub 2 List Item 3", "Sub 3 List Item 3"]
            }
        ],
        reports: [
            {
                title: "View Admin Reports",
                subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
            },
            {
                title: "View Manager Reports",
                subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
            },
            {
                title: "View Employee Reports",
                subMenu: ["Process Reports", "Client Brief Report", "Some XYZ Reports"]
            },
            {
                title: "Create Reports",
                subMenu: ["Process Report", "Client Brief Report", "Some XYZ Report"]
            }
        ]
    };

    //Manager Submenus
    manager = {
        eim: [
            {
                title: "Personal Details",
                subMenu: ["Personal Details", "Contact Details", "Emergency Contact", "Immigration Details", "Family Details"]
            },
            {
                title: "Professional Details",
                subMenu: ["Education", "Languages", "Training", "Experience", "Nominee Details", "Upload Your Image"]
            }
        ]
    }


    //Employee Submenus
}