import Auth from './Auth.js';
import { LoginPage } from "../Layouts";
const PublicRoutes  = Auth(false)(LoginPage);
export default PublicRoutes;