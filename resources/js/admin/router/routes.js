import Dashboard from "../views/Dashboard";
import Index from "../views/customers/Index";
import Customers from "../views/customers/View";

import UsersIndex from "../views/users/Index";
import UsersView from "../views/users/View";
import UserDetails from "../views/users/Details";

import ComponentsIndex from "../views/components/Index";
import ComponentsBase from "../views/components/Base";
import ComponentsPrime from "../views/components/Prime";
import ComponentsTabsPrime from "../views/components/custom/TabsPrime";
import ComponentsTabsElementUI from "../views/components/custom/TabsElementUI";
import CalanderElementUI from "../views/components/custom/CalanderElementUI";
import WizardElementUI from "../views/components/custom/WizardElementUI";

import FormsIndex from "../views/forms/Index";
import ValidationForm from "../views/forms/ValidationForm";

export default  [
    { path: '/', component: Dashboard },
    { path: '/customers', component: Index, children:[
        { path: '', component: Customers },
    ] },
    { path: '/users', component: UsersIndex, children:[
        { path: '', component: UsersView },
        { path: ':id/details', component: UserDetails },
    ] },
    { path: '/components', component: ComponentsIndex, children:[
        { path: '', component: ComponentsBase },
        { path: 'base', component: ComponentsBase },
        { path: 'prime', component: ComponentsPrime },
        { path: 'custom/tabs-prime', component: ComponentsTabsPrime },
        { path: 'custom/tabs-elementui', component: ComponentsTabsElementUI },
        { path: 'custom/calander-elementui', component: CalanderElementUI },
        { path: 'custom/wizard-elementui', component: WizardElementUI },
    ] },
    { path: '/forms', component: FormsIndex, children:[
        { path: '', component: ValidationForm },
        { path: 'validation', component: ValidationForm },
    ] },
]
