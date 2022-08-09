import React, {Fragment, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {Button, Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import IntlMessages from "../../../helpers/IntlMessages";
import {Colxx, Separator} from "../../../components/common/CustomBootstrap";
import Breadcrumb from "../../../containers/navs/Breadcrumb";
import "../table.css";
import {Table} from "rsuite";
import { confirmAlert } from 'react-confirm-alert';


const { Column, HeaderCell, Cell, Pagination } = Table;


const initialState = {
    categories: [],
    // pagination
    displayLength: 10,
    page: 1,
    loading: false
}
export default function CreateCategory(props) {
    const [state, setState] = useState(initialState);
    const mountedRef = useRef(true);
    useEffect(()=> {
        return () => {
            mountedRef.current = false
        }
    }, [])

    const handleChangePage = (dataKey) => {
        // console.log(dataKey)
        setState(prevState => ({
            ...prevState,
            page: dataKey
        }));
    };
    const handleChangeLength = (dataKey) => {
        setState(prevState => ({
            ...prevState,
            page: 1,
            displayLength: dataKey
        }));
    };
    const getData = () => {
        const {displayLength, page} = state;
        return state.categories.filter((v, i) => {
            const start = displayLength * (page - 1);
            const end = start + displayLength;
            return i >= start && i < end;
        });
    };
    const data = getData();

    const deleteCateory = (item) =>{
        confirmAlert({
            title: 'Confirmation!',
            message: 'Are you sure you want to Delete?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => confirmDelete(item)
                },
                {
                    label: "No"
                }
            ]
        })
    }

    const confirmDelete = (item) =>{

    }

    return (
        <Fragment>
            <Row>
                <Colxx xxs="12">
                    <div className="text-zero top-right-button-container">
                        <Link to='/app/sub-categories/create'><Button size='lg' color={'primary'}> <IntlMessages id="create" /></Button></Link>
                    </div>
                    <Breadcrumb heading="menu.sub-categories" match={props.match} />
                    <Separator className="mb-5" />
                </Colxx>
            </Row>
            <Row>
                <Col xxs="10">
                    <div className='col-sm-12 col-lg-12 col-xs-12 '>
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    <IntlMessages id="categories" />
                                </CardTitle>
                                <Table autoHeight={true}
                                       data={data}
                                       bordered
                                       cellBordered
                                       virtualized={false}
                                       hover={true}
                                       loading={state.loading}
                                >
                                    <Column width={50} fixed align="center">
                                        <HeaderCell>No</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <span>{rowIndex + 1}</span>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200} flexGrow={1} align="center">
                                        <HeaderCell>Name</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>

                                                </div>
                                            }}
                                        </Cell>
                                    </Column>
                                    <Column minWidth={200}  flexGrow={1} align="center">
                                        <HeaderCell>Actions</HeaderCell>
                                        <Cell>
                                            {(rowData, rowIndex) => {
                                                return <div>
                                                    <Button color="secondary" size="xs" className="mb-2">
                                                        <Link to={`/app/sub-categories/edit/${rowData.slug}`} style={{color: 'white'}}><IntlMessages id="edit" /></Link>
                                                    </Button>
                                                    {" "}{" "}
                                                    <Button color="danger" size="xs" className="mb-2" onClick={()=> deleteCateory(rowData)}>
                                                        <IntlMessages id="delete" />
                                                    </Button>
                                                </div>
                                            }}
                                        </Cell>
                                    </Column>

                                </Table>
                                <Pagination
                                    lengthMenu={[
                                        {
                                            value: 10,
                                            label: 10
                                        },
                                        {
                                            value: 20,
                                            label: 20
                                        }
                                    ]}
                                    activePage={state.page}
                                    displayLength={state.displayLength}
                                    total={state.categories.length}
                                    onChangePage={handleChangePage}
                                    onChangeLength={handleChangeLength}
                                />
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Fragment>
    )
}
