// Printer ut home content
const mainContentHome = document.querySelector(".main-content");
const navbarHome = document.querySelector(".navbar-home");
let mainTextHome = `



    <h1 class="home-header">HOME</h1>
    <div class="home-header-div">
    <h3 class="total-sales-header">TOTAL SALES</h3>
    <h4 class="total-past-header">PAST 7 DAYS</h4>
    </div>

    <!-- Total sales container -->
    <div class="total_sales_container">

        <div class="sales_numbers_container">
          <span>100K</span>
          <span>75K</span>
          <span>50K</span>
          <span>25K</span>
          <span>0</span>
        </div>

        <div class="diagrams_container">
        <div class="diagram">
           <div class="diagram-filled"></div>
           <span class="tool">42 000.-</span>
        </div>

        <div class="diagram">
          <div class="diagram-filled"></div>
          <span class="tool"></span>
        </div>

       <div class="diagram">
          <div class="diagram-filled"></div>
          <span class="tool"></span>
       </div>

       <div class="diagram">
          <div class="diagram-filled"></div>
          <span class="tool"></span>
       </div>

       <div class="diagram">
          <div class="diagram-filled"></div>
          <span class="tool"</span>
       </div>

       <div class="diagram">
          <div class="diagram-filled"></div>
          <span class="tool"></span>
       </div>

       <div class="diagram">
        <div class="diagram-filled"></div>
        <span class="tool"></span>
       </div>
       </div>

       <div class="week">
      <span>M</span>
      <span>T</span>
      <span>W</span>
      <span>T</span>
      <span>F</span>
      <span>S</span>
      <span>S</span>
      </div>
  </div>

  <!-- Horisontal og vertical linje som deler grafene -->

  <div class="horizontal_line"></div>

  <!-- Budget & Profit -->
  <div class="budget-profit-container">

    <div class="budget-container">
      <h3 class="budget-header">BUDGET</h3>

      <p class="budget-sales-header">SALES: <span class="span-sales">150 000.-</span></p>
      <p class="budget-total-header">TOTAL: <span class="span-total">300 000.-</span></p>


    </div>


    <div class="profit-container">

      <h3 class="profit-header">PROFIT</h3>
      <div class="total_profit_number">
      <span >$</span><span class="profit_k"> .-</span>
      </div>
    </div>
  </div>
`
// Loader opp homecontent når siden lastes opp og printer ut home content når brukeren klikker på Home
window.onload = mainContentHome.innerHTML = mainTextHome;

navbarHome.addEventListener("click", ()=>{
  mainContentHome.innerHTML = mainTextHome;
  loopNumber();
  setTimeout(HomePageDiagramsModule.generateDiagramNumbers, 100);
});

// Importerer Salesmodule for å bruke data inn i funksjonen under
import SalesModule from '../Modules/SalesModule.js';
// Henter data fra SalesModule
function totalNumber(){
  const salesArray = SalesModule.getAll();
  const totalProfit = salesArray[0].revenueAccThisYear + salesArray[1].revenueAccThisYear + salesArray[2].revenueAccThisYear + salesArray[3].revenueAccThisYear;
  return totalProfit;
}
// Lager array med data
function makeNumbers(){
    let numbers = [];
    for(let i=31;i>0;i--){
        numbers.push(totalNumber() / i)
    }
    return numbers;
}
// Printer ut tall i stigende rekkefølge
function loopNumber(){
    var counter = 0;
    var numbers = makeNumbers();
    var loopnumber = setInterval( changeNumbers, 50);
    function changeNumbers() {
        counter++;
        if(counter === 30){
            clearInterval(loopnumber)
        }
        document.querySelector(".total_profit_number").innerHTML= Math.floor(numbers[counter]);
    }
}
loopNumber();

// Importerer HomePageDiagramsModule for å bruke funksjonen som henter data som fyller ut diagramen på home siden
import HomePageDiagramsModule from '../modules/salesGenerator.js';

// setter timeout slik at transition funkerer på søylene
window.onload =  setTimeout(HomePageDiagramsModule.generateDiagramNumbers, 100);
