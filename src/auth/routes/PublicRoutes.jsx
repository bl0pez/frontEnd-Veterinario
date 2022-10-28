import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthLayout } from '../layouts'
import { ConfirmEmail, Login, Register } from '../pages'

export const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="confirmEmail/:token" element={<ConfirmEmail />} />
            </Route>
                <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
    )
}

{/*         <Route path="register" element={<Register />} />
<Route path="confirmEmail/:token" element={<ConfirmEmail />} />
<Route path="recovery-password" element={<ResetPassword />} />
<Route path="resetpassword/:token" element={<NewPasword />} /> */}