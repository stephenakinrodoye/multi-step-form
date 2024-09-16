"use strict";

//declaring variables
const goToStepTwo = document.querySelector('#go-to-step2');
const stepOneDetails = document.querySelector('#step-one-details');
const stepOneIdentifier = document.querySelector('#step-one-identifier');
const stepTwoIdentifier = document.querySelector('#step-two-identifier');
const stepThreeIdentifier = document.querySelector('#step-three-identifier');
const stepFourIdentifier = document.querySelector('#step-four-identifier');

//const stepTwoDetails = document.querySelector('#step-two-details');


//logic to move to step 2
goToStepTwo.addEventListener('click', function () {
  stepOneIdentifier.classList.remove('text-blue-900');
  stepOneIdentifier.classList.add('text-white');
  stepTwoIdentifier.classList.remove('text-white');
  stepTwoIdentifier.classList.add('text-blue-900');
  
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

      <div class="flex justify-between">
        <a href="">Go back</a>
    
        <button class="bg-blue-900 text-white px-6 py-3 rounded-lg" id="go-to-step3">
          Next Step
        </button>
      </div>
    </div>
  </div>`

  // logic to move to step 3
  const goToStepThree = document.querySelector('#go-to-step3');

  goToStepThree.addEventListener('click', () => {
    stepTwoIdentifier.classList.remove('text-blue-900');
    stepThreeIdentifier.classList.remove('text-white');
    stepTwoIdentifier.classList.add('text-white');
    stepThreeIdentifier.classList.add('text-blue-900');

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

      <div class="flex justify-between">
        <a href="" id="go-back-to-step2">Go back</a>
    
        <button class="bg-blue-900 text-white px-6 py-3 rounded-lg" id="go-to-step4">
          Next Step
        </button>
      </div>
    </div>`

    // logic to move to step 4
    const goToStepFour = document.querySelector('#go-to-step4');

    goToStepFour.addEventListener('click', () => {
      stepThreeIdentifier.classList.remove('text-blue-900');
      stepFourIdentifier.classList.remove('text-white');
      stepThreeIdentifier.classList.add('text-white');
      stepFourIdentifier.classList.add('text-blue-900');

      stepOneDetails.innerHTML = `
      <!-- Summary -->
      <div class="stepSummary" id="stepSummary">
        <h1>Finishing up</h1>
        <p class="discription">Double-check everything looks OK before confirming.</p>
        <div class="resume">
          <div class="containerResume">
            <div id="resumeMonth">
              <div class="flexResume">
                <div>
                  <h4 id="modeResume">Choose a plan</h4>
                  <button onclick="goFromFourToTwo()">Change</button>
                </div>
                <label for="" id="priceResume"></label>
              </div>
              <hr>
              <span></span>

              <div class="flexResume">
                <p>Online service</p>
                <label for="" id="onlinePrice">+$0</label>
              </div>
              <div class="flexResume">
                <p>Larger Storage</p>
                <label for="" id="storagePrice">+$0</label>
              </div>
              <div class="flexResume">
                <p>Customizable Profile</p>
                <label for="" id="onlinePrice">+$0</label>
              </div>
            </div>
          </div>

          <!-- Dynamically add subscription and add-on selections here -->
          <div class="flexTotal">
            <p id="modeTotal">Total (per month/year)</p>
            <span id="totalPrice"></span>
            <span class="dollar">$</span>
          </div>          
        </div>
      </div>

      <div class="flex justify-between">
        <button id="go-back-step3">Go back</button>
    
        <button class="bg-blue-900 text-white px-6 py-3 rounded-lg" id="go-to-step5">
          Confirm
        </button>
      </div>`

      const goBackStepThree = document.querySelector('#go-back-step3');

  goBackStepThree.addEventListener('click', () => {
    stepTwoIdentifier.classList.remove('text-blue-900');
    stepThreeIdentifier.classList.remove('text-white');
    stepTwoIdentifier.classList.add('text-white');
    stepThreeIdentifier.classList.add('text-blue-900');

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

      <div class="flex justify-between">
        <a href="" id="go-back-to-step2">Go back</a>
    
        <button class="bg-blue-900 text-white px-6 py-3 rounded-lg" id="go-to-step4">
          Next Step
        </button>
      </div>
    </div>`
  });

      // logic to move to step 4
      const goToStepFive = document.querySelector('#go-to-step5');

      goToStepFive.addEventListener('click', () => {
        stepOneDetails.innerHTML = `
        <div class="stepThankYou" id="stepThankYou">
          <img src="./assets/images/icon-thank-you.svg" alt="">
          <h1>Thank you!</h1>
          <p>
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
          </p>
        </div>`
      });
    });

      
  });

  
});
