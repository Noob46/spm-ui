import React from 'react';

export const SideNavBar = () => {
  return (
    <aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
      <div class="sidenav-header">
        <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a class="navbar-brand m-0" href="/" target="_blank">
          <img src="./assets/img/logo-ct.png" class="navbar-brand-img h-100" alt="main_logo" />
          <span class="ms-1 font-weight-bold text-white">SPM</span>
        </a>
      </div>
      <hr class="horizontal light mt-0 mb-2" />
      <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link text-white active bg-gradient-primary" href="/dashboard">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">dashboard</i>
              </div>
              <span class="nav-link-text ms-1">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="/">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <span class="material-icons opacity-10">task</span>
              </div>
              <span class="nav-link-text ms-1">Tasks</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="/">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <span class="material-icons opacity-10">inbox</span>
              </div>
              <span class="nav-link-text ms-1">Inbox</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/ContactUs">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <span class="material-icons opacity-10">inbox</span>
              </div>
              <span class="nav-link-text ms-1">ContactUs</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/AboutUs">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <span class="material-icons opacity-10">inbox</span>
              </div>
              <span class="nav-link-text ms-1">AboutUs</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="/KanbanView">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <span class="material-icons opacity-10">inbox</span>
              </div>
              <span class="nav-link-text ms-1">Kanban View</span>
            </a>
          </li>

          <li class="nav-item mt-3">
            <h6 class="ps-4 ms-2 text-uppercase text-xs text-white font-weight-bolder opacity-8">Projects</h6>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white " href="/">
              <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                <i class="material-icons opacity-10">crop_5_4</i>
              </div>
              <span class="nav-link-text ms-1">Demo</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="sidenav-footer position-absolute w-100 bottom-0 ">
        <div class="mx-3">
          {/* <!-- <a class="btn btn-outline-primary mt-4 w-100" href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard?ref=sidebarfree" type="button">Documentation</a> --> */}
          <a class="btn bg-gradient-primary w-100" href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree" type="button">Upgrade to Premium</a>
        </div>
      </div>
    </aside>
  )
}