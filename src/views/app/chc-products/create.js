import React, {Fragment, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import ReactQuill from "react-quill";
import Select from "react-select";
import CustomSelectInput from "../../../components/common/CustomSelectInput";


import "react-quill/dist/quill.snow.css";
import 'react-quill/dist/quill.bubble.css';
import DropzoneExample from "../../../containers/forms/DropzoneExample";

const initialState = {
    name: "",
    image: "",
    description: "",
    selectedCategory: "",
    categories : [],
    textQuillBubble: "",
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
export default function CreateCHCProduct(props) {
    const [state, setState] = useState(initialState);
    const mountedRef = useRef(true);
    useEffect(()=> {
        return () => {
            mountedRef.current = false
        }
    }, [])

    const createCHCProduct= (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) =>{
        e.persist()
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

   const  handleChangeQuillStandart = (textQuillStandart) => {
        setState( prevState => ({...prevState, textQuillStandart }));
    };

    const handleChange = selectedCategory => {
        setState(prevState => ({...prevState, selectedCategory }));
    };

    const handleChangeImage = (file) =>{
        setState(prevState => ({...prevState, image: file}))
    }

    const handleRemoveImage = (item) =>{
        if(item) {
            setState(prevState => ({...prevState, image: ''}))
        }
    }

    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <Link to='/app/chc-products/view'><Button size='lg' color={'secondary'}> <IntlMessages id="cancel" /></Button></Link>
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
                                    <IntlMessages id="menu.createCHCProduct" />
                                </CardTitle>
                                <Form className="dashboard-quick-post" onSubmit={createCHCProduct}>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.name" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.name} onChange={handleInputChange} name="name" placeholder={'Name *'} required/>
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.productCategory" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                name="form-field-name"
                                                value={state.selectedCategory}
                                                onChange={handleChange}
                                                options={state.categories}
                                            />
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
                                            <IntlMessages id="menu.image" />
                                        </Label>
                                        <Colxx sm="9">
                                            <DropzoneExample
                                                fileTypes={"image/*"}
                                                onChange={handleChangeImage}
                                                removeFile={handleRemoveImage}
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
