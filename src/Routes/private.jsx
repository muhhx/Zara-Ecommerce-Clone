import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../Context/auth'

export default function UserPrivate() {
    const { currentUser } = useAuth()
    return currentUser ? <Outlet /> : <Navigate to={'/login'} />
}