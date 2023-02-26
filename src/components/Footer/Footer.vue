<template>
    <div id="footer">
        <hr>     
        
        <div class="d-flex align-item-center justify-content-between">
            <h6 class="copyright">Copyright 2023 © Lucas Dantas Nogueira</h6>
            <ul class="list-group d-flex align-items-center flex-row">
                <li class="list-group-item" id="items">
                    <font-awesome-icon class="icons" :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
                </li>
                <li class="list-group-item" id="items">
                    <font-awesome-icon class="icons" :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                </li>
                <li class="list-group-item" id="items">
                    <font-awesome-icon class="icons" :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
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

.icons {
    font-size: 20px;
}

@media only screen and (max-width: 600px) {
  #footer {
    height: 41vh;
  }
}
</style>