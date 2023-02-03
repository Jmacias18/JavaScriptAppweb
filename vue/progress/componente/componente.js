const app=Vue.createApp({
    data(){
        return{
            
        }

    },
})
app.component("mi-card", {
    template: `<div class="card" style="width: 18rem;">
    <img src="https://images.ecestaticos.com/h34TvzTFVdrau9Un4Wdmwhed_e4=/0x115:2265x1390/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8ec%2F08c%2F85c%2F8ec08c85c866ccb70c4f1c36492d890f.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
})
app.component("mi-button",{
    template: `<button type="button" class="btn btn-primary">Primary</button>`
})
app.component("mi-form",{
   template: `<div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
  </div>
  <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>`
})
app.component("mi-range",{
    template: `<label for="customRange2" class="form-label">Example range</label>
    <input type="range" class="form-range" min="0" max="5" id="customRange2">`
})