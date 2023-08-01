import React, { useState } from 'react';
import { Modal, Form } from "react-bootstrap";
import Button from '../Reusables/Button';
import { SideNavBar } from '../Reusables/SideNavBar';
import '../CSS/Dashboard.css';
import Header from './Header';
import { AddTask } from '../Actions/TaskActions';
import { SnackBar } from '../Reusables/Snackbar';

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [name, setTaskName] = useState("");
  const [enabletaskDetailModal, setEnableTaskDetailModal] = useState(false);
  const [description, setDescription] = useState("");
  const [status_id, setStatus_id] = useState(1);
  const [project_id, setProject_id] = useState(1);
  const [employee_id, setEmployee_id] = useState(1);
  const [assigned_to, setAssigned_to] = useState(1);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [severity, setSeverity] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async () => {
    // Clear the input fields
    const obj = {
      name,
      description,
      status_id,
      project_id,
      employee_id,
      assigned_to
    };
    const addTaskAction = await AddTask(obj);
    console.log(addTaskAction, 'addTaskAction')
    setErrorMessage('Task Created Successfully!');
    setSeverity('success');
    setSnackBarOpen(true);
    handleClose();
  }

  const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  }

  const openTaskDetailModal = () => setEnableTaskDetailModal(true);
  const handleTaskDetailClose = () => setEnableTaskDetailModal(false);
  const handleTaskDetailSubmit = () => {};

  return (
    <div class="g-sidenav-show  bg-gray-200">
      {SideNavBar()}
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        {/* <!-- End Navbar --> */}
        {/* Add Task Modal Start */}

        {/* <Modal
          isOpen={isOpen}
          onRequestClose={handleCancel}
          contentLabel="Task Detail"
          style={modalStyles}
        >
          <h2>Task Detail</h2>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={task.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={task.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Comment:</label>
            <textarea name="comment" value={task.comment} onChange={handleChange} />
          </div>
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </Modal> */}

<Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={enabletaskDetailModal} onHide={handleTaskDetailClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Task Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Task Name</Form.Label>
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Task Description</Form.Label>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" handleChange={handleTaskDetailClose} buttonName={'Close'} />
            <Button variant="primary" handleChange={handleTaskDetailSubmit} buttonName={'Save Changes'} />
          </Modal.Footer>
        </Modal>


        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Add Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Task Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Task Name"
                  value={name}
                  onChange={(e) => setTaskName(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Task Description</Form.Label>
                <Form.Control placeholder="Enter Task Description" value={description} as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" handleChange={handleClose} buttonName={'Close'} />
            <Button variant="primary" handleChange={handleSubmit} buttonName={'Save Changes'} />
          </Modal.Footer>
        </Modal>
        {/* Add Task Modal End */}
        <div class="container-fluid py-4">
          <div class="row mt-4">
            <div class="col-lg-6 col-md-4 mb-4">
              <div class="card z-index-2 ">

                <div class="card-body">
                  <h6 class="mb-0 ">My Tasks</h6>
                  <hr class="dark horizontal" />
                  <div class="d-flex ">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Upcoming</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Overdue</button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Completed</button>
                      </li>
                    </ul>

                  </div>
                  <div class="row mt-4">
                    <div class="card-body">
                      <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Upcoming section</div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Overdue section</div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Completed section</div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-4 mb-4">
              <div class="card z-index-2  ">

                <div class="card-body">
                  <h6 class="mb-0 "> Assigned Projects </h6>

                  <hr class="dark horizontal" />
                  <div class="d-flex ">
                    <div class="table-responsive">
                      <table class="table align-items-center mb-0">

                        <tbody>
                          <tr>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div onClick={handleShow} class="d-flex flex-column justify-content-center">
                                  <span class="material-icons">
                                    add
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p>Add task</p>
                            </td>

                          </tr>

                          <tr>
                            <td>
                              <div class="d-flex px-2 py-1">

                                <div onClick={openTaskDetailModal} class="d-flex flex-column justify-content-center">
                                  <span class="material-icons">
                                    format_list_bulleted
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p>Demo Project</p>
                            </td>

                          </tr>

                        </tbody>
                      </table>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="row mb-4">
            <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="row">
                    <div class="col-lg-6 col-7">
                      <h6>Company's Projects</h6>

                    </div>
                    <div class="col-lg-6 col-5 my-auto text-end">
                      <div class="dropdown float-lg-end pe-4">
                        <a class="cursor-pointer" id="dropdownTable" data-bs-toggle="dropdown" aria-expanded="false">
                          <i class="fa fa-ellipsis-v text-secondary"></i>
                        </a>
                        <ul class="dropdown-menu px-2 py-3 ms-sm-n4 ms-n5" aria-labelledby="dropdownTable">
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Action</a></li>
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Another action</a></li>
                          <li><a class="dropdown-item border-radius-md" href="javascript:;">Something else here</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body px-0 pb-2">
                  <div class="table-responsive">
                    <table class="table align-items-center mb-0">
                      <thead>
                        <tr>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Companies</th>
                          <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Members</th>
                          <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Budget</th>
                          {/* <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Completion</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              {/* <div>
                                <img src="./assets/img/small-logos/logo-xd.svg" class="avatar avatar-sm me-3" alt="xd" />
                              </div> */}
                              <div class="d-flex flex-column justify-content-center">
                                <Button type="button" class="btn btn-primary" buttonName={'MATERIAL XD VERSION'} >
                                  <h6 class="mb-0 text-sm">Material XD Version</h6>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                <img src="./assets/img/team-1.jpg" alt="team1" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <img src="./assets/img/team-2.jpg" alt="team2" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                <img src="./assets/img/team-3.jpg" alt="team3" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <img src="./assets/img/team-4.jpg" alt="team4" />
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> $14,000 </span>
                          </td>
                          {/* <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">60%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-info w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              {/* <div>
                                <img src="./assets/img/small-logos/logo-atlassian.svg" class="avatar avatar-sm me-3" alt="atlassian" />
                              </div> */}
                              <div class="d-flex flex-column justify-content-center">
                                <Button type="button" class="btn btn-primary" buttonName={'ADD PROGRESS TRACK'}>
                                  <h6 class="mb-0 text-sm">Add Progress Track</h6>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <img src="./assets/img/team-2.jpg" alt="team5" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <img src="./assets/img/team-4.jpg" alt="team6" />
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> $3,000 </span>
                          </td>
                          {/* <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">10%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-info w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              {/* <div>
                                <img src="./assets/img/small-logos/logo-slack.svg" class="avatar avatar-sm me-3" alt="team7" />
                              </div> */}
                              <div class="d-flex flex-column justify-content-center">
                                <Button type="button" class="btn btn-primary" buttonName={'FIX PLATFORM ERRORS'}>
                                  <h6 class="mb-0 text-sm">Fix Platform Errors</h6>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <img src="./assets/img/team-3.jpg" alt="team8" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <img src="./assets/img/team-1.jpg" alt="team9" />
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> Not set </span>
                          </td>
                          {/* <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">100%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              {/* <div>
                                <img src="./assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm me-3" alt="spotify" />
                              </div> */}
                              <div class="d-flex flex-column justify-content-center">
                                <Button type="button" class="btn btn-primary" buttonName={'LAUNCH OUR MOBILE APP'}>
                                  <h6 class="mb-0 text-sm">Launch our Mobile App</h6>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                <img src="./assets/img/team-4.jpg" alt="user1" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                                <img src="./assets/img/team-3.jpg" alt="user2" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                                <img src="./assets/img/team-4.jpg" alt="user3" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <img src="./assets/img/team-1.jpg" alt="user4" />
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> $20,500 </span>
                          </td>
                          {/* <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">100%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-success w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>
                          </td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              {/* <div>
                                <img src="./assets/img/small-logos/logo-jira.svg" class="avatar avatar-sm me-3" alt="jira" />
                              </div> */}
                              <div class="d-flex flex-column justify-content-center">
                                <Button type="button" class="btn btn-primary" buttonName={'ADD THE NEW PRICING PAGE'}>
                                  <h6 class="mb-0 text-sm">ADD THE NEW PRICING PAGE</h6>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                <img src="./assets/img/team-4.jpg" alt="user5" />
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> $500 </span>
                          </td>
                          {/* <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">25%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-info w-25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="25"></div>
                              </div>
                            </div>
                          </td> */}
                        </tr>
                        <tr>
                          <td>
                            <div class="d-flex px-2 py-1">
                              {/* <div>
                                <img src="./assets/img/small-logos/logo-invision.svg" class="avatar avatar-sm me-3" alt="invision" />
                              </div> */}
                              <div class="d-flex flex-column justify-content-center">
                                <Button type="button" class="btn btn-primary" buttonName={'REDESIGN NEW ONLINE SHOP'}>
                                  <h6 class="mb-0 text-sm">REDESIGN NEW ONLINE SHOP</h6>
                                </Button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div class="avatar-group mt-2">
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                                <img src="./assets/img/team-1.jpg" alt="user6" />
                              </a>
                              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                                <img src="./assets/img/team-4.jpg" alt="user7" />
                              </a>
                            </div>
                          </td>
                          <td class="align-middle text-center text-sm">
                            <span class="text-xs font-weight-bold"> $2,000 </span>
                          </td>
                          {/* <td class="align-middle">
                            <div class="progress-wrapper w-75 mx-auto">
                              <div class="progress-info">
                                <div class="progress-percentage">
                                  <span class="text-xs font-weight-bold">40%</span>
                                </div>
                              </div>
                              <div class="progress">
                                <div class="progress-bar bg-gradient-info w-40" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="40"></div>
                              </div>
                            </div>
                          </td> */}
                        </tr>
                        <tr>
                          <td colspan="3" style={{ textAlign: 'center' }} >
                            <a href="./CompanyProjects">See More...</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <footer class="footer py-4  ">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    © 2023,
                    made with  by
                    <a href="/" class="font-weight-bold" target="_blank"> Group 2 </a>
                    for Capstone.
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
      <div class="fixed-plugin">
        <a class="fixed-plugin-button text-dark position-fixed px-3 py-2">
          <i class="material-icons py-2">settings</i>
        </a>
        <div class="card shadow-lg">
          <div class="card-header pb-0 pt-3">
            <div class="float-start">
              <h5 class="mt-3 mb-0">Material UI Configurator</h5>
              <p>See our dashboard options.</p>
            </div>
            <div class="float-end mt-4">
              <button class="btn btn-link text-dark p-0 fixed-plugin-close-button">
                <i class="material-icons">clear</i>
              </button>
            </div>
            {/* <!-- End Toggle Button --> */}
          </div>
          <hr class="horizontal dark my-1" />
          <div class="card-body pt-sm-3 pt-0">
            {/* <!-- Sidebar Backgrounds --> */}
            <div>
              <h6 class="mb-0">Sidebar Colors</h6>
            </div>
            <a href="javascript:void(0)" class="switch-trigger background-color">
              <div class="badge-colors my-2 text-start">
                <span class="badge filter bg-gradient-primary active" data-color="primary" onclick="sidebarColor(this)"></span>
                <span class="badge filter bg-gradient-dark" data-color="dark" onclick="sidebarColor(this)"></span>
                <span class="badge filter bg-gradient-info" data-color="info" onclick="sidebarColor(this)"></span>
                <span class="badge filter bg-gradient-success" data-color="success" onclick="sidebarColor(this)"></span>
                <span class="badge filter bg-gradient-warning" data-color="warning" onclick="sidebarColor(this)"></span>
                <span class="badge filter bg-gradient-danger" data-color="danger" onclick="sidebarColor(this)"></span>
              </div>
            </a>
            {/* <!-- Sidenav Type --> */}
            <div class="mt-3">
              <h6 class="mb-0">Sidenav Type</h6>
              <p class="text-sm">Choose between 2 different sidenav types.</p>
            </div>
            <div class="d-flex">
              <button class="btn bg-gradient-dark px-3 mb-2 active" data-class="bg-gradient-dark" onclick="sidebarType(this)">Dark</button>
              <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-transparent" onclick="sidebarType(this)">Transparent</button>
              <button class="btn bg-gradient-dark px-3 mb-2 ms-2" data-class="bg-white" onclick="sidebarType(this)">White</button>
            </div>
            <p class="text-sm d-xl-none d-block mt-2">You can change the sidenav type just on desktop view.</p>
            {/* <!-- Navbar Fixed --> */}
            <div class="mt-3 d-flex">
              <h6 class="mb-0">Navbar Fixed</h6>
              <div class="form-check form-switch ps-0 ms-auto my-auto">
                <input class="form-check-input mt-1 ms-auto" type="checkbox" id="navbarFixed" onclick="navbarFixed(this)" />
              </div>
            </div>
            <hr class="horizontal dark my-3" />
            <div class="mt-2 d-flex">
              <h6 class="mb-0">Light / Dark</h6>
              <div class="form-check form-switch ps-0 ms-auto my-auto">
                <input class="form-check-input mt-1 ms-auto" type="checkbox" id="dark-version" onclick="darkMode(this)" />
              </div>
            </div>
            <hr class="horizontal dark my-sm-4" />
            <a class="btn bg-gradient-info w-100" href="https://www.creative-tim.com/product/material-dashboard-pro">Free Download</a>
            <a class="btn btn-outline-dark w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard">View documentation</a>
            <div class="w-100 text-center">
              <a class="github-button" href="https://github.com/creativetimofficial/material-dashboard" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star creativetimofficial/material-dashboard on GitHub">Star</a>
              <h6 class="mt-3">Thank you for sharing!</h6>
              <a href="https://twitter.com/intent/tweet?text=Check%20Material%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&amp;url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                <i class="fab fa-twitter me-1" aria-hidden="true"></i> Tweet
              </a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/material-dashboard" class="btn btn-dark mb-0 me-2" target="_blank">
                <i class="fab fa-facebook-square me-1" aria-hidden="true"></i> Share
              </a>
            </div>
          </div>
        </div>
      </div>
      {snackBarOpen ? <SnackBar open={snackBarOpen} severity={severity} handleSnackBarClose={handleSnackBarClose} errorMessage={errorMessage} /> : null}
      {/* <!--   Core JS Files   --> */}
      <script src="./assets/js/core/popper.min.js"></script>
      <script src="./assets/js/core/bootstrap.min.js"></script>
      <script src="./assets/js/plugins/perfect-scrollbar.min.js"></script>
      <script src="./assets/js/plugins/smooth-scrollbar.min.js"></script>
      <script src="./assets/js/plugins/chartjs.min.js"></script>
      <script src='../Reusables/Dashboard.js'></script>
      <script src='../Reusables/Dashboard.js'></script>
      {/* <!-- Github buttons --> */}
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      {/* <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc --> */}
      <script src="./assets/js/material-dashboard.min.js?v=3.1.0"></script>
    </div>
  )
}

export default Dashboard;