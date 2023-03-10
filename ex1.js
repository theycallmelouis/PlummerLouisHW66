//Displays all body nodes
const bodyNodes = () => {
    const body = document.body;
    const childNodes = body.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
        console.log(childNodes[i]);
    }
}
bodyNodes();