'use strict';
(function eventHandler() {
    const $ = document.querySelector.bind(document);
    const popin = $('.test');
    const button = $('.sidebar_button-circle');
    let active = false;

    // rotating button
    document.onclick = function(e) {
        // add animation class when clicked 
        if( e.target.classList == 'sidebar_button-circle' )        
        {   
            if( active == false ) {
                button.classList.add('no-hover');
                button.classList.add('sidebar_button-active');
                popin.innerHTML = `<div class="sidebar_menu-module animation_drop-in" >
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i class="fa-solid fa-pen"></i>
                                                <span> Viết blog </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>`;
                active = true;
            };
        }
        // remove animation class when cliked again
        if( e.target.classList !== 'sidebar_button-circle' ) {
            if( active == true ) {
                const sidebarMenu = $('.sidebar_menu-module')
                button.classList.remove('no-hover');
                button.classList.remove('sidebar_button-active');
                sidebarMenu.classList.remove('animation_drop-in');
                sidebarMenu.classList.add('animation_fade-out');

                setTimeout(function() {
                    sidebarMenu.remove();
                }, 300)

                active = false;
            };
        };
        // Ignor this line
        // For runtime error because i didn't provide a promise
        return Promise.resolve("Dummy response to keep the console quiet");
    }
})(); 
