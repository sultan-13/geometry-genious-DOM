function triangleAreaCalculate(){
    const base = getInputFieldById('triangle-base');
    const height = getInputFieldById('triangle-height');
    if(isNaN(base) || isNaN(height)){
        alert("Please give a  number");
        return;
    }
    const area = 0.5 * base * height;
    setElementTextBtId('triangle-area',parseFloat(area.toFixed(2)));
    createAreaEntry('Triangle',parseFloat(area.toFixed(2)));
}

function rectangleAreaCalculate(){
    const width = getInputFieldById('rectangle-width');
    const length = getInputFieldById('rectangle-length');
    if(isNaN(width) || isNaN(length)){
        alert("Please give a  number");
        return;
    }
    const area = width * length;
    setElementTextBtId('rectangle-area',parseFloat(area.toFixed(2)));
    createAreaEntry('Rectangle',parseFloat(area.toFixed(2)));
}

function parallelogramAreaCalculate(){
    const base = getInputFieldById('parallelogram-base');
    const height = getInputFieldById('parallelogram-height');
    if(isNaN(base) || isNaN(height)){
        alert("Please give a  number");
        return;
    }
    const area = base * height;
    setElementTextBtId('parallelogram-area',parseFloat(area.toFixed(2)));
    createAreaEntry('Parellelogram',parseFloat(area.toFixed(2)));
}

function rhombusAreaCalculate(){
    const diagonalOne = getInputFieldById('diagonal-one');
    const diagonalTwo = getInputFieldById('diagonal-two');
    if(isNaN(diagonalOne) || isNaN(diagonalTwo)){
        alert("Please give a  number");
        return;
    }
    const area = 0.5 * diagonalOne * diagonalTwo;
    setElementTextBtId('rhombus-area',parseFloat(area.toFixed(2)));
    createAreaEntry('Rhombus',parseFloat(area.toFixed(2)));
}

function pentagonAreaCalculate(){
    const perimeter = getInputFieldById('pentagon-perimeter');
    const apothem = getInputFieldById('pentagon-apothem');
    if(isNaN(perimeter) || isNaN(apothem)){
        alert("Please give a  number");
        return;
    }
    const area = 0.5 * perimeter * apothem;
    setElementTextBtId('pentagon-area',parseFloat(area.toFixed(2)));
    createAreaEntry('Pentagon',parseFloat(area.toFixed(2)));
}

function ellipseAreaCalculate(){
    const semiMajorAxis = getInputFieldById('ellipse-semi-major-axis');
    const semiMinorAxis = getInputFieldById('ellipse-semi-minor-axis');
    if(isNaN(semiMajorAxis) || isNaN(semiMinorAxis)){
        alert("Please give a  number");
        return;
    }
    const area = 3.14 * semiMajorAxis  * semiMinorAxis ;
    setElementTextBtId('ellipse-area',parseFloat(area.toFixed(2)));
    createAreaEntry('Ellipse',parseFloat(area.toFixed(2)));
}