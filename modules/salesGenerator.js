import SalesModule from "../Modules/SalesModule.js";


// henter tall for dager forrige uke, og setter de til height i søylediagram på home siden.

const HomePageDiagramsModule = ( function () {

    const generateDiagramNumbers = function (){
          const filledDay = document.querySelectorAll(".diagram-filled");
          const tool = document.querySelectorAll(".tool");
        for (var i = 0; i < filledDay.length; i++) {
          filledDay[i].style.height = SalesModule.getTotalperDay(i) + "%";
          tool[i].innerHTML = Math.round(SalesModule.getTotalperDay(i)) + "000.-";
        }
    };

    return{generateDiagramNumbers};

}());

export default HomePageDiagramsModule;
