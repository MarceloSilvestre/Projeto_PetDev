import { Link, useLocation } from "react-router-dom";
import styles from './Breadcrumb.module.css';

export default function Breadcrumb(){
    const location = useLocation();

    let linkAtual = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        linkAtual += `/${crumb}`

        return (
            <div className ={styles.crumb} key={crumb}>
                <Link to={linkAtual}>{crumb}</Link>
            </div>
        )
    })
    return (
        <div className="breadcrumb">
            {crumbs}
        </div>
    )
}