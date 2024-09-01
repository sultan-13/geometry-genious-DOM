function getInputFieldById(fieldId){
    const inputField = document.getElementById(fieldId);
    const value = parseFloat(inputField.value);
    inputField.value = '';
    return value;
}

function setElementTextBtId(textId,value){
    const element = document.getElementById(textId);
    element.innerText = value;
}

function createAreaEntry(areaType,area){
    const createEntry = document.getElementById('area-entry');
    const count = createEntry.childElementCount;
    const p = document.createElement('p');
    p.className = "my-4"
    p.innerHTML = `${count+1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-error btn-sm text-white">Convert</button>`
    createEntry.appendChild(p);
}