import React, {Fragment, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import CustomSelectInput from "../../../components/common/CustomSelectInput";
import Select from "react-select";

import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';

const initialState = {
    name: "",
    price: "",
    description: "",
    selectedType: "",
    membershipTypes: [],
    selectedStatus: "",
    membershipStatus: [],
    status: "",
    textQuillStandart: "",
    loading: false
}

const quillModules = {
    toolbar: [
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
        ],
        ["link", "image"],
        ["clean"]
    ]
};

const quillFormats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image"
];

export default function CreateMembership(props) {
    const [state, setState] = useState(initialState);
    const mountedRef = useRef(true);
    useEffect(()=> {
        return () => {
            mountedRef.current = false
        }
    }, [])

    const createMembership= (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) =>{
        e.persist()
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleChangeMulti = selectedStatus => {
        setState(prevState => ({...prevState, selectedStatus }));
    };

    const handleChange = selectedType => {
        setState(prevState => ({...prevState, selectedType }));
    };

    const  handleChangeQuillStandart = (textQuillStandart) => {
        setState( prevState => ({...prevState, textQuillStandart }));
    };
    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <Link to='/app/membership/view'><Button size='lg' color={'secondary'}> <IntlMessages id="cancel" /></Button></Link>
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
                                    <IntlMessages id="menu.createMembership" />
                                </CardTitle>
                                <Form className="dashboard-quick-post" onSubmit={createMembership}>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="name" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.name} onChange={handleInputChange} name="name" placeholder={'Name *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.price" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.price} onChange={handleInputChange} name="price" placeholder={'Price *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.description" />
                                        </Label>
                                        <Colxx sm="9">
                                            <ReactQuill
                                                theme="snow"
                                                value={state.textQuillStandart}
                                                onChange={handleChangeQuillStandart}
                                                modules={quillModules}
                                                formats={quillFormats}/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.type" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                name="form-field-name"
                                                value={state.selectedType}
                                                onChange={handleChange}
                                                options={state.membershipTypes}
                                            />
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.status" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                isMulti
                                                name="form-field-name"
                                                value={state.selectedOptions}
                                                onChange={handleChangeMulti}
                                                options={state.membershipStatus}
                                            />
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
