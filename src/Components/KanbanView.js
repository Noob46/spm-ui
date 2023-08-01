import React, { useState, useEffect } from "react";
import Header from "./Header";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { connect, useDispatch, useSelector } from "react-redux";
import { SideNavBar } from '../Reusables/SideNavBar';
import { useNavigate } from 'react-router-dom';
import { GetAllTasks } from '../Actions/TaskActions';
import '../App.css';

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});

const KanbanView = (props) => {
  const [state, setState] = useState([]);

  const navigate = useNavigate();
  const allTasksReducerData = useSelector((state) => state.tasks.allTasks);

  useEffect(() => {
    props.getAllTasks();
  }, [])

  useEffect(() => {
    getItems();
  }, [allTasksReducerData])

  // fake data generator
  const getItems = () => {
    const allTasksData = [];
    const openDataArray = [];
    let openDataObj = {};
    const offset = 0;
    props.allTasks.map((data, i) => {
      openDataObj = {};
      openDataObj.statusName = data.status.name;
      openDataArray.push({
        id: `item-${i + offset}-${new Date().getTime()}`,
        content: `item ${i + offset}`,
        name: data.name,
        description: data.description
      })
    })
    openDataObj.arrayData = openDataArray;
    allTasksData.push(openDataObj);
    openDataObj = {};
    openDataObj.statusName = 'Doing';
    openDataObj.arrayData = [];
    allTasksData.push(openDataObj);
    openDataObj = {};
    openDataObj.statusName = 'Done';
    openDataObj.arrayData = [];
    allTasksData.push(openDataObj);
    setState(allTasksData);
  }

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list.arrayData);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  /**
   * Moves an item from one list to another list.
   */
  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source.arrayData);
    const destClone = Array.from(destination.arrayData);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  };

  function onDragEnd(result) {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;
    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState = [...state];
      newState[sInd].arrayData = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd].arrayData = result[sInd];
      newState[dInd].arrayData = result[dInd];
      setState(newState.filter(group => {
        if (group.arrayData.length === 0) {
          return 1;
        }
        return group.arrayData.length
      }));
    }
  }

  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div class="g-sidenav-show  bg-gray-200">
      {SideNavBar()}
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
        <Header />
        {/* <!-- End Navbar --> */}
        <div class="container-fluid py-4">
          <div class="row mt-4">
            <div class="col-lg-12 col-md-6 mb-md-0 mb-4">
              <div class="card z-index-2 ">

                <div class="card-body">
                  <h6 class="mb-0 ">My Tasks</h6>
                  <hr class="dark horizontal" />
                  {/* <div class="d-flex ">
                    <button
                      type="button"
                      onClick={() => {
                        setState([...state, []]);
                      }}
                    >
                      Add new group
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setState([...state, getItems(1)]);
                      }}
                    >
                      Add new item
                    </button>
                  </div> */}
                  <div style={{ display: "flex" }}>
                    <DragDropContext onDragEnd={onDragEnd}>
                      {state.map((el, ind) => (
                        <Droppable key={ind} droppableId={`${ind}`}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              style={getListStyle(snapshot.isDraggingOver)}
                              {...provided.droppableProps}
                            >
                              {el.statusName}
                              {el.arrayData && el.arrayData.map((item, index) => (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                      )}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          justifyContent: "space-around"
                                        }}
                                      >
                                        {item.name}
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      ))}
                    </DragDropContext>
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
  );
}

const mapStateToProps = (state) => {
  return {
    allTasks: state.tasks.allTasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllTasks: () => dispatch(GetAllTasks())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KanbanView);