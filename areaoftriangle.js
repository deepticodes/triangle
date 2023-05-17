// AreaOfTriangle = 1/2(Base * Height)
const sides = document.querySelectorAll(".side-input"),
submitBtn = document.querySelector("#submit-btn"),
outputEl = document.querySelector("#output");

function calculateMultipleOfSides(a,b)
{
    const multipleOfSides = a * b;
    return multipleOfSides;
}

function findarea()
{
    const multipleOfSides = calculateMultipleOfSides(Number(sides[0].value),Number(sides[1].value));
    const areaOfTriangle = (multipleOfSides)/2;
    outputEl.innerText = "Area of triangle is " +areaOfTriangle;
}

submitBtn.addEventListener("click",findarea);