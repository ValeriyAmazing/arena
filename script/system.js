function createElement(tag, className){
    const item = document.createElement(tag)
    if(className){
        item.classList.add(className)
    }
    return item;
}
export { createElement }