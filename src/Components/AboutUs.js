import React from "react";
import '../CSS/AboutUs.css';
import '../CSS/Dashboard.css';
import { SideNavBar } from '../Reusables/SideNavBar';

const AboutUs = () => {
  return (
    <div class="bg-light py-5 service-5">
      <div>
        {SideNavBar()}
      </div>
      <div class="container" style={{ marginLeft: 250 }}>
        <div class="row">
          <div class="col-md-4 wrap-service5-box">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body d-flex">
                <div class="mr-4 mb-2 text-success-gradiant icon-size">N</div>
                <div class="">
                  <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Instant Solutions</a></h6>
                  <p class="mt-3">You can relay on our amazing features list and also our services.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 wrap-service5-box">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body d-flex">
                <div class="mr-4 mb-2 text-success-gradiant icon-size">P</div>
                <div class="">
                  <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Powerful Tech </a></h6>
                  <p class="mt-3">You can relay on our amazing features list and also our customer services.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 wrap-service5-box">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body d-flex">
                <div class="mr-4 mb-2 text-success-gradiant icon-size">S</div>
                <div class="">
                  <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">100% Satisfaction </a></h6>
                  <p class="mt-3">You can relay on our amazing features list and also our customer services.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 wrap-service5-box">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body d-flex">
                <div class="mr-4 mb-2 text-success-gradiant icon-size">T</div>
                <div class="">
                  <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Targeting Market</a></h6>
                  <p class="mt-3">You can relay on our amazing features list and also our customer services.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 wrap-service5-box">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body d-flex">
                <div class="mr-4 mb-2 text-success-gradiant icon-size">L</div>
                <div class="">
                  <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Goal Achievement </a></h6>
                  <p class="mt-3">You can relay on our amazing features list and also our customer services.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 wrap-service5-box">
            <div class="card card-shadow border-0 mb-4">
              <div class="card-body d-flex">
                <div class="mr-4 mb-2 text-success-gradiant icon-size">F</div>
                <div class="">
                  <h6 class="font-weight-medium"><a href="javascript:void(0)" class="linking">Fully Responsive</a></h6>
                  <p class="mt-3">You can relay on our amazing features list and also our customer services.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 mt-3 text-center">
            <a class="btn btn-success-gradiant btn-md border-0 text-white"><span>View Details</span></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;