import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { User } from "../interfaces";
import {GiFrayedArrow} from "react-icons/gi";
import {FaArrowCircleLeft, FaArrowCircleRight} from "react-icons/fa";
import SidebarComponent from "./UI/SidebarComponent";
import { useUser } from '../context/UserContext';
import styles from '../public/styles/Layout.module.css';
import { FaUserCircle } from "react-icons/fa";
type Props = {
    children: ReactNode;
    title?: string;
    user?: User | null;
};

const Layout = ({ children, title = 'Patientcare', user }: Props) => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const { logout } = useUser();
    const router = useRouter();

    const handleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };
 const   handleReturnProfile = () => {
 if(user){
    router.push('/dashboard')
 }else{
    router.push('/signin')
 }
    }

    const isActive = (pathname) => {
        return router.pathname === pathname ? 'nav-link active' : 'nav-link';
    };

    const goBack = () => {
        router.back();
    };

    const renderLinks = () => {
        if (!user) {
            return (
                <ul>
                   <li> <Link href="/"><a className={isActive('/')} >Connexion</a></Link></li>
                   
           <li>         <Link href="/contact"><a className={isActive('/contact')} >Contact</a></Link></li>
           <li> <Link href="/about"><a className={isActive('/')} >About-US</a></Link></li>
                </ul>
            );
        }

        return (
            <ul>
              <li>  <Link href={user.role === 'admin' ? "/users" : "/patients"}><a className={isActive(user.role === 'admin' ? "/users" : "/patients")} >{user.role === 'admin' ? "Utilisateurs" : "Patients"}</a></Link></li>
                {user.role === 'admin' && (
                  <li>  <Link href="/create-user"><a className={isActive('/create-user')} >Ajouter un Utilisateur</a></Link></li>
                )}
                {(user.role === 'nurse' || user.role === 'doctor') && (
                  <li>  <Link href="/create-patient"><a className={isActive('/create-patient')} >Ajouter un Patient</a></Link>
                  </li>                )}
             <li>   <div className="dropdown">
                    <div className="dropbtn" onClick={handleProfileDropdown} style={{cursor:"pointer"}}>
                      { /* <img src={`/images/profile/${user.sex}${user.role.toLowerCase()}.jpg`} alt="Profile"
                             style={{width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px', cursor:"pointer"}}/>*/}
                             <FaUserCircle  size={30}  />
                        {user.firstname} {user.lastname}
                    </div>
                    {showProfileDropdown && (
                        <div className="dropdown-content">
                            <Link href="/profile"><a className="nav-link">Voir le profile</a></Link>
                            <a className="nav-link" onClick={() => logout()}>Deconnexion</a>
                        </div>
                    )}
                </div>
                </li>
            </ul>
        );
    };

    return  (
        <div className="layout-container">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <header className={styles.navStyle}>
             <div id="logo" onClick={handleReturnProfile} >
                    <Image src="/images/icon.png" alt="Company Logo" width={60} height={40} style={{
                        position: 'absolute', cursor:"pointer"
                    }}/>
                    </div>
                    
                        {renderLinks()}
                        
                
            </header>
          {/*  <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 20px',
            }}>
                {
                    (router.pathname !== '/signin' && router.pathname !== '/users' && router.pathname !== '/patients') && (
                        <button onClick={goBack} style={{
                            border: 'none',
                            background: 'transparent',
                            color: 'black',
                            cursor: 'pointer',
                            textUnderlineOffset: 'none'
                        }}>
                            <FaArrowCircleLeft/> Retour
                        </button>
                    )
                }
            </div>*/}
            {
                user && (
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto 1fr',
                        minHeight: '100vh',
                    }}>
                        <SidebarComponent user={user}/>
                        <main style={{
                            "padding": "30px",
                        }}>
                            {children}
                        </main>
                    </div>
                )
            }
            {
                !user && (
                    <main style={{
                        "padding": "20px",
                    }}>
                        {children}
                    </main>
                )
            }

<footer className={styles.container}>
<Image src="/images/icon.png" alt="Company Logo" width={60} height={60} style={{paddingRight:"1rem"}}/>
<ul className={styles.menu}>
        <li>
          <a href="">About-us </a>{" "}
        </li>
        <li>|</li>
        <li>
          <a href="">Contact-US </a>
        </li>
        <li>|</li>
        <li>
          <a href="">Add with-US </a>
        </li>
        <li>|</li>
        <li>
          <a href="">Privcy Policy </a>
        </li>
      </ul>
      <div style={{ color: "black" }}>
        <p>&copy; Patientcare.com Inc. All Rights Reserved.</p>
      </div>
    </footer>
            <style jsx global>{`
                .nav-link {
                    padding: 10px;
                    text-decoration: none;
                    color: #000;
                    transition: color 0.3s ease;
                }

                .nav-link:hover {
                    color: #007bff;
                }

                .active {
                    font-weight: bold;
                    color: #007bff;
                }

                .dropdown-content a {
                    color: black;
                    padding: 12px 16px;
                    text-decoration: none;
                    display: block;
                }

                .dropdown-content a:hover {
                    background-color: #f1f1f1;
                }
            `}</style>
        </div>
    );
};

export default Layout;
