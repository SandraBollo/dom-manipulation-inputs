document.querySelector("#reset-field-btn").addEventListener('click', function(){
      // TASK #1

      var evalucionElemnt = document.querySelector('.answer-box input') ///seleccionas el elemnto
       // console.log(entrada.value);
       if (evalucionElemnt.value !== '') {
         evalucionElemnt.value = ""
       }
  })


document.querySelector("#validate-field-btn").addEventListener('click',function(){
  // TASK #2

  var entrada = document.querySelector('#validate-field input')
   var evaluacion = entrada.value
   var mensaje = document.querySelector('.flash-message')
   console.log(mensaje);
   // console.log(value.length);
   if (evaluacion.length < 6) {
     mensaje.textContent = "Input not long enough"
     mensaje.className = 'flash-message '+'invalid'
   }else if (evaluacion.length >= 6) {
     mensaje.textContent = "Field valid"
     mensaje.className = 'flash-message '+'valid'
   }

})


document.querySelector("#calculate-items-btn").addEventListener('click', function(){
  // TASK #3


      var elements = [...document.querySelectorAll('#calculate-items input')]
      // console.log(elements);

      var totalCount = document.querySelector('.sum-total')
      // console.log(totalCount);

      var total = 0

      for(var i = 0; i < elements.length; i++){
        var currentElement = elements[i]
        // console.log(currentElement);
        // console.log(currentElement.checked);
        //
        if(currentElement.checked === true){
        total = total + parseInt(currentElement.value)

        }
      }
      // console.log(total);
      totalCount.innerHTML = total
})


document.querySelector("#select-to-show-more select").addEventListener('change',function(evt){
  // TASK #4

    var carsElementDom = document.querySelector('.selection')
      // console.log(carsElementDom.value)
      var index = carsElementDom.selectedIndex

     var imgInfo = document.querySelector('.img-box')
     var modelInfo = document.querySelector('.model');
     var msrpInfo = document.querySelector('.msrp');
     var mpgInfo = document.querySelector('.mpg');
     var edmunds = document.querySelector('.edmunds')

     var selectedIndex = evt.target.options.selectedIndex
     var indexEl = evt.target.options[selectedIndex]


      imgInfo.innerHTML  = `<img src="./images/${indexEl.dataset.img}">`
      modelInfo.innerHTML = carsElementDom.value
      msrpInfo.innerHTML =  indexEl.dataset.msrp
      mpgInfo.innerHTML = indexEl.dataset.mpg
      edmunds.innerHTML =   indexEl.dataset.edmunds


      // console.log(evt.target.value)
//         console.log(evt.target.options)


})
