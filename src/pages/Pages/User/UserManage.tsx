import React from 'react';
import { Container } from "reactstrap";

//Import Breadcrumb
import BreadCrumb from "../../../Components/Common/BreadCrumb";

    const UserManage = () => {
        document.title = "New Page | Velzon - React Admin & Dashboard Template";   //for meta title
        return (
            <>
                <div className="page-content">
                    <Container fluid={true}>
                        <BreadCrumb title="New Page" pageTitle ="New Page" />
                        
                           <h1>  Hi Welcome to the User mangment</h1>
                    </Container>
                </div>
            </>
        );
    }

export default UserManage;