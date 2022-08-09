import React, {Fragment, useEffect, useRef, useState} from "react";
import {Link } from "react-router-dom";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import CustomSelectInput from "../../../components/common/CustomSelectInput";
import Select from "react-select";

const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    selectedUser: "",
    phone: "",
    house_no: "",
    street_no: "",
    city: "",
    state: "",
    users: [],
    loading: false
}
export default function CreateUser(props) {
    const [state, setState] = useState(initialState);
    const mountedRef = useRef(true);
    useEffect(()=> {
        return () => {
            mountedRef.current = false
        }
    }, [])

    const createSubCategory= (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) =>{
        e.persist()
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
   const handleChange = selectedUser => {
        setState(prevState => ({...prevState, selectedUser }));
    };
    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <Link to='/app/users/view'><Button size='lg' color={'secondary'}> <IntlMessages id="cancel" /></Button></Link>
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
                                    <IntlMessages id="menu.createUser" />
                                </CardTitle>
                                <Form className="dashboard-quick-post" onSubmit={createSubCategory}>


                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.role" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                name="form-field-name"
                                                value={state.selectedUser}
                                                onChange={handleChange}
                                                options={state.users}
                                            />
                                            {/*<Input type="text" value={state.category} onChange={handleInputChange} name="category" placeholder={'Category *'} required/>*/}
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.firstName" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.first_name} onChange={handleInputChange} name="first_name" placeholder={'First Name *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.lastName" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.last_name} onChange={handleInputChange} name="last_name" placeholder={'Last Name *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.email" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.email} onChange={handleInputChange} name="email" placeholder={'Email *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.phone" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.phone} onChange={handleInputChange} name="phone" placeholder={'Phone *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.house" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.house_no} onChange={handleInputChange} name="house_no" placeholder={'House No *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.street" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.street_no} onChange={handleInputChange} name="street_no" placeholder={'Street No *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.city" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.city} onChange={handleInputChange} name="city" placeholder={'City *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.state" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.state} onChange={handleInputChange} name="state" placeholder={'State *'} required/>
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
