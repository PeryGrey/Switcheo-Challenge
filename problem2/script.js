'use strict';

const errorColor = "#fa5252";
const neonColor = "#e2fca4"

const address = document.querySelector('#eth-addr')
const amount = document.querySelector('#eth-amt')
const otp = document.querySelector('#otp')

const addressPlaceholder = document.querySelector('.addr-placeholder')
const amountPlaceholder = document.querySelector('.amt-placeholder')
const otpPlaceholder = document.querySelector('.otp-placeholder')

const maxEtherText = document.querySelector('.max-amt-text')
const maxEther = document.querySelector('.max-ether')

const max = document.querySelector('#max')
const otpBtn = document.querySelector('#otp-btn')

const cancel = document.querySelector('.cancel')
const send = document.querySelector('.send')

// account has 10 ETH
const maxValue = 10;
maxEther.textContent = maxValue;

// check for incorrect conditions
send.addEventListener("click", function () {

  // accepts ENS domains or hexdecimal wallet address
  if (address.value.slice(-4) !== '.eth' || (address.value.length === 66 && address.value.slice(0, 2) === '0x')) {
    addressPlaceholder.classList.add("error-message");
    address.classList.add("error-underline");
  }

  // ETH is be transfered
  if (amount.value < 0 || amount.value > maxValue) {
    amountPlaceholder.classList.add("error-message");
    amount.classList.add("error-underline");
    maxEtherText.classList.add('error-message');
  }

  // OTP.length = 6
  if (otp.value.length != 6) {
    otpPlaceholder.classList.add("error-message");
    otp.classList.add("error-underline");
  }
})

// check if incorrect fields are valid

address.addEventListener("input", function () {
  if (address.value.slice(-4) === '.eth' || (address.value.length === 66 && address.value.slice(0, 2) === '0x')) {
    addressPlaceholder.classList.remove("error-message");;
    address.classList.remove("error-underline");
  }
});

amount.addEventListener("input", function () {
  if (parseFloat(amount.value) >= 0 && parseFloat(amount.value) <= maxValue) {
    amountPlaceholder.classList.remove("error-message");;
    amount.classList.remove("error-underline");
    maxEtherText.classList.remove('error-message');

  }
})

max.addEventListener("click", function () {
  if (amount.classList.contains("error-underline")) {
    amountPlaceholder.classList.remove("error-message");;
    amount.classList.remove("error-underline");
  }
})

otp.addEventListener("input", function () {
  if (otp.value.length === 6) {
    otpPlaceholder.classList.remove("error-message");;
    otp.classList.remove("error-underline");
  }
})

// make amount input field valid if MAX btn clicked on
max.addEventListener("click", function (e) {
  e.preventDefault()
  amount.value = '10'
})
