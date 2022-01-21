const Navbar_css = `
:host{
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")
@import url("https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap");

body {
margin: 0;
font-family: Arial, Helvetica, sans-serif;
}

.topnav {
background-color: rgba(56, 20, 0);
width: 100%;
height: 130px;
color: rgb(0, 0, 0);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 2.6rem;
font-weight: bold;
font-family: "Cabin Sketch", cursive;
}

.sticky{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.link_container{
display: flex;
height: 100%;
justify-content: center;
align-items: center;
margin: 20px;

}
.link_container a {
text-decoration: none;
color: rgb(231, 231, 231);
transition: 0.3s all;
display: flex;
list-style: none;
text-shadow: 1.5px 1.5px 1px rgb(0, 0, 0);
padding: 8px;
}

.link_container :hover {
background-color: rgb(41, 14, 0);
transition: 1.0s all;
display: flex;
height: 100%;
justify-content: center;
align-items: center;
border-radius: 6px;
 }

.active {
display:none;
 }



@media screen and (max-width: 1100px) {
.topnav {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height:auto;
}

.topnav.responsive a {
  float: none;
  display: block;
  text-align: left;
  align-items: center;
  text-align: center;
}
}
`;
const Profiles_css = `
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@200;700&display=swap');

.profile_card{
  display: flex;
  justify-content: center;
  width: 80%;
  margin: auto;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px dotted rgba(56, 20, 0, 0.856);
  }

.imgNameContainer{
  width: 300px;
}

.nameContainer{
  display: flex;
  font-size: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.nameContainer p{
  font-weight: bolder;
  color:rgb(0, 0, 0);
  font-weight: bold;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-align: center;
}

.imgContainer{
  margin: auto;
  width: 80%;
  text-align: center;
  justify-content: center;
  height: fit-content;
}
.imgContainer img{
  width: 100%;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 1px 2px 3px black;
}

.bioContainer{
  justify-content: center;
  text-align: justify;
  width: 90%;
  margin-left: 1%;
  font-family: 'M PLUS Rounded 1c', sans-serif;
  line-height: 2;

}
.bioContainer a{
  text-decoration: none;
  color: rgb(255, 255, 255);
  cursor: pointer;
}

@media screen and (max-width: 1100px) {
  .profile_card{
    display: block;
  }
  .imgContainer{
    width: fit-content;
    margin: auto;
    text-align: center;
    justify-content: center;
    height: fit-content;
    margin-bottom: 10px;
  }

  }
`;

const SubContent_css = `
.subsection{
  font-family: 'M PLUS Rounded 1c', sans-serif;
  justify-content: center;
  margin: auto;
  text-align: justify;
}

.subsection_title{
  font-size: 2rem;
  text-align: center;
  color: rgb(255, 255, 255);
  text-shadow: 1px 1px 1px rgb(0, 0, 0);
  margin-top: 2%
}

.subsection_content::first-letter{
    font-size:3em;
    line-height: 1;
  }

.subsection_content{
  margin-top: 10px;
  font-size: 1.2rem;
  column-count: 2;
  column-rule:1px dotted silver ;
  column-gap:2rem;
  line-height: 2;
}
`

const Artifact3D_css = `
.sketchfab-embed-wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
}

iframe{
  border-radius: 6px;
  width: 80%;
  margin: auto;
  margin-bottom: 15px;
  
}

.artifactTitle{
  justify-content: center;
  align-self: center;
  font-size: 13px; 
  font-weight: normal; 
  margin: 5px; 
  color: #000000;
}

.artifactTitle a{
  font-weight: bold; 
  color: #000000; 
  font-family: 'M PLUS Rounded 1c', sans-serif;
  text-decoration: none;
  text-align: center;
  font-size: 2rem;
}

.sketchfab-embed-wrapper{
  text-align: center;
}

.textFooter{
  font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;
}
.textFooter a{
  font-weight: bold; color: #000000; 
}
`



export { Navbar_css, Profiles_css, SubContent_css, Artifact3D_css };
