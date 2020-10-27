import Home from './pages/Home'
import ClassDetailsPage from './pages/ClassDetailsPage'
import SubClassDetailsPage from './pages/SubClassDetailsPage'
export default [
    { path: '/', component: Home, exact: true, name: 'home' },
    { path: '/classes/:classIndex', component: ClassDetailsPage, name: 'class-details' },
    { path: '/subclasses/:subclassIndex', component: SubClassDetailsPage, name: 'sub-class-details' }
]
