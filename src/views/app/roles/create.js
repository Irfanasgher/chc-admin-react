import React, {Fragment, useEffect, useRef, useState} from "react";
import {Link } from "react-router-dom";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";

const initialState = {
    name: "",
    loading: false
}
export default function CreateRoles(props) {
    const [state, setState] = useState(initialState);
    const mountedRef = useRef(true);
    useEffect(()=> {
        return () => {
            mountedRef.current = false
        }
    }, [])

    const createRoles = (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) =>{
        e.persist()
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <Link to='/app/roles/view'><Button size='lg' color={'secondary'}> <IntlMessages id="cancel" /></Button></Link>
                    </div>
                    <Breadcrumb heading="menu.create" match={props.match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>
            <Row>
                <Col xxs="10">
                    <div className='col-sm-12 col-lg-10 col-xs-12 '>
                         <Card>
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="menu.createRoles" />
                                </CardTitle>
                                <Form className="dashboard-quick-post" onSubmit={createRoles}>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="name" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.name} onChange={handleInputChange} name="name" placeholder={'Name *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <Button disabled={state.loading} className={`float-right btn-shadow btn-multiple-state ${state.loading ? "show-spinner" : ""}`} color="primary">
                                         <span className="spinner d-inline-block">
                                            <span className="bounce1" />
                                             <span className="bounce2" />
                                            <span className="bounce3" />
                                         </span>
                                        <span className="label"><IntlMessages id="create" /></span>
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}