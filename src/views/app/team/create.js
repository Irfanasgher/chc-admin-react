import React, {Fragment, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Card, CardBody, CardTitle, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import CustomSelectInput from "../../../components/common/CustomSelectInput";
import Select from "react-select";

const initialState = {
    name: "",
    price: "",
    description: "",
    selectedCoach: "",
    coaches: [],
    selectedMom: "",
    moms: [],
    selectedPlayer: "",
    players: [],
    status: "",
    loading: false
}
export default function CreateTeam(props) {
    const [state, setState] = useState(initialState);
    const mountedRef = useRef(true);
    useEffect(()=> {
        return () => {
            mountedRef.current = false
        }
    }, [])

    const createTeam= (e) => {
        e.preventDefault()
    }
    const handleInputChange = (e) =>{
        e.persist()
        setState(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const handleChangeCoach = selectedCoach => {
        this.setState(prevState => ({...prevState, selectedCoach }));
    };

    const handleChangeMom = selectedMom => {
        setState(prevState => ({...prevState, selectedMom }));
    };
    const handleChangePlayer = selectedPlayer => {
        setState(prevState => ({...prevState, selectedPlayer}));
    };
    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <Link to='/app/team/view'><Button size='lg' color={'secondary'}> <IntlMessages id="cancel" /></Button></Link>
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
                                    <IntlMessages id="menu.createteam" />
                                </CardTitle>
                                <Form className="dashboard-quick-post" onSubmit={createTeam}>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="teamName" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Input type="text" value={state.name} onChange={handleInputChange} name="name" placeholder={'Team Name *'} required/>
                                        </Colxx>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.teamCoach" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                name="form-field-name"
                                                value={state.selectedCoach}
                                                onChange={handleChangeCoach}
                                                options={state.coaches}
                                            />
                                        </Colxx>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.teamMom" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                name="form-field-name"
                                                value={state.selectedMom}
                                                onChange={handleChangeMom}
                                                options={state.moms}
                                            />
                                        </Colxx>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Label sm="3">
                                            <IntlMessages id="menu.teamPlayer" />
                                        </Label>
                                        <Colxx sm="9">
                                            <Select
                                                components={{ Input: CustomSelectInput }}
                                                className="react-select"
                                                classNamePrefix="react-select"
                                                isMulti
                                                name="form-field-name"
                                                value={state.selectedPlayer}
                                                onChange={handleChangePlayer}
                                                options={state.players}
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
