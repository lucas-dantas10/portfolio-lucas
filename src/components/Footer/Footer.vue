<template>
    <div id="footer">
        <hr>     
        
        <div class="d-flex align-item-center justify-content-between">
            <h6 class="copyright">Copyright 2023 © Lucas Dantas Nogueira</h6>
            <ul class="list-group d-flex align-items-center flex-row">
                <li class="list-group-item" id="items">
                    <a href="https://github.com/lucas-dantas10" target="_blank" class="link">
                        <font-awesome-icon class="icons" :icon="{ prefix: 'fab', iconName: 'github' }"/>
                    </a>                    
                </li>
                <li class="list-group-item" id="items">
                    <a href="https://www.linkedin.com/in/lucas-dantas-197549236/" target="_blank" class="link">
                        <font-awesome-icon class="icons" :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
                    </a>
                </li>
                <li class="list-group-item"  id="items">
                    <a href="" target="_blank" class="link">
                        <font-awesome-icon class="icons" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
                    </a>
                </li>
            </ul>
        </div>
       
    </div>
    
</template>

<style scoped>
.copyright {
    color: #393e46;
    font-weight: 100;
    margin-top: .5rem;
}

#items {
    border-radius: 2rem;
    transition: .5s ease-in-out;
}

#items:hover {
    cursor: pointer;
    background-color: var(--violet);
}

.link {
    text-decoration: none;
    color: black;
}

.icons {
    font-size: 20px;
}

@media only screen and (max-width: 600px) {
  #footer {
    height: 41vh;
  }
}
</style>