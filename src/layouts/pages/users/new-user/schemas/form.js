/**
=========================================================
* Material Dashboard 2 PRO React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const form = {
  formId: "new-user-form",
  formField: {
    firstName: {
      name: "firstName",
      label: "ФИО",
      type: "text",
      errorMsg: "First name is required.",
    },
    lastName: {
      name: "lastName",
      label: "Last Name",
      type: "text",
      errorMsg: "Last name is required.",
    },
    company: {
      name: "company",
      label: "ИНН",
      type: "text",
    },
    email: {
      name: "email",
      label: "Email ",
      type: "email",
      errorMsg: "Email address is required.",
      invalidMsg: "Your email address is invalid",
    },
    referal: {
      name: "referal",
      label: "Реферал",
      type: "text",
    },
    password: {
      name: "password",
      label: "Password",
      type: "password",
      errorMsg: "Password is required.",
      invalidMsg: "Your password should be more than 6 characters.",
    },
    repeatPassword: {
      name: "repeatPassword",
      label: "Repeat Password",
      type: "password",
      errorMsg: "Password is required.",
      invalidMsg: "Your password doesn't match.",
    },
    address1: {
      name: "address1",
      label: "Улица, номер дома, индекс",
      type: "text",
      errorMsg: "Address is required.",
    },
    address2: {
      name: "address2",
      label: "Address 2",
      type: "text",
    },
    city: {
      name: "city",
      label: "City",
      type: "text",
      errorMsg: "City is required.",
    },
    zip: {
      name: "zip",
      label: "Zip",
      type: "number",
      errorMsg: "Zip is required.",
      invalidMsg: "Zipcode is not valie (e.g. 70000).",
    },
    twitter: {
      name: "twitter",
      label: "Twitter Handle",
      type: "text",
      errorMsg: "Twitter profile is required.",
    },
    facebook: {
      name: "facebook",
      label: "Facebook Account",
      type: "text",
    },
    instagram: {
      name: "instagram",
      label: "Instagram Account",
      type: "text",
    },
    vk: {
      name: "vk",
      label: "ВК",
      type: "text",
      errorMsg: "Twitter profile is required.",
    },
    ok: {
      name: "ok",
      label: "Ок",
      type: "text",
    },
    yapy: {
      name: "yapy",
      label: "yapy.ru",
      type: "text",
    },
    publicEmail: {
      name: "publicEmail",
      label: "Public Email",
      type: "email",
    },
    bio: {
      name: "bio",
      label: "Say a few words about who you are or what you’re working on.",
      // placeholder: 'Say a few words about who you are or what you’re working on.',
    },
  },
};

export default form;
