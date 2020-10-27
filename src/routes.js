import Home from './pages/Home'
import ClassDetailsPage from './pages/ClassDetailsPage'
import SubClassDetailsPage from './pages/SubClassDetailsPage'
export default [
    { path: '/', component: Home, exact: true },
    { path: '/classes/:classIndex', component: ClassDetailsPage },
    { path: '/subclasses/:subclassIndex', component: SubClassDetailsPage }
]
