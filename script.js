function changeDirection(){
    let attr = document.getElementById("direction");
    let container = document.getElementById("dir_container");
    switch (attr.value) {
        case "1":
            container.style.setProperty("flex-direction", "row");
            break;
        
        case "2":
            container.style.setProperty("flex-direction", "row-reverse");
            break;
    
        case "3":
            container.style.setProperty("flex-direction", "column");
            break;

        case "4":
            container.style.setProperty("flex-direction", "column-reverse");
            break;
    
        default:
            container.style.setProperty("flex-direction", "row");
            break;
    }
}

function changeJustifyContent(){
    let attr = document.getElementById("justify_content");
    let container = document.getElementById("justify_content_container");
    switch (attr.value) {
        case "1":
            container.style.setProperty("justify-content", "flex-start");
            break;
        
        case "2":
            container.style.setProperty("justify-content", "flex-end");
            break;
    
        case "3":
            container.style.setProperty("justify-content", "center");
            break;

        case "4":
            container.style.setProperty("justify-content", "space-between");
            break;

        case "5":
            container.style.setProperty("justify-content", "space-around");
            break;
    
        default:
            container.style.setProperty("justify-content", "flex-start");
            break;
    }
}

function changeAlignItems(){
    let attr = document.getElementById("align_items");
    let container = document.getElementById("align_items_container");
    switch (attr.value) {
        case "1":
            container.style.setProperty("align-items", "flex-start");
            break;
        
        case "2":
            container.style.setProperty("align-items", "flex-end");
            break;
    
        case "3":
            container.style.setProperty("align-items", "center");
            break;

        case "4":
            container.style.setProperty("align-items", "stretch");
            break;

        case "5":
            container.style.setProperty("align-items", "baseline");
            break;
    
        default:
            container.style.setProperty("align-items", "stretch");
            break;
    }
}

function changeFlexWrap(){
    let attr = document.getElementById("flex_wrap");
    let container = document.getElementById("flex_wrap_container");
    switch (attr.value) {
        case "1":
            container.style.setProperty("flex-wrap", "nowrap");
            break;
        
        case "2":
            container.style.setProperty("flex-wrap", "wrap");
            break;
    
        case "3":
            container.style.setProperty("flex-wrap", "wrap-reverse");
            break;
    
        default:
            container.style.setProperty("flex-wrap", "nowrap");
            break;
    }
}

function changeAlignContent(){
    let attr = document.getElementById("align_content");
    let container = document.getElementById("align_content_container");
    switch (attr.value) {
        case "1":
            container.style.setProperty("align-content", "flex-start");
            break;
        
        case "2":
            container.style.setProperty("align-content", "flex-end");
            break;
    
        case "3":
            container.style.setProperty("align-content", "center");
            break;

        case "4":
            container.style.setProperty("align-content", "space-between");
            break;

        case "5":
            container.style.setProperty("align-content", "space-around");
            break;
    
        case "6":
            container.style.setProperty("align-content", "stretch");
            break;
        
        default:
            container.style.setProperty("justify-content", "flex-start");
            break;
    }
}