function toggleMode() {
    const html = document.documentElement

    // Abaixo tem duas formas de fazer a mesma coisa a primeira é usando verdadeiro ou falso
    // // if(html.classList.contains('light')) {
    //    html.classList.remove('light' )
    //    } else {
    //     html.classList.add('light')
    //    }

    // e essa é mais simples e completa que a outra
     
html.classList.toggle('light')
   }






