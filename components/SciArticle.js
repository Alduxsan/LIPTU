class SciArticles_container extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleEvent(event) {
    console.log(event);
    if (event.type === "click") this.display_more();
  }

  display_more() {
    let btnMore = this.shadowRoot.getElementById("togglerMore");
    let btnLess = this.shadowRoot.getElementById("toggleLess");

    this.shadowRoot.getElementById("sciList").classList.toggle("expanded");
    btnMore.classList.toggle("hide");
    btnLess.classList.toggle("hide");

    if (btnLess.classList.contains("hide")) {
      document.getElementById("articles").scrollIntoView(true);
    }
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  connectedCallback() {
    this.render();
    this.btn = this.shadowRoot.getElementById("btn");
    this.btn.addEventListener("click", this);
  }

  render() {
    this.shadowRoot.innerHTML = `
    <div class="sciWrapper">
      <div class="sciArticles_container" id="sciList">
        <slot></slot>
      </div>
      <div id="btn" class="toggler_button" type="button">
        <p class="ToggleBtn" id="togglerMore">más artículos</p>
        <p class="ToggleBtn hide" id="toggleLess">cerrar lista</p>
      </div>
    </div>

    <style>

    .hide{
      display: none;
    }

    .sciWrapper{
      width: 100%;
      margin: auto;
    }

    .sciArticles_container {
      font-family: quicksand, sans-serif;
      margin: auto;
    }

    .expanded {
      animation: expand 1s;
      animation-fill-mode: forwards;
    }
    
    .toggler_button {
      width: fit-content;
      margin: auto;
      margin-top: 20px;
    }
    
    .ToggleBtn {
      text-align: center;
      border-radius: 4px;
      cursor: pointer;
      padding: 10px;
      background-color: rgba(255, 255, 255, 0.644);
      transition: all 0.2s;
      box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.604);
    }
    
    .ToggleBtn:hover {
      box-shadow: 8px 8px 2px rgba(0, 0, 0, 0.304);
    }




    @keyframes expand {
      0%{
        height: 400px
      }
      50%{
        height: 600px
      }
      100% {
        height:auto;
      }
    }
    </style>
    `;
  }
}

customElements.define("sciarticles-container", SciArticles_container);

class SciArticle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  getAtt(attr) {
    let attribute = (this.attribute = this.getAttribute(attr) ?? "");
    return attribute;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    let artLink = this.getAtt("artLink");
    let artTitle = this.getAtt("artTitle");
    let artAbstract = this.getAtt("artAbstract");
    let artAuthors = this.getAtt("artAuthors");
    let editorial = this.getAtt("editorial");

    this.shadowRoot.innerHTML = `
    <article>
            <div class="art_head_container">
                <h3 id="ArtTitle">${artTitle.toUpperCase()}</h3>
                <div id="author_editorial_info">
                  <p id="authors">${artAuthors.toUpperCase()}</p>
                  <p id="editorial">${editorial}<p>                    
                </div>
            </div>
            <div id="abstract-container"
                <p id="abstract">ABSTRACT</p>
                <p class="artAbastract">${artAbstract}</p>
            <a class="artLink" target="_blank" rel="noopener" href="${artLink}"> 
            <p>Link al artículo</p> <div class="iconContainer"><img src="media/icons/arrow.png"></div></a>
            </div>

            <p class="separator"></p>
    </article>
    
    <style>
    
      article{
        font-family: quicksand, sans-serif;
        margin: auto;
        padding: 2em;
        transition: all 0.5s
      }

      article:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }

      .art_head_container{
        display:flex;
        flex-direction: column;
        width: 100%;
      }

      #ArtTitle{
        font-family: "quicksand";
        width: 80%;
      }

      #author_editorial_info{
        display: flex;
        flex-direction: row;
        align-items: baseline;
      }

      #authors{
        margin-right: 1em;
        font-weight: 600
      }

      #abstract-container{
        display: none;
      }

      .artAbastract{
        column-count: 2;
        text-align: justify;
        text-justify: distribute;
        hyphens: auto;
      }

      .artLink{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: white;
        margin-bottom: 1em;
        transition: all 0.5s;
      }

      .iconContainer img{
        width: 40px;
        margin-left: 10px;
      }

      .artLink:hover{
        color: white;
        filter: invert()  
      }

      .separator{
        width: 70%;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        margin: auto;
      }
      @media screen and (max-width: 1100px) {
        summary {
        }

        details summary { 
          display: block;
        }
        
        .art_head_container{
          display: block;
        }
        
        .artAbastract{
          column-count: 1;
        }

        #ArtTitle{
          border: none;
          padding: 0%
        }
      }
    </style>
    `;
  }
}

customElements.define("sci-article", SciArticle);
