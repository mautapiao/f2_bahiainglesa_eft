'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bahiainglesa-ng documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AdminAdsComponent.html" data-type="entity-link" >AdminAdsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminAdsEditComponent.html" data-type="entity-link" >AdminAdsEditComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminCategoryComponent.html" data-type="entity-link" >AdminCategoryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminHomeComponent.html" data-type="entity-link" >AdminHomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminLayoutComponent.html" data-type="entity-link" >AdminLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPlansComponent.html" data-type="entity-link" >AdminPlansComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminPostComponent.html" data-type="entity-link" >AdminPostComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdminUserComponent.html" data-type="entity-link" >AdminUserComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AdscreateComponent.html" data-type="entity-link" >AdscreateComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthLayoutComponent.html" data-type="entity-link" >AuthLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AvailablePlansComponent.html" data-type="entity-link" >AvailablePlansComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AvisosComponent.html" data-type="entity-link" >AvisosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BienvenidosComponent.html" data-type="entity-link" >BienvenidosComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CalltoactionComponent.html" data-type="entity-link" >CalltoactionComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClientHomeComponent.html" data-type="entity-link" >ClientHomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ClientLayoutComponent.html" data-type="entity-link" >ClientLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ContactComponent.html" data-type="entity-link" >ContactComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EventsComponent.html" data-type="entity-link" >EventsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeroBahiaComponent.html" data-type="entity-link" >HeroBahiaComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InicioComponent.html" data-type="entity-link" >InicioComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainContentComponent.html" data-type="entity-link" >MainContentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MainLayoutComponent.html" data-type="entity-link" >MainLayoutComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyAccountComponent.html" data-type="entity-link" >MyAccountComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MyAdsComponent.html" data-type="entity-link" >MyAdsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NoticiasComponent.html" data-type="entity-link" >NoticiasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlayasComponent.html" data-type="entity-link" >PlayasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PostsComponent.html" data-type="entity-link" >PostsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RecoveryComponent.html" data-type="entity-link" >RecoveryComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RegisterComponent.html" data-type="entity-link" >RegisterComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RestaurantsComponent.html" data-type="entity-link" >RestaurantsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/RightColumnComponent.html" data-type="entity-link" >RightColumnComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SidebarComponent.html" data-type="entity-link" >SidebarComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToursComponent.html" data-type="entity-link" >ToursComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/UserEditComponent.html" data-type="entity-link" >UserEditComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/UserAdminService.html" data-type="entity-link" >UserAdminService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Ad.html" data-type="entity-link" >Ad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdAdmin.html" data-type="entity-link" >AdAdmin</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AdSpot.html" data-type="entity-link" >AdSpot</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aviso.html" data-type="entity-link" >Aviso</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DataResponse.html" data-type="entity-link" >DataResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Evento.html" data-type="entity-link" >Evento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Hospedaje.html" data-type="entity-link" >Hospedaje</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Notice.html" data-type="entity-link" >Notice</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Post.html" data-type="entity-link" >Post</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Restaurante.html" data-type="entity-link" >Restaurante</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tour.html" data-type="entity-link" >Tour</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/UserAdmin.html" data-type="entity-link" >UserAdmin</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});