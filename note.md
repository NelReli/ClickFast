**dans le terminal**
--------------------
```
mkdir test-unitaires
cd test-unitaires
touch ibndex.html style.css ....
ls
git init
code .

on cree un repo sur git et on les lie

git remote -v (pour voir si git est connecte avec notre projet)
git remote add origin -----lien-----
...

exemple commande git :
git status "pour voir les commits"
git log "liste des commits fait"
git branch "pour voir les branches"
git checkout -b main "creer une nouvelle branche"
```


**fichier index.html**
-----------------------
```html
<h1> la gourde </h1>
<p> la gourde est une marque</p>
<p> panier : <span id="cart-count">0</span></p>
<button onClick="incrementCart()" id="buy"> cliquez-moi</button>
```

**fichier script.js**
----------------------
```js
function incrementCart(){
    const cartCount = document.getElementById("cart-count");
    const count = Number(cartCount.textContent) + 1;
    // const count = Number(cartCount.textContent || 0) + 1;
    cartCount.textContent = count;
}
module.exports = { incrementCart };
```


**script.test.js**
------------------
```js
const {incrementCart} = require("./script.js")

describe("incrementCart works", () => {
    beforeEach( () =>{
        document.body.innerHTML = '<span id="cart-count">0</span>
    });

    test("increments cart's counter", ()=>{
        const cartCount = document.getElementById("cart-count");
        expect(cartCount.textContent).toBe("0");

        incrementCart();

        expect(cartCount.textContent).toBe("1");
    });

    test("increments cart counter from existing value", ()=>{
        const cartCount = document.getElementById("cart-count");
        cartCount.textContent= "5";

        incrementCart();

        expect(cartCount.textContent).toBe("6");
    });

});

```


