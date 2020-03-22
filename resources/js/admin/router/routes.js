import Dashboard from "../views/Dashboard";
import Index from "../views/customers/Index";
import Customers from "../views/customers/View";

import UsersIndex from "../views/users/Index";
import UsersView from "../views/users/View";
import UserDetails from "../views/users/Details";

import SlotIndex from "../views/slot/Index";
import SlotPage from "../views/slot/SlotPage";

import ComponentsIndex from "../views/comps/Index";
import ComponentsBase from "../views/comps/Base";
import ComponentsPrime from "../views/comps/Prime";
import ComponentsTabsPrime from "../views/comps/custom/TabsPrime";
import ComponentsTabsElementUI from "../views/comps/custom/TabsElementUI";
import CalanderElementUI from "../views/comps/custom/CalanderElementUI";
import WizardElementUI from "../views/comps/custom/WizardElementUI";

import FormsIndex from "../views/forms/Index";
import ValidationForm from "../views/forms/ValidationForm";
import DynamicForm from "../views/forms/DynamicForm";


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
        { path: 'dynamic-form', component: DynamicForm },
    ] },
    { path: '/slot', component: SlotIndex, children:[
        { path: '', component: SlotPage },
    ] },
]
