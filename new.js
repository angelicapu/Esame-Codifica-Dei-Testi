
//funzione che al click dell'immagine fa comparire la seconda sezione con i facsimili della cartolina cliccata e i metadati corrispondenti
function image() {
    src=this.getAttribute("src");
    container.style.height="auto";
    notaCorbella.style.display="none"; 
    nota_Corbella.style.display="none"; 
    notaFacsTerzaCartolina.style.display="none";
    nota_facsimile_seconda_cartolina.style.display="none";
    
    NEW_IMG.style.transform= "rotate(0deg)";
    NEW_IMG2.style.transform= "rotate(0deg)";
    NEW_IMG3.style.transform= "rotate(0deg)";
    
    NEW_IMGR.style.transform= "rotate(270deg)";
    NEW_IMGR2.style.transform= "rotate(0deg)";
    NEW_IMGR3.style.transform= "rotate(270deg)";
    
    
    NEW_IMGR.style.display="none";
    NEW_IMGR2.style.display="none";
    NEW_IMGR3.style.display="none";
    
    TEXT1.style.display="none";      
    TEXT1t.style.display="none";
    TEXT2t.style.display="none"; 
    TEXT3t.style.display="none";   
 
    if (src=="7694-112F.jpg" ) {
      section_2.style.display="block";
      container_fronte.appendChild(R1);
      NEW_IMG.style.display="block"; 
      NEW_IMG2.style.display="none";
      NEW_IMG3.style.display="none";
      
      R1.style.display="block";
      R2.style.display="none";
      R3.style.display="none";
      
      container_testo.appendChild(TEXT1);
      container.appendChild(container_testo);
      TEXT1.style.display="inline-block";
      TEXT2.style.display="none";
      TEXT3.style.display="none";
    } else if (src == "7694-176F.jpg"  ) {
        section_2.style.display="block";
        
        container_fronte.appendChild(R2);
        
        NEW_IMG.style.display="none";
        NEW_IMG2.style.display="block";

        NEW_IMG3.style.display="none";
        
        R1.style.display="none";
        R2.style.display="block";
        R3.style.display="none";
        
        container_testo.appendChild(TEXT2);
        container.appendChild(container_testo);
        TEXT2.style.display="block";
        TEXT1.style.display="none";
        TEXT3.style.display="none";

      } else {
        section_2.style.display="inline-block";
        container_fronte.appendChild(R3);
        
        NEW_IMG.style.display="none";
        NEW_IMG2.style.display="none";
        NEW_IMG3.style.display="block"; 
     
        R1.style.display="none";
        R2.style.display="none";
        R3.style.display="block";
        
        container_testo.appendChild(TEXT3);
        container.appendChild(container_testo);
        TEXT3.style.display="block";
        TEXT1.style.display="none";
        TEXT2.style.display="none";
      }

   EditoreDisegno.style.display="none";
   PubPlaceDisegno.style.display="none";
   cliccato=true;
 }
 
 
 var ClickAbout=true;
 
//funzione che gestisce il click sul pulsante About: fa comparire la sezione 3 con le informazioni riguardanti il progetto e i responsabili,  se ri-clicco torno alle 3 cartoline di partenza
function About() {

    if (ClickAbout) {    
        section_3.style.display="inline-block";
        section_2.style.display="none";
        linkAbout.setAttribute("href", "#section_3");
        buttonAbout.setAttribute("value", "Corrispondenze");
        ClickAbout=false;
        
    } else {
        linkAbout.setAttribute("href", "#section_1");
        section_3.style.display="none";
         buttonAbout.setAttribute("value", "About");
        ClickAbout=true;
    }
    
}
 
 
//funzione che gestisce il click sul pulsante RETRO: mostra il facsimile del retro della cartolina scelta e i testi corrispondenti in forma digitale
function Retro() {
     
     container_testo.style.height="auto";
     container.style.height="120%";
     notaCorbella.style.display="none";
     nota_Corbella.style.display="none"; 
     notaFacsTerzaCartolina.style.display="none";
     nota_facsimile_seconda_cartolina.style.display="none";
     cliccato=true;
     EditoreDisegno.style.display="none";
     PubPlaceDisegno.style.display="none";
     NEW_IMG.style.display="none";
     NEW_IMG2.style.display="none";
     NEW_IMG3.style.display="none";
     R1.style.display="none";
     R2.style.display="none";
     R3.style.display="none";
  
      if (src=="7694-112F.jpg" ) {     
           
           container_fronte.appendChild(NEW_IMGR);
           NEW_IMGR.style.display="inline-block";
           NEW_IMGR.style.transform= "rotate(270deg)";
           NEW_IMGR.style.marginTop="-60%";
           TEXT1.style.display="none";      
           TEXT1t.style.display="inline-block";

           TEXT2t.style.display="none"; 
           TEXT3t.style.display="none";   
           
           bottoneruota.setAttribute("onclick", "Ruota(NEW_IMGR);");
           
           return;    
       } else if (src == "7694-176F.jpg") {                
 
           container_fronte.appendChild(NEW_IMGR2);
           NEW_IMGR2.style.display="inline-block";
           NEW_IMGR2.style.transform= "rotate(0deg)";
           NEW_IMGR2.style.marginTop="-100%";
           TEXT2.style.display="none";     
           TEXT2t.style.display="inline-block";
           TEXT1t.style.display="none"; 
           TEXT3t.style.display="none"; 
           
           bottoneruota.setAttribute("onclick", "Ruota(NEW_IMGR2);");
           return;     
       } else if (src == "7694-122F.jpg") { 
           
           container_fronte.appendChild(NEW_IMGR3);
           NEW_IMGR3.style.display="inline-block";
           NEW_IMGR3.style.transform= "rotate(270deg)";
           NEW_IMGR3.style.marginTop="-70%";
           TEXT3.style.display="none"; 
           TEXT3t.style.display="inline-block";
       
           TEXT2t.style.display="none"; 
           TEXT1t.style.display="none"; 
           
           bottoneruota.setAttribute("onclick", "Ruota(NEW_IMGR3);");
           return;       
       }      
 }


//funzione che gestisce il click sul pulsante FRONTE: mostra il facsimile del fronte della cartolina scelta e gli eventuali testi corrispondenti in forma digitale
 function Avanti() {
     container.style.height="100%";  
     container_testo.style.height="auto";
     cliccato=true;
     NEW_IMGR.style.display="none";
     NEW_IMGR2.style.display="none";
     NEW_IMGR3.style.display="none";
     R1.style.display="none";
     R2.style.display="none";
     R3.style.display="none";
    
     if (src=="7694-112F.jpg" ) {      
        notaCorbella.style.display="inline-block";
        nota_Corbella.style.display="inline-block"; 
    
        container_fronte.appendChild(NEW_IMG);
        NEW_IMG.style.display="inline-block";
        NEW_IMG.style.transform= "rotate(0deg)";
        
        EditoreDisegno.style.display="none";
        PubPlaceDisegno.style.display="none";

        TEXT3t.style.display="none";
        TEXT2t.style.display="none"; 
        TEXT1t.style.display="none";          
        TEXT1.style.display="none"; 
        
        bottoneruota.setAttribute("onclick", "Ruota(NEW_IMG);");

      } else if (src == "7694-176F.jpg") {        
                 
         container_fronte.appendChild(NEW_IMG2);
         NEW_IMG2.style.display="inline-block";
         NEW_IMG2.style.transform= "rotate(0deg)";
         
         container_testo.appendChild(EditoreDisegno);
         EditoreDisegno.style.display="inline-block";
         container_testo.appendChild(PubPlaceDisegno);
         PubPlaceDisegno.style.display="inline-block";
          
         TEXT2.style.display="none";    
         TEXT3t.style.display="none";
         TEXT2t.style.display="none"; 
         TEXT1t.style.display="none";
         
         nota_facsimile_seconda_cartolina.style.display="block";
         bottoneruota.setAttribute("onclick", "Ruota(NEW_IMG2);");
         return;
      } else if (src == "7694-122F.jpg") {       
         notaFacsTerzaCartolina.style.display="inline-block";
      
         container_fronte.appendChild(NEW_IMG3);
         NEW_IMG3.style.display="inline-block"
         TEXT3.style.display="none";   
         TEXT3t.style.display="none";
         TEXT2t.style.display="none"; 
         TEXT1t.style.display="none";
        
         bottoneruota.setAttribute("onclick", "Ruota(NEW_IMG3);");
         return;
       }
 }
 
 
//funzione che gestisce la rotazione delle immagini FRONTE o RETRO
 var num=0;
 function Ruota(nodo1) {
    try {    

     num= num + 90;     
     var  n=new String(num);    
     var  string1=new String("rotate");
     var  string2 ="(" + n +"deg)";
    
     nodo1.style.transform=string1 + string2;
    }
        
    catch(e){
        alert ("Ruota "+ e);
    }
}
/* funzione che gestisce le aree cliccabili del retro della cartolina */

function GestoreArea(){
   
   switch (this.id) {
      case 'lineac1_1':
        area1.style.backgroundColor="#ffe6e6";
        area2.style.backgroundColor="white";
        area3.style.backgroundColor="white";
        area4.style.backgroundColor="white";
        area14.style.backgroundColor="white"; 
        break;
      case 'lineac1_2':
        area4.style.backgroundColor="#ffe6e6";  
        area2.style.backgroundColor="white";
        area3.style.backgroundColor="white";
        area1.style.backgroundColor="white";
        area14.style.backgroundColor="white"; 
        break;
      case 'lineac1_3':
        area3.style.backgroundColor="ffe6e6";  
        area2.style.backgroundColor="white";
        area1.style.backgroundColor="white";
        area4.style.backgroundColor="white";
        area14.style.backgroundColor="white"; 
        break;
      case 'lineac1_4':
        area2.style.backgroundColor="#ffe6e6"; 
        area1.style.backgroundColor="white";
        area3.style.backgroundColor="white";
        area4.style.backgroundColor="white";
        area14.style.backgroundColor="white"; 
        break;
      case 'lineac1_5':
        area14.style.backgroundColor="#ffe6e6"; 
        area2.style.backgroundColor="white"; 
        area1.style.backgroundColor="white";
        area3.style.backgroundColor="white";
        area4.style.backgroundColor="white";
        break;  
      
      case 'lineac2_1':
        area5.style.backgroundColor="#ffe6e6"; 
        area6.style.backgroundColor="white";
        area7.style.backgroundColor="white";
        area8.style.backgroundColor="white";
        area15.style.backgroundColor="white";
        break;
      case 'lineac2_2':
        area6.style.backgroundColor="#ffe6e6"; 
        area5.style.backgroundColor="white";
        area7.style.backgroundColor="white";
        area8.style.backgroundColor="white";
        area15.style.backgroundColor="white";
        break;
      case 'lineac2_3':
        area8.style.backgroundColor="#ffe6e6";
        area5.style.backgroundColor="white";
        area6.style.backgroundColor="white";
        area7.style.backgroundColor="white";
        area15.style.backgroundColor="white";
        break;
      case 'lineac2_4':
        area7.style.backgroundColor="#ffe6e6";
        area5.style.backgroundColor="white";
        area6.style.backgroundColor="white";
        area8.style.backgroundColor="white"; 
        area15.style.backgroundColor="white";
        break;
      
      case 'lineac2_5':
       area15.style.backgroundColor="#ffe6e6";
       area7.style.backgroundColor="white";
       area5.style.backgroundColor="white";
       area6.style.backgroundColor="white";
       area8.style.backgroundColor="white";    
       break;
        
      case 'lineac3_1':
        area9.style.backgroundColor="#ffe6e6";  
        area10.style.backgroundColor="white";
        area11.style.backgroundColor="white";
        area12.style.backgroundColor="white";
        area13.style.backgroundColor="white";
        break;
      case 'lineac3_2':
        area11.style.backgroundColor="#ffe6e6";
        area13.style.backgroundColor="white";
        area10.style.backgroundColor="white";
        area9.style.backgroundColor="white";
        area12.style.backgroundColor="white";
        break;
      case 'lineac3_3':
        area12.style.backgroundColor="#ffe6e6";  
        area11.style.backgroundColor="white";
        area10.style.backgroundColor="white";
        area9.style.backgroundColor="white";
       area13.style.backgroundColor="white";
        break;
      case 'lineac3_4':
        area10.style.backgroundColor="#ffe6e6";  
        area11.style.backgroundColor="white";
        area9.style.backgroundColor="white";
        area12.style.backgroundColor="white";
      area13.style.backgroundColor="white";
        break;
        
      case 'lineac3_5':
        area10.style.backgroundColor="white";  
        area11.style.backgroundColor="white";
        area9.style.backgroundColor="white";
        area12.style.backgroundColor="white";
        area13.style.backgroundColor="#ffe6e6";
        break;
   }}


 
//immagini cliccabili della sezione 1
  var imgClick1;
  var imgClick2;
  var imgClick3;
  
  var src;
   
//nuovi elementi img da inserire nella seconda sezione 
  var NEW_IMG;
  var NEW_IMG2;
  var NEW_IMG3;
  
  var NEW_IMGR;
  var NEW_IMGR2;
  var NEW_IMGR3;
  
//testi delle sezioni
  var TEXT1;
  var TEXT2;
  var TEXT3;
  
  var TEXT1t;
  var TEXT2t;
  var TEXT3t;
  
  
  var section2;
  var sectione3;
  

  var bottonefronte;
  var bottoneretro;
  
  var container_fronte;
  var container_testo;
 
  var bottoneruota;
  
  var linkAbout;
  var buttonAbout;
  
/* descrizioni del fronte */
  var EditoreDisegno;
  var PubPlaceDisegno;
  var notaCorbella;
  var notaFacsTerzaCartolina;
  var nota_Corbella;
  var nota_facsimile_seconda_cartolina;
 
/* zone cliccabili dell'immagine del retro */
  var lineac1_1;
  var lineac1_2;
  var lineac1_3;
  var lineac1_4;
  var lineac2_1;
  var lineac2_2;
  var lineac2_3;
  var lineac2_4;
  var lineac3_1;
  var lineac3_2;
  var lineac3_3;
  var lineac3_4;
  var lineac3_5;
  var lineac1_5;
  var lineac2_5;
  
 /* aree del testo corrispondenti alle zone cliccabili */ 
  var area1;
  var area2;
  var area3;
  var area4;
  var area5;
  var area6;
  var area7;
  var area8;
  var area9;
  var area10;
  var area11;
  var area12;
  var area13;
  var area14;
  var area15;

  var R1;
  var R2;
  var R3;
  
  var container;
  var divC2;
  var divC3;
  

function gestoreLoad() {
  try {
  
    //collego gli elementi js con quelli del file html
    divC2=document.getElementById("cartolina_2");  
    divC3=document.getElementById("cartolina_3");  
    container=document.getElementById("container");  
    notaCorbella=document.getElementById("corbella");
    notaFacsTerzaCartolina=document.getElementById("nota_facsimile_terza_cartolina");
    nota_facsimile_seconda_cartolina=document.getElementById("nota_facsimile_seconda_cartolina");
    nota_Corbella=document.getElementById("nota_Corbella");
    EditoreDisegno=document.getElementById("EditoreDisegno");
    PubPlaceDisegno=document.getElementById("PubPlaceDisegno");
   
    container_fronte=document.getElementById("container_cartolina");    
    container_testo=document.getElementById("container_testo");
    bottoneruota=document.getElementById("bottoneruota");
    
    //immagini FRONTE del facsimile
    NEW_IMG= document.getElementById("imgfronte_1");
    NEW_IMG2 = document.getElementById("imgfronte_2");
    NEW_IMG3= document.getElementById("imgfronte_3");
    
    //immagini RETRO
    R1= document.getElementById("R1");
    R2 = document.getElementById("R2");
    R3= document.getElementById("R3");
    
    //immagini facsimile del  RETRO (imgs con mappa)
    NEW_IMGR= document.getElementById("imgretro_1");
    NEW_IMGR2 = document.getElementById("imgretro_2");
    NEW_IMGR3= document.getElementById("imgretro_3");
   
    /* testi */ 
    TEXT1= document.getElementById("cartolinaheader_1");
    TEXT2= document.getElementById("cartolinaheader_2");
    TEXT3= document.getElementById("cartolinaheader_3");
   
    TEXT1t= document.getElementById("cartolina_1");
    TEXT2t= document.getElementById("cartolina_2");
    TEXT3t= document.getElementById("cartolina_3");
   
    section2=document.getElementById("section_2");
    section3=document.getElementById("section_3"); 
   
    
    imgClick1=document.getElementById("img1");
    imgClick2=document.getElementById("img2");
    imgClick3=document.getElementById("img3");
    
    linkAbout=document.getElementById("linkAbout");
    buttonAbout=document.getElementById("buttonAbout");
    
    bottonefronte=document.getElementById("bottonefronte"); 
    bottoneretro=document.getElementById("bottoneretro");
    
    imgretro_1=document.getElementById("imgretro_1"); 
    imgretro_2=document.getElementById("imgretro_2"); 
    imgretro_3=document.getElementById("imgretro_3");
    imgfronte_1=document.getElementById("imgfronte_1");
    imgfronte_2=document.getElementById("imgfronte_2");
    imgfronte_3=document.getElementById("imgfronte_3");

    /* zone cliccabili */
    lineac1_1=document.getElementById("lineac1_1");
    lineac1_2=document.getElementById("lineac1_2");
    lineac1_3=document.getElementById("lineac1_3");
    lineac1_4=document.getElementById("lineac1_4");
    lineac2_1=document.getElementById("lineac2_1"); /* data */
    lineac2_2=document.getElementById("lineac2_2"); /* testo */
    lineac2_3=document.getElementById("lineac2_3");/* scritta in alto */
    lineac2_4=document.getElementById("lineac2_4"); /* scritta verticale */
    lineac3_1=document.getElementById("lineac3_1");
    lineac3_2=document.getElementById("lineac3_2");
    lineac3_3=document.getElementById("lineac3_3");
    lineac3_4=document.getElementById("lineac3_4");
    lineac3_5=document.getElementById("lineac3_5");
    lineac1_5=document.getElementById("lineac1_5");
    lineac2_5=document.getElementById("lineac2_5");
    
    area1=document.getElementById("destination1"); /* francobollo prima cartolina */
    area2=document.getElementById("scritte_stampate_8"); /* scritte stampate prima cart */
    area3=document.getElementById("testoresto_1");/* testo prima cartolina */
    area4=document.getElementById("address_1"); /* address prima cartolina */
    area5=document.getElementById("secopen"); /* seconda cartolina data */
    area6=document.getElementById("testoresto_2");  /*testo seconda cart */ 
    area7=document.getElementById("scritte_stampate_14"); /* scritte verticali seconda cart */ 
    area8=document.getElementById("scrittastampata2"); /* scritta in alto a sinistra seconda cart */
    area9=document.getElementById("destination3"); /*  terza cartolina francobollo */ 
    area10=document.getElementById("scritte_stampate_10"); /*  scritte stampate terza cart */     
    area11=document.getElementById("address_3"); /* address terza cartolina */     
    area12=document.getElementById("testoresto_3"); /* testo terza cartolina */
    area13=document.getElementById("Archivio3"); 
    area14=document.getElementById("Archivio1"); 
    area15=document.getElementById("Archivio2"); 
      
    //eventi onclick
    buttonAbout.onclick=About;
    
    imgClick1.onclick=image;
    imgClick2.onclick=image;
    imgClick3.onclick=image;
   
    bottonefronte.onclick=Avanti;
    bottoneretro.onclick=Retro;
    
    lineac1_1.onclick=GestoreArea;
    lineac1_2.onclick=GestoreArea;
    lineac1_3.onclick=GestoreArea;
    lineac1_4.onclick=GestoreArea;
    lineac2_1.onclick=GestoreArea;
    lineac2_2.onclick=GestoreArea;
    lineac2_3.onclick=GestoreArea;
    lineac2_4.onclick=GestoreArea;
    lineac3_1.onclick=GestoreArea;
    lineac3_2.onclick=GestoreArea;
    lineac3_3.onclick=GestoreArea;
    lineac3_4.onclick=GestoreArea;
    lineac3_5.onclick=GestoreArea;
    lineac1_5.onclick=GestoreArea;
    lineac2_5.onclick=GestoreArea;
     
  } 
  catch(e) {
    alert("gestoreLoad: "+e);
  }
} 
window.onload=gestoreLoad;
