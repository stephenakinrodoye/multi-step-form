//declaring variables
const goToStepTwo = document.querySelector('#go-to-step2');
const stepOneDetails = document.querySelector('#step-one-details');
const stepOneIdentifier = document.querySelector('#step-one-identifier');
const stepTwoIdentifier = document.querySelector('#step-two-identifier');
const stepThreeIdentifier = document.querySelector('#step-three-identifier');
//const stepTwoDetails = document.querySelector('#step-two-details');


//logic to move to step 2
goToStepTwo.addEventListener('click', function () {
  stepOneIdentifier.classList.remove('text-zinc-950');
  stepTwoIdentifier.classList.add('text-zinc-950');
  
  stepOneDetails.innerHTML = `  
  <!-- Step 2 start -->
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
    
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg" id="go-to-step3">
          Next Step
        </button>
      </div>
    </div>
  </div>`

  // logic to move to step 3
  const goToStepThree = document.querySelector('#go-to-step3');
  goToStepThree.addEventListener('click', () => {
    stepTwoIdentifier.classList.remove('text-zinc-950');
    stepThreeIdentifier.classList.add('text-zinc-950');

    stepOneDetails.innerHTML = `
    <!-- Add ons -->
    <div class="stepAddOn" id="stepAdOon">
      <h1>Pick add-ons</h1>
      <p class="descrition">Add-ons help enhance your gaming experience.</p>

      <div id="addonMois">
        <div class="addOnButton">
          <div class="regroup">
            <input type="checkbox" name="adOnn" id="onlineMois" value="1">
            <div class="addOn">
              <p class="AddSize">Online service</p>
              <span>Access to multiplayer games</span>
            </div>
          </div>
          <p class="prix">+$1/mo</p>
        </div> 
      
        <div class="addOnButton">
          <div class="regroup">
            <input type="checkbox" name="addon" id="storageMois" value="2">
            <div class="addOn">
              <p class="AddSize">Larger storage</p>
              <span>Extra 1TB of cloud save</span>
            </div>
          </div>
          <p class="prix">+$2/mo</p>
        </div> 

        <div class="addOnButton">
          <div class="regroup">
            <input type="checkbox" name="addon" id="customizableMois" value="1">
            <div class="addOn">
              <p class="AddSize">Customizable Profile</p>
              <span>Custom theme on your profile</span>
            </div>
          </div>
          <p class="prix">+$2/mo</p>
        </div> 
      </div>

      <div class="flex justify-end">
        <a href="" id="go-back-to-step2">Go back</a>
    
        <button class="bg-blue-600 text-white px-6 py-3 rounded-lg" id="go-to-step3">
          Next Step
        </button>
      </div>
    </div>`
  });
});

