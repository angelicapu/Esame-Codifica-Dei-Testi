<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
    xmlns:tei="http://www.tei-c.org/ns/1.0" 
    xmlns="http://www.w3.org/1999/xhtml" >
    
<xsl:output method="html" indent="yes"/>
    
<xsl:template match="/">
  <html>
    <head>
      <link rel="stylesheet" type="text/css" href="style.css" media="screen" />  
      <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet"/>       
      <link href="https://fonts.googleapis.com/css?family=Barlow+Semi+Condensed" rel="stylesheet"/> 
      <script src="new.js"> </script>
      <meta charset="UTF-8"/>
        <title>
          <xsl:value-of select="//tei:title[@type='main']"/>
        </title>
    </head>

    <body>
      <section id="section_1">
          <h1> Corrispondenze </h1>
        
        <a id="linkAbout" >
          <input type="button" id="buttonAbout" value="About" />
        </a>   
        
        <div class="intro"> 
          <strong class="bold">Il progetto </strong> riguarda la realizzazione dell'Edizione digitale di  
          <xsl:value-of select="//tei:teiHeader[@xml:id='comune']//tei:bibl/tei:interp"/>
          <br />
         <strong>I Legami. </strong> <xsl:value-of select="//tei:teiHeader[@xml:id='comune']//tei:listRelation"/>
          <br />
         <strong class="bold"> Le fonti </strong>sono conservate al  <xsl:value-of select="//tei:teiHeader[@xml:id='comune']//tei:repository"/>
          presso <xsl:value-of select="//tei:teiHeader[@xml:id='comune']//tei:settlement"/>
          <br />
   
        </div>
        
    

        
          <div id="blocchi">
            <div class="container">
              <a href="#section_2">
                  <input class = "overlay" type="image" name="click" src="7694-112F.jpg" alt="img1" id="img1"></input>
                <div class="centered">DONNA SDRAIATA CON MAZZO DI ROSE </div>
              </a>
            </div>
            <div class="container">
              <a href="#section_2">
                 <input class = "overlay" type="image"  name="click" src="7694-176F.jpg" alt="img2" id="img2"></input>
                <div class="centered">BACI MATTUTINI</div>
              </a>
            </div>
            <div class="container">
              <a href="#section_2">
                  <input class = "overlay" type="image"  name="click" src="7694-122F.jpg" alt="img2" id="img3"></input>
                <div class="centered"> DONNA CHE SORRIDE TRA I FIORI</div>
              </a>
            </div>
          </div>
        
      </section>
      <section id="section_2">
      <br />
          <div id="container">
            <header id="headContainer">              
              <a href="#section_1" >
                <input type="button" id="cambiacartolina" value="Cambia Cartolina" />
              </a>   
              

              <input type="button" value="Fronte" id="bottonefronte" />
              <input type="button"  value="Retro" id="bottoneretro" /> 
             
             
              <input type="button"  value="Ruota" id="bottoneruota"/> 
            
  
             
            </header>

            <div id="container_cartolina" class="edizioneDigitale">
              <!--immagini retro non cliccabili -->
              <img id="R1" src="7694-112R.jpg"> </img>
              <img id="R2" src="7694-176R.jpg"> </img>
              <img id="R3" src="7694-122R.jpg"> </img>
              
              
              <xsl:apply-templates select="//tei:facsimile"/> <!--riferimento all'immagine del fronte-->
              <xsl:apply-templates select="//tei:facsimile/tei:surface[@type='rr']/tei:graphic"/> <!-- riferimento all'immagine click retro-->
                
          
      
            </div>

      


      <div id="container_testo" class="edizioneDigitale">
        <!--descrizioni immagini fronte-->
        <p id="corbella"> &#9658; <xsl:value-of select="//tei:div[@xml:id='fronte_prima_cartolina']//tei:desc"/>       </p>
        <p id="nota_Corbella"> &#9658; <xsl:value-of select="//tei:facsimile/tei:surface/tei:note[@type='nota_Corbella']"/>  </p>  
        <p id="nota_facsimile_terza_cartolina"> &#9658; <xsl:value-of select="//tei:div[@xml:id='fronte_terza_cartolina']//tei:desc"/>  </p>      
        <p id="nota_facsimile_seconda_cartolina"> &#9658; <xsl:value-of select="//tei:div[@xml:id='fronte_seconda_cartolina']//tei:desc"/>  </p>      
          
        <xsl:apply-templates select="//tei:TEI/tei:text/tei:body/tei:div[@type='rt']"/> 
        <xsl:apply-templates select="//tei:TEI/tei:teiHeader"/>    
        
            </div>
          </div>
      </section>
      
      <section id="section_3">
       <div id="about">
         <h1> About </h1>
       <xsl:value-of select="//tei:teiHeader[@xml:id='comune']//tei:projectDesc"/> <br />        
       
       <h2> Fonti</h2>
         <xsl:apply-templates select="//tei:handDesc/tei:handNote/tei:interp"/> 
       
       <h2> Responsabili </h2>
         <xsl:apply-templates select="//tei:respStmt"/> 
       
       <h2> Organizzazioni e Permessi</h2>
      
         <strong> Quando:</strong> A partire dal <xsl:value-of select="//tei:teiHeader[@xml:id='comune']/tei:fileDesc/tei:publicationStmt/tei:date"/>  <br />
         <strong> Come: </strong>  <xsl:value-of select="//tei:availability"/>  concessa dal <xsl:value-of select="//tei:teiHeader[@xml:id='comune']//tei:addrLine"/> <br/> <br/> 
       </div>
      </section>
    </body>
  </html>
</xsl:template>
  
<xsl:template match="//tei:interp">
   <xsl:value-of select="."/> <br/>
</xsl:template>

<xsl:template match="//tei:respStmt">
  <xsl:apply-templates/>  <br />
</xsl:template>

<xsl:template match="//tei:resp">
    <strong> <xsl:value-of select="."/> </strong>
</xsl:template>
  
<xsl:template match="//tei:div[@type='rt']">
  <xsl:variable name="index" select="position()"/>
  <xsl:element name="div" >
    <xsl:attribute name="id">
        <xsl:value-of select="concat('cartolina_' , $index) "/>
    </xsl:attribute>      
    <h4>Clicca sull'immagine e scopri il testo corrispondente!</h4>
    <xsl:apply-templates/>
  </xsl:element>
</xsl:template>
  
  
<xsl:template match="//tei:TEI/tei:teiHeader">
    <xsl:variable name="indexH" select="position()"/>
    <xsl:element name="div" >
      <xsl:attribute name="id">
        <xsl:value-of select="concat('cartolinaheader_' , $indexH) "/>
      </xsl:attribute>      
      <xsl:apply-templates/>  
    </xsl:element>
</xsl:template>
    
<xsl:template match="//tei:title[@type='main']" >
      <p id="main">Titolo progetto: <xsl:value-of select="."/> <br /> </p> 
</xsl:template>
    
<xsl:template match="//tei:title[@type='sub']" >
     <h2> <xsl:value-of select="."/> </h2>
</xsl:template>
    
<xsl:template match="//tei:publicationStmt">
      <p id="org">Organizzazione responsabile del progetto:<xsl:value-of select="."/> </p> 
</xsl:template>
    
<xsl:template match="//tei:notesStmt">
      <h3> &#9658; Note </h3>  
      <div id="notes"> <xsl:apply-templates/> </div>
</xsl:template>
    
<xsl:template match="//tei:notesStmt/tei:note">    
    <xsl:variable name="index" select="position()"/>
      <xsl:element name="p">
        <xsl:attribute name="id">
          <xsl:value-of select="concat('note_' , $index)"/>
        </xsl:attribute>    
        <strong>   Nota <xsl:value-of select="@n"/>:</strong> <xsl:value-of select="."/> <br />    
      </xsl:element>
</xsl:template>
    
<xsl:template match="//tei:sourceDesc">
  <div id="scheda_bibliografica">
    <h3> &#9658; Informazioni relative alla fonte</h3>
    <xsl:apply-templates/> <br />
   </div>
</xsl:template>
    
<xsl:template match="//tei:title[@type='custom']">
    <p id="p1"> Descrizione FRONTE cartolina: <xsl:value-of select="."/> </p>
</xsl:template>
    
<xsl:template match="//tei:bibl/tei:author">
    <p id="p2"> <strong>Autore della fonte:</strong> <xsl:value-of select="."/> </p> 
</xsl:template>
    
<xsl:template match="//tei:bibl/tei:date">
   <p id="p3"> <strong> Data di sovrascrittura della fonte: </strong> <xsl:value-of select="."/> </p>
</xsl:template>
    
<xsl:template match="//tei:bibl/tei:publisher/tei:orgName">   
   <p id="p5" > <strong>Editore:</strong> <xsl:value-of select="."/>  </p>
</xsl:template>
    
<xsl:template match="//tei:bibl/tei:pubPlace[@n='00']">
      <p id="p4"> <strong> Luogo di pubblicazione della fonte:</strong> <xsl:value-of select="."/> </p>
</xsl:template>
    
    
<xsl:template match="//tei:bibl/tei:publisher[@n='primoed']">
  <p id="EditoreDisegno">  &#9658; <strong> Editore pittura cartolina: </strong> <xsl:value-of select="."/> </p> 
</xsl:template>
    
<xsl:template match="//tei:bibl/tei:pubPlace[@xml:id='Paris']">
      <p id="PubPlaceDisegno"> 
        &#9658; <strong> Luogo di pubblicazione pittura cartolina: </strong> <xsl:value-of select="."/>
      </p>
</xsl:template>
    
<xsl:template match="//tei:sourceDesc/tei:msDesc/tei:msIdentifier">
      <p id="p6"><strong> Codice identificativo cartolina: </strong> <xsl:value-of select="."/> </p>
</xsl:template>
    
<xsl:template match="//tei:msContents" >
     <p id="msContents"> <strong> Descrizione Oggetto:  </strong>  <xsl:value-of select="//tei:msContents/tei:summary"/>
       scritta da <xsl:value-of select="//tei:bibl/tei:author"/> in <xsl:value-of select="//tei:msContents/tei:textLang"/> </p>
</xsl:template>
    
<xsl:template match="//tei:supportDesc">
      <xsl:apply-templates/>
</xsl:template>
    
<xsl:template match="//tei:support">
      <ul  id="Timbro_Francobollo"> <strong>Sulla cartolina sono stati applicati:</strong>
        <li> <xsl:value-of select="//tei:support/tei:stamp[@type='postage']"/>  </li>
        <li> <xsl:value-of select="//tei:support/tei:stamp[@type='postmark']"/> </li>
      </ul>
</xsl:template>
    
    
<xsl:template match="//tei:condition">
      <p id="StatoConservazione">
        <strong> Stato di conservazione: </strong> <xsl:value-of select="//tei:supportDesc/tei:condition"/> <br/>
      </p>
</xsl:template>
    
<xsl:template match="//tei:sourceDesc/tei:listPerson">
   <table id="persons_involved"> 
         <strong> Persone coinvolte: </strong>
       <ul>
         Nome    -    Cognome    - Sesso   - Educazione/Professione
        <xsl:apply-templates/> 
       </ul>
   </table>
</xsl:template>
    
<xsl:template match="//tei:listPerson/tei:person">
      <li>  <xsl:apply-templates/>  </li>  
</xsl:template>
    
<xsl:template match="//tei:person/tei:persName">
     <xsl:value-of select="."/> -
  
</xsl:template>
    
<xsl:template match="//tei:person/tei:sex">
      <xsl:value-of select="."/>  -
</xsl:template>
   
    
<xsl:template match="//tei:person/tei:education">
      <xsl:value-of select="."/>  
</xsl:template>
    
    
<xsl:template match="//tei:person/tei:nationality">
     Nazionalità  <xsl:value-of select="."/>  -
</xsl:template>

<xsl:template match="//tei:person/tei:occupation">
      <xsl:value-of select="."/>  
</xsl:template>
    
 <xsl:template match="//tei:listOrg">

   <ul id="organization_involved"> 
     <h3> &#9658; Organizzazioni: </h3>
    <xsl:apply-templates/>
   </ul> 
</xsl:template>
    
<xsl:template match="//tei:org">
      <li>   
        <xsl:value-of select="."/> 
      </li>
</xsl:template>
    

<xsl:template match="//tei:sourceDesc/tei:listPlace">    
      <ul id="cities_involved">    
      <xsl:apply-templates/>       
    </ul>
</xsl:template>
    
<xsl:template match="//tei:place">
    <li>
      <xsl:apply-templates /> 
    </li> 
</xsl:template>
    
<xsl:template match="//tei:district[@type='comune']">
      <xsl:value-of select="."/>
</xsl:template>
    
    
<xsl:template match="//tei:profileDesc"> 
   <ul id="AttoCorrispondenza">
         <h3 id="AttCorr"> &#9658; Atto di corrispondenza </h3> 
     <li>  cartolina spedita da <xsl:value-of select="//tei:correspAction[@type='sent']/tei:placeName" /> </li>
     <li>  cartolina arrivata a <xsl:value-of select="//tei:correspAction[@type='received']/tei:placeName" /> </li>
   </ul>
</xsl:template>


<xsl:template match="//tei:encodingDesc">
  <h3> &#9658; Interpretazioni Editoriali</h3>
  <ul id="EditorialInterpretation"> 
      <xsl:apply-templates/>
  </ul>
</xsl:template>
    
  <xsl:template match="//tei:interpretation/tei:p/tei:list/tei:item | //tei:hyphenation">
      <li>  <xsl:value-of select="."/> </li>
</xsl:template>
  
<xsl:template match="//tei:lb">
      <br/> <xsl:apply-templates/> 
</xsl:template>
  
<xsl:template match="//tei:div[@type='opener']">
         <p><xsl:apply-templates/></p>
</xsl:template>
    
<xsl:template match="//tei:address">    
      <div>
        <xsl:attribute name="id">
          <xsl:value-of select="@xml:id"/>
        </xsl:attribute>
        <p>
          <xsl:apply-templates />
        </p>      
      </div>
</xsl:template>
    
<xsl:template match="//tei:addrLine">
     <p> <xsl:apply-templates/> </p>
</xsl:template>
    
<xsl:template match="//tei:dateline">
      <p><xsl:apply-templates/></p>
</xsl:template>
    
<xsl:template match="//tei:facsimile">
   <xsl:variable name="indexF" select="position()"/>
   <xsl:for-each select="tei:surface[@type='ff']/tei:graphic"> 
     <xsl:element name="img">
       <xsl:attribute name="id">
          <xsl:value-of select="concat('imgfronte_' , $indexF) "/>
       </xsl:attribute> 
       <xsl:attribute name="src">
            <xsl:value-of select="current()/@url "/>
       </xsl:attribute>
          <xsl:apply-templates/>
    </xsl:element>
   </xsl:for-each>
</xsl:template>
 

<xsl:template match="//tei:surface[@type='rr']/tei:graphic">
    <xsl:variable name="index" select="position()"/>
    <xsl:element name="img">    
    <xsl:attribute name="usemap">
          <xsl:value-of select="concat('#map',$index)"/>
    </xsl:attribute>
    <xsl:attribute name="id">
          <xsl:value-of select="concat('imgretro_', $index)"/>
    </xsl:attribute> 
    <xsl:attribute name="src">
          <xsl:value-of select="current()/@url "/>
    </xsl:attribute>
    <xsl:element name="map">
          <xsl:attribute name="name">
            <xsl:value-of select="concat('map',$index)"/>
          </xsl:attribute>
          <xsl:if test="$index='1'"><xsl:apply-templates select="//tei:TEI[@xml:id='cartolina_1']/tei:facsimile/tei:surface[@type='rr']/tei:zone"/></xsl:if>
          <xsl:if test="$index='2'"><xsl:apply-templates select="//tei:TEI[@xml:id='cartolina_2']/tei:facsimile/tei:surface[@type='rr']/tei:zone"/></xsl:if>
          <xsl:if test="$index='3'"><xsl:apply-templates select="//tei:TEI[@xml:id='cartolina_3']/tei:facsimile/tei:surface[@type='rr']/tei:zone"/> </xsl:if>
   </xsl:element>
  </xsl:element>
</xsl:template>
    
<xsl:template match="//tei:zone">
  <xsl:element name="area">       
       <xsl:attribute name="id">
          <xsl:value-of select="@xml:id"/>       
       </xsl:attribute>
       <xsl:attribute name="shape">
          <xsl:value-of select="concat('rect','')"/>
      </xsl:attribute>
      <xsl:attribute name="coords">
          <xsl:value-of select="@ulx"/>,<xsl:value-of select="@uly"/>,<xsl:value-of select="@lrx"/>,<xsl:value-of select="@lry"/>
      </xsl:attribute>
      <xsl:attribute name="href">
          <xsl:value-of select="concat('#container_testo','')"/>
      </xsl:attribute>
  </xsl:element>
</xsl:template>
    
<xsl:template match="//*[@type='rtr']" >
    <xsl:element name="div">
    <xsl:attribute name="id"> 
      <xsl:value-of select="@xml:id"/>
    </xsl:attribute>
      <xsl:apply-templates/>
    </xsl:element>
</xsl:template>
  

</xsl:stylesheet>