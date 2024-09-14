const goToStepTwo = document.querySelector('#go-to-step2');
const stepOneDetails = document.querySelector('#step-one-details');

goToStepTwo.addEventListener('click', function () {
  stepOneDetails.innerHTML = `
  <!-- Step 1 start -->
  <div class="w-full p-10">
    <div class="space-y-6">
      <h1 class="text-2xl font-semibold">Select your plan</h1>
      <p class="text-gray-600">You have the option of monthly or yearly billing.</p>

      <div class="planMonth" id="planMonth">
        <button class="planButton" id="moisArcade" onclick="getPrice1()">
          <img src="./assets/images/icon-arcade.svg" alt="">
          <p>Arcade</p>
          <span class="priceMonth" id="priceMonth">$9/mo</span>
        </button>

        <button class="planButton" id="moisArcade" onclick="getPrice1()">
          <img src="./assets/images/icon-advanced.svg" alt="">
          <p>Advanced</p>
          <span class="priceMonth" id="priceMonth">$12/mo</span>
        </button>

        <button class="planButton" id="moisArcade" onclick="getPrice1()">
          <img src="./assets/images/icon-pro.svg" alt="">
          <p>Pro</p>
          <span class="priceMonth" id="priceMonth">$15/mo</span>
        </button>
      </div>

      <div class="switch">
        <p class="monthly">Monthly</p>
        <label for="" class="check">
          <input type="checkbox" name="" id="switch" id="checkbox" onclick="reset()">
          <span></span>
        </label>
        <p class="yearly">Yearly</p>
      </div>

      <div class="flex justify-end">
        <a href="">Go back</a>
    
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg" id="go-to-step2">
          Next Step
        </button>
      </div>
    </div>
  </div>
</div>`
});