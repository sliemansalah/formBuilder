<template>
  <div>
    <button class="m-aside-left-close m-aside-left-close--skin-dark" id="m_aside_left_close_btn">
      <i class="la la-close"></i>
    </button>
    <div id="m_aside_left" class="m-grid__item m-aside-left m-aside-left--skin-dark">
      <!-- BEGIN: Aside Menu -->
      <div
        id="m_ver_menu"
        class="m-aside-menu m-aside-menu--skin-dark m-aside-menu--submenu-skin-dark"
        m-menu-vertical="1"
        m-menu-scrollable="1"
        m-menu-dropdown-timeout="500"
        style="position: relative;"
      >
        <ul class="m-menu__nav m-menu__nav--dropdown-submenu-arrow">
          <li :class="$route.path=='/'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
           aria-haspopup="true">
            <router-link to="/" class="m-menu__link">
              <i class="m-menu__link-icon flaticon-line-graph"></i>
              <span class="m-menu__link-title">
                <span class="m-menu__link-wrap">
                  <span class="m-menu__link-text">Dashboard</span>
                  <span class="m-menu__link-badge">
                  </span>
                </span>
              </span>
            </router-link>
          </li>
          <li class="m-menu__section">
            <h4 class="m-menu__section-text">Components</h4>
            <i class="m-menu__section-icon flaticon-more-v2"></i>
          </li>
          <li
            class="m-menu__item m-menu__item--submenu"
            aria-haspopup="true"
            m-menu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="m-menu__link m-menu__toggle">
              <i class="m-menu__link-icon flaticon-layers"></i>
              <span class="m-menu__link-text">Customers</span>
              <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu">
              <span class="m-menu__arrow"></span>
              <ul class="m-menu__subnav">
                <li :class="$route.path=='/customers'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/customers" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">View All</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>

            <li
            class="m-menu__item m-menu__item--submenu"
            aria-haspopup="true"
            m-menu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="m-menu__link m-menu__toggle">
              <i class="m-menu__link-icon fa fa-users"></i>
              <span class="m-menu__link-text">Users</span>
              <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu">
              <span class="m-menu__arrow"></span>
              <ul class="m-menu__subnav">
                <li :class="$route.path=='/users'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/users" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">View All</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>


            <li
            class="m-menu__item m-menu__item--submenu"
            aria-haspopup="true"
            m-menu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="m-menu__link m-menu__toggle">
              <i class="m-menu__link-icon fa fa-list"></i>
              <span class="m-menu__link-text">Components</span>
              <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu">
              <span class="m-menu__arrow"></span>
              <ul class="m-menu__subnav">
                <li :class="$route.path=='/components/base'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/components/base" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Base</span>
                  </router-link>
                </li>
                  <li :class="$route.path=='/components/prime'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/components/prime" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Prime</span>
                  </router-link>
                </li>

                <li class="m-menu__item  m-menu__item--submenu" aria-haspopup="true" m-menu-submenu-toggle="hover"><a href="javascript:;" class="m-menu__link m-menu__toggle"><i class="m-menu__link-bullet m-menu__link-bullet--dot"><span></span></i><span
												 class="m-menu__link-text">Custom</span><i class="m-menu__ver-arrow la la-angle-right"></i></a>
											<div class="m-menu__submenu "><span class="m-menu__arrow"></span>
												<ul class="m-menu__subnav">
                           <li :class="$route.path=='/components/custom/tabs-prime'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/components/custom/tabs-prime" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Tabs Prime</span>
                  </router-link>
                </li>

                 <li :class="$route.path=='/components/custom/tabs-elementui'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/components/custom/tabs-elementui" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Tabs Element UI</span>
                  </router-link>
                </li>

                <li :class="$route.path=='/components/custom/calander-elementui'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/components/custom/calander-elementui" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Calander Element UI</span>
                  </router-link>
                </li>

                 <li :class="$route.path=='/components/custom/wizard-elementui'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/components/custom/wizard-elementui" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Wizard Element UI</span>
                  </router-link>
                </li>

												</ul>
											</div>
										</li>
                    
              </ul>
            </div>
          </li>


  <li
            class="m-menu__item m-menu__item--submenu"
            aria-haspopup="true"
            m-menu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="m-menu__link m-menu__toggle">
              <i class="m-menu__link-icon fa fa-building"></i>
              <span class="m-menu__link-text">Forms</span>
              <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu">
              <span class="m-menu__arrow"></span>
              <ul class="m-menu__subnav">

                <li :class="$route.path=='/forms/validation'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/forms/validation" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Validation Form</span>
                  </router-link>
                </li>

                <li :class="$route.path=='/forms/dynamic-form'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/forms/dynamic-form" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Dynamic Form</span>
                  </router-link>
                </li>

              </ul>
            </div>
          </li>

 <li
            class="m-menu__item m-menu__item--submenu"
            aria-haspopup="true"
            m-menu-submenu-toggle="hover"
          >
            <a href="javascript:;" class="m-menu__link m-menu__toggle">
              <i class="m-menu__link-icon fa fa-asterisk"></i>
              <span class="m-menu__link-text">Slots</span>
              <i class="m-menu__ver-arrow la la-angle-right"></i>
            </a>
            <div class="m-menu__submenu">
              <span class="m-menu__arrow"></span>
              <ul class="m-menu__subnav">

                <li :class="$route.path=='/slot'? 'm-menu__item m-menu__item--active': 'm-menu__item'"
                 aria-haspopup="true">
                  <router-link to="/slot" class="m-menu__link">
                    <i class="m-menu__link-bullet m-menu__link-bullet--dot">
                      <span></span>
                    </i>
                    <span class="m-menu__link-text">Slot</span>
                  </router-link>
                </li>

              </ul>
            </div>
 </li>

        

        </ul>
      </div>

      <!-- END: Aside Menu -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
};
</script>

<style>
</style>