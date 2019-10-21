import { MainLayout } from "../Layouts";
import Auth from './Auth.js';
const PrivateRoutes  = Auth(true)(MainLayout);
export default PrivateRoutes;